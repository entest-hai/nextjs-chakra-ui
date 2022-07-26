import { allCdks } from '.contentlayer/generated'
import type { GetStaticProps } from 'next'
import Layout from './../layouts/index'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { MDXComponents } from 'components/mdx-components/mdx-components'

export const getStaticProps: GetStaticProps = () => {
  const cdk = allCdks.find(cdk => cdk.url === '/cdk/getting-started')
  return { props: { cdk } }
}

const CdkHomePage = ({ cdk }) => {
  const MDXContent = useMDXComponent(cdk.body.code)

  return (
    <Layout frontMatter={cdk?.frontMatter}>
      <MDXContent components={MDXComponents}></MDXContent>
    </Layout>
  )
}

export default CdkHomePage
