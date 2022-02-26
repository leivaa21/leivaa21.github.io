import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Navbar from '../components/navbar/navbar'

/** Langs */

//Header
import headerEnglishContent from '../components/_contents_/english/header.json'
import headerSpanishContent from '../components/_contents_/spanish/header.json'

//Navbar
import navEnglishContent from '../components/_contents_/english/navSections.json'
import navSpanishContent from '../components/_contents_/spanish/navSections.json'
import { useLangState } from '../lib/LanguageHook'

import Footer from '../components/footer'
import CareerSection from '../components/careerSection'





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
          </>
          :
          <>
            <Header info={headerSpanishContent}/>
            <Navbar sections={navSpanishContent.sections} />  
          </>        
      }
      <CareerSection />
      <Footer/>
    </div>
  )
}

export default Index
