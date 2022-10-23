import type { NextPage } from 'next'
import Head from 'next/head'
import Info from '../components/files/info'
import Header from '../components/header'
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
        <Header />
        <Navbar />
        <section id="Home">
          <div>
            <h1>Hello World!</h1>
          </div>
          <TerminalContainer command='mdcat' file='info.md'>
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
