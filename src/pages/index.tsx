import type { NextPage } from 'next'
import Head from 'next/head'
import Info from '../components/files/info'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import TerminalContainer from '../components/terminal-container'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Leivaa&apos;s Website</title>
        <meta name="description" content="Lorem ipsum" />
      </Head>

      <main>
        <Hero />
        <Navbar />
        <section id="Home">
          <TerminalContainer command='mdcat' param='info.md' width='80vw' height='min-content' margin='10vh 10vw'>
            <Info/>
          </TerminalContainer>
        </section>
      </main>
      <footer>
      </footer>
    </div>
  )
}

export default Home;
