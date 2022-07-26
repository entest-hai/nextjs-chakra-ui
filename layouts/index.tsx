// haimtran 25 jul 2022
// BlogLayout, ComponentLayout and so on

import { PageContainer } from 'components/page-container'
import { Sidebar } from 'components/sidebar/sidebar'
import { Heading } from 'components/page-container'
import React from 'react'

export default function DefaultLayout(props: {
  children: React.ReactNode
  frontMatter: any
  hidToc?: boolean
  maxWidth?: string
}) {
  const frontMatterSample = {
    title: 'Frontmatter Tittle',
    headings: [
      {
        level: 'h2',
        text: 'Setup',
        id: '123'
      } as Heading,
      {
        level: 'h2',
        text: 'Synthesize',
        id: '124'
      } as Heading,
      {
        level: 'h3',
        text: 'Deploy',
        id: '125'
      } as Heading
    ]
  }

  const { children, frontMatter = frontMatterSample, ...rest } = props

  return (
    <PageContainer frontmatter={frontMatter} sidebar={<Sidebar></Sidebar>}>
      {children}
    </PageContainer>
  )
}
