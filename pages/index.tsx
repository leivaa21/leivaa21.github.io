import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Leivaa's Portfolio</title>
      </Head>
      <Header />
      <Navbar />
    </div>
  )
}

export default Home
