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

//About
import aboutSectionEnglishContent from '../components/_contents_/english/aboutMeSection.json';
import aboutSectionSpanishContent from '../components/_contents_/spanish/aboutMeSection.json';

import Footer from '../components/footer'
import AboutSection from '../components/aboutSection'





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
            <AboutSection section={aboutSectionEnglishContent} />
          </>
          :
          <>
            <Header info={headerSpanishContent}/>
            <Navbar sections={navSpanishContent.sections} />
            <AboutSection section={aboutSectionSpanishContent} />

          </>        
      }
      <Footer/>
    </div>
  )
}

export default Index
