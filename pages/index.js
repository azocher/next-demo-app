import Head from 'next/head'
import Link from 'next/link'

export default function Home(props) {
  let name = props.name

  return (
    <div>
      <Head>
        <title>Hello! This is my website.</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"></link>
      </Head>
      <h1>Hello, {name} 👋</h1>
      <h2>Specific Styling</h2>
      <ul>
        <li>
          <Link href="/users/user"><a>User Page</a></Link>
        </li>
        <li>
          <Link href="/about"><a>About Page</a></Link>
        </li>
      </ul>
      <style jsx>{`
        h2 {
          color: blue;
        }
      `}
      </style>
    </div>
  )
}

export async function getServerSideProps(context) {
  let name = context.query.name

  return {
    props: {
      name
    }
  }
}