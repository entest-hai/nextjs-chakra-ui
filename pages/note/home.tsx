import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/note/abc">
          <a>Go to pages/note/[pid].js</a>
        </Link>
      </li>
      <li>
        <Link href="/note/abc?foo=bar">
          <a>Also goes to pages/note/[pid].js</a>
        </Link>
      </li>
      <li>
        <Link href="/note/abc/a-comment">
          <a>Go to pages/note/[pid]/[comment].js</a>
        </Link>
      </li>
    </ul>
  )
}

export default Home