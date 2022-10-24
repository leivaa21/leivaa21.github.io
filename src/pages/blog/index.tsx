import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../../components/hero'
import Navbar from '../../components/navbar'

const Blog: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Leivaa&apos;s Website</title>
        <meta name="description" content="Lorem ipsum" />
      </Head>

      <main>
        <Navbar />
        <Header />
        <section id="Blog">
        
        </section>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Blog;
