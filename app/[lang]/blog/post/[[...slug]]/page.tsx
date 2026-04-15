import type { Metadata } from 'next'
import {
  JsonLd,
  PageViewer,
  cleanPage,
  fetchPage,
  fetchPages,
  getBricks,
  getMetadata,
  types,
} from 'react-bricks/rsc'
import { ClickToEdit } from 'react-bricks/rsc/client'

import ErrorNoKeys from '@/components/errorNoKeys'
import ErrorNoPage from '@/components/errorNoPage'
import { i18n } from '@/i18n-config'
import config from '@/react-bricks/config'

const getData = async (
  slug: any,
  locale: string
): Promise<{
  page: types.Page | null
  errorNoKeys: boolean
  errorPage: boolean
}> => {
  let errorNoKeys: boolean = false
  let errorPage: boolean = false

  if (!config.apiKey) {
    errorNoKeys = true

    return {
      page: null,
      errorNoKeys,
      errorPage,
    }
  }

  let cleanSlug = ''

  if (!slug) {
    cleanSlug = '/'
  } else if (typeof slug === 'string') {
    cleanSlug = slug
  } else {
    cleanSlug = slug.join('/')
  }

  const page = await fetchPage({
    slug: cleanSlug,
    language: locale,
    config,
  }).catch(() => {
    errorPage = true
    return null
  })

  return {
    page,
    errorNoKeys,
    errorPage,
  }
}

export async function generateStaticParams() {
  if (!config.apiKey) {
    return []
  }

  const pagesByLocale = await Promise.all(
    i18n.locales.map(async (lang) => {
      const allPages = await fetchPages({
        language: lang,
        type: 'blog',
        pageSize: 100,
        sort: '-publishedAt',
        config,
      })

      return allPages.map((page) => ({
        lang,
        slug: page.slug.split('/').filter(Boolean),
      }))
    })
  )

  return pagesByLocale.flat()
}

export async function generateMetadata(props: {
  params: Promise<{ lang: string; slug?: string[] }>
}): Promise<Metadata> {
  const params = await props.params
  const { page } = await getData(params.slug?.join('/'), params.lang)
  if (!page?.meta) {
    return {}
  }

  return getMetadata(page)
}

export default async function Page(props: {
  params: Promise<{ lang: string; slug?: string[] }>
}) {
  const params = await props.params
  const { page, errorNoKeys, errorPage } = await getData(
    params.slug?.join('/'),
    params.lang
  )

  // Clean the received content
  // Removes unknown or not allowed bricks
  const bricks = getBricks()
  const pageOk = page ? cleanPage(page, config.pageTypes || [], bricks) : null

  return (
    <>
      {page?.meta && <JsonLd page={page}></JsonLd>}
      {pageOk && !errorPage && !errorNoKeys && (
        <PageViewer page={pageOk} main />
      )}
      {errorNoKeys && <ErrorNoKeys />}
      {errorPage && <ErrorNoPage />}
      {pageOk && config && (
        <ClickToEdit
          pageId={pageOk?.id}
          language={params.lang}
          editorPath={config.editorPath || '/admin/editor'}
          clickToEditSide={config.clickToEditSide}
        />
      )}
    </>
  )
}
