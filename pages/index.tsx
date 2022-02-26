import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Home from '../components/home'
import Navbar from '../components/navbar/navbar'

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Leivaa{"'"}s Portfolio</title>
      </Head>
      <Header />
      <Navbar />
      <Home />
    </div>
  )
}

export default Index
