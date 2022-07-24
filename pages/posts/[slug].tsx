import { allPosts, Post } from '.contentlayer/generated'
import { Heading } from '@chakra-ui/react'
import type { GetStaticProps } from 'next'
import Layout from './../../layouts/index'
import { Button } from '@chakra-ui/react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import * as Chakra from '@chakra-ui/react'

const { Alert, AspectRatio, Box, chakra, Kbd } = Chakra

const mdxComponent = {
  ...Chakra,
  h1: props => (
    <chakra.h1
      fontSize={'5xl'}
      textStyle={'Heading'}
      apply={'mdx.h1'}
      {...props}
    ></chakra.h1>
  ),
  h2: props => (
    <chakra.h2
      fontSize={'3xl'}
      textStyle={'Heading'}
      apply={'mdx.h2'}
      {...props}
    ></chakra.h2>
  ),
  Button
}

export const getStaticPaths = () => {
  const paths = allPosts.map(post => `/posts/${post._raw.flattenedPath}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = context => {
  const slug = context.params!.slug
  const post = allPosts.find(post => post._raw.flattenedPath === slug)
  return { props: { post } }
}

// const PostLayout: React.FC<{ post: Post }> = ({ post }) => {
//   return (
//     <Layout>
//       <div>
//         <Heading>{post.title}</Heading>
//         <div dangerouslySetInnerHTML={{ __html: post.body.html }}></div>
//       </div>
//     </Layout>
//   )
// }

const MyPost = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <Layout>
      <div>
        <Heading>{post.title}</Heading>
        <MDXContent components={mdxComponent}></MDXContent>
      </div>
    </Layout>
  )
}

export default MyPost
