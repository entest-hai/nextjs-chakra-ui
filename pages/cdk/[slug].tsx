import { allCdks } from '.contentlayer/generated'
import type { GetStaticProps } from 'next'
import Layout from './../../layouts/index'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { MDXComponents } from 'components/mdx-components/mdx-components'

export const getStaticPaths = () => {
  const paths = allCdks.map(cdk => `/${cdk._raw.flattenedPath}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = context => {
  const slug = context.params!.slug
  const cdk = allCdks.find(cdk => cdk.url === `/cdk/${slug}`)
  return { props: { cdk } }
}

const Mycdk = ({ cdk }) => {
  const MDXContent = useMDXComponent(cdk.body.code)

  return (
    <Layout frontMatter={cdk?.frontMatter}>
      <MDXContent components={MDXComponents}></MDXContent>
    </Layout>
  )
}

export default Mycdk
