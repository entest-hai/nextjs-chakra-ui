import { useRouter } from 'next/router'

const Post = ({ message }) => {
  const router = useRouter()
  const slug = (router.query.slug as string[]) || []

  return (
    <p>
      Post: {slug.join('/')} Data: {message}
    </p>
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
