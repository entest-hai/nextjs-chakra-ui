import { useRouter } from 'next/router'
// import * as Chakra from '@chakra-ui/react'
import Layout from './../../layouts/index'
// import { useMDXComponent } from 'next-contentlayer/hooks'
// import data from './../../.contentlayer/generated/Post/posts__change-me.mdx.json'

// const { Alert, AspectRatio, Box, chakra, Kbd } = Chakra

// export const MDXComponents = {
//   ...Chakra,
//   h1: props => <chakra.h1 apply="mdx.h1" {...props} />
// }

const Post = ({ message }) => {
  const router = useRouter()
  const slug = (router.query.slug as string[]) || []

  // const Componnent = useMDXComponent(data.body.code)

  return (
    <Layout>
      {/* <Componnent components={MDXComponents}></Componnent> */}
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: ['1'] } }, { params: { slug: ['2'] } }],
    fallback: false
  }
}

export async function getStaticProps(context) {
  const data = context.params.slug

  return {
    props: {
      message: data
    }
  }
}

export default Post
