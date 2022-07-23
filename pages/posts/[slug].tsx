import { allPosts, Post } from '.contentlayer/generated'
import { Heading } from '@chakra-ui/react'
import type { GetStaticProps } from 'next'
import Layout from './../../layouts/index'

export const getStaticPaths = () => {
  const paths = allPosts.map(post => `/posts/${post._raw.flattenedPath}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = context => {
  const slug = context.params!.slug
  const post = allPosts.find(post => post._raw.flattenedPath === slug)
  return { props: { post } }
}

const PostLayout: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <Layout>
      <div>
        <Heading>{post.title}</Heading>
        <div dangerouslySetInnerHTML={{ __html: post.body.html }}></div>
      </div>
    </Layout>
  )
}
export default PostLayout
