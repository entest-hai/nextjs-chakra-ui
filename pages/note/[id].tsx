import { useRouter } from 'next/router'

const Note = () => {
  const router = useRouter()
  const { pid } = router.query

  console.log(router.query.id)

  return <p>Note: {pid} {router.query.id}</p>
}

export default Note