import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Navbar from '../components/navbar/navbar'

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Leivaa's Portfolio</title>
      </Head>
      <Header />
      <Navbar />
    </div>
  )
}

export default Index
