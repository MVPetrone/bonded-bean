import type { Metadata } from 'next'

import ErrorNoPage from '@/components/errorNoPage'

export const metadata: Metadata = {
  title: 'Preview',
  description: 'Page preview requires a running server.',
}

export default function Page() {
  return <ErrorNoPage />
}
