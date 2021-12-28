import Head from 'next/head'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Interactive Comment Section</title>
        <meta
          name="description"
          content="Comment section component with replies and voting"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Interactive Comment Section</h1>
      </main>
    </>
  )
}

export default Home
