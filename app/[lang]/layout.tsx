import { Inter, Open_Sans } from 'next/font/google'
import { register } from 'react-bricks/rsc'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['600', '700', '800', '900'],
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
  weight: ['400', '500', '600'],
})

import ReactBricksApp from '@/components/ReactBricksApp'
import BBNavbar from '@/components/BBNavbar'
import BBFooter from '@/components/BBFooter'
import ErrorNoKeys from '@/components/errorNoKeys'
import PageLayout from '@/components/layout'
import { ThemeProvider } from '@/components/themeProvider'
import { i18n } from '@/i18n-config'
import config from '@/react-bricks/config'

import '@/css/styles.css'

export const metadata = {
  title: 'React Bricks Starter',
  description: 'Next.js with Server Components',
}

register(config)

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    lang: locale,
  }))
}

export default async function Layout(props: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const params = await props.params

  const { children } = props

  return (
    <html
      lang={params.lang}
      className={`${inter.variable} ${openSans.variable}`}
      suppressHydrationWarning
    >
      <body className={`font-sans dark:bg-gray-900 antialiased`}>
        <ThemeProvider
          attribute="class"
          storageKey="color-mode"
          enableSystem={false}
          defaultTheme="light"
        >
          <main>
            <ReactBricksApp>
              <PageLayout>
                <BBNavbar />
                {children}
                <BBFooter />
              </PageLayout>
            </ReactBricksApp>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
