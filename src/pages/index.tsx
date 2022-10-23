import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Navbar from '../components/navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Leivaa&apos;s Website</title>
        <meta name="description" content="Lorem ipsum" />
      </Head>

      <main>
        <Header />
        <Navbar />
        <section id="Home">
        
        </section>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home;
