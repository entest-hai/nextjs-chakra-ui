import { allSageMakers } from '.contentlayer/generated'
import type { GetStaticProps } from 'next'
import Layout from './../../layouts/index'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { MDXComponents } from 'components/mdx-components/mdx-components'

export const getStaticPaths = () => {
  const paths = allSageMakers.map(post => `/${post._raw.flattenedPath}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = context => {
  const slug = context.params!.slug
  const post = allSageMakers.find(post => post.url === `/sagemaker/${slug}`)
  return { props: { post } }
}

const SageMakerPost = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <Layout frontMatter={post?.frontMatter}>
      <MDXContent components={MDXComponents}></MDXContent>
    </Layout>
  )
}

export default SageMakerPost
