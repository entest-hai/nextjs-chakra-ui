import { allPosts } from '.contentlayer/generated'
import type { GetStaticProps } from 'next'
import Layout from './../../layouts/index'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { MDXComponents } from './../../src/components/mdx-components/mdx-component'

export const getStaticPaths = () => {
  const paths = allPosts.map(post => `/posts/${post._raw.flattenedPath}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = context => {
  const slug = context.params!.slug
  const post = allPosts.find(post => post._raw.flattenedPath === slug)
  return { props: { post } }
}

const MyPost = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <Layout frontMatter={post?.frontMatter}>
      <MDXContent components={MDXComponents}></MDXContent>
    </Layout>
  )
}

export default MyPost
