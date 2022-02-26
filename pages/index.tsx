import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Home from '../components/home'
import Navbar from '../components/navbar/navbar'

/** Langs */

//Header
import headerEnglishContent from '../components/_contents_/english/header.json'
import headerSpanishContent from '../components/_contents_/spanish/header.json'

//Navbar
import navEnglishContent from '../components/_contents_/english/navSections.json'
import navSpanishContent from '../components/_contents_/spanish/navSections.json'
import { useLangState } from '../lib/LanguageHook'
//Home
import homeEnglishContent from '../components/_contents_/english/home.json'
import homeSpanishContent from '../components/_contents_/spanish/home.json'
import Footer from '../components/footer'





const Index: NextPage = () => {
  const {language, setLanguage} = useLangState();

  return (
    <div>
      <Head>
        <title>Leivaa{"'"}s Portfolio</title>
      </Head>
      {
        language === 'English' ? 
          <>
            <Header info={headerEnglishContent}/>
            <Navbar sections={navEnglishContent.sections} />  
            <Home sections={homeEnglishContent.sections} />
          </>
          :
          <>
            <Header info={headerSpanishContent}/>
            <Navbar sections={navSpanishContent.sections} />  
            <Home sections={homeSpanishContent.sections} />
          </>        
      }
      <Footer/>
    </div>
  )
}

export default Index
