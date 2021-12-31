// 31 DEC 2021 TRAN MINH HAI 
// Dynamic route with pre-rendered page at server side 
// using getStaticPaths and getStaticProps 
// getStaticProps will fetch content for each page-id 
// getStaticPaths return all possible page-id 
// component Note({ note }) will rendered with data note.content 
//


import { useRouter } from 'next/router';

const Note = ({ note }) => {

  const router = useRouter()
  const { pid } = router.query 
  console.log(note)

  return (
    <p>
      Note: {pid} {router.query.id} {note.content}
    </p>
  )
}

export async function getStaticPaths() {
  return {
    paths: [ 
      {
        params: {id: '1'}
      }, 
      {
        params: {id: '2'}
      }, 
      {
        params: {id: '3'}
      }, 
      {
        params: {id: '4'}
      }, 
      {
        params: {id: '5'}
      }
    ], 
    fallback: false 
  }
}


export async function getStaticProps ( {params} ) {

  console.log(params.id)

  const note = { 'content': 'This is page ' + params.id }

  return { props: { note } }
}

export default Note; 
