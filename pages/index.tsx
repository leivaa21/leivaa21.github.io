import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Leivaa's Portfolio</title>
      </Head>
      <Header />
    </div>
  )
}

export default Home
