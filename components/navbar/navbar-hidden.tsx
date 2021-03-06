import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CgMenuMotion } from 'react-icons/cg';
import { VscChromeClose } from 'react-icons/vsc'
import styles from '../../styles/Navbar.module.css';


type HiddenNavbarStatus = 'Hidden'|'Shown';

const NavbarHidden = ( content: { sections: any[]; }  ) => {
  
  const [status, setStatus] = useState<HiddenNavbarStatus>('Hidden');

  const toggleStatus = () => {
    if(status === 'Hidden') {
      setStatus('Shown');
      return;
    }
    setStatus('Hidden');
  }

  const NavbarMenu: NextPage = () => {

    const [selected, setSelected] = useState<number>()

    const router = useRouter();
  
    useEffect( () => {

      const closeOnClickHandler = (e: any) => {
        const navbar = document.querySelector('#NavbarMenu');
        if(!navbar) return;
        if(navbar.contains(e.target)) setStatus('Hidden');
      }
      
      window.addEventListener("click", closeOnClickHandler )
      
      const path = router.pathname;
      let currentSection:number = -1;
      content.sections.map((section, index) => {
        if(section.url == path) currentSection = index;
      })
      setSelected(currentSection);
    
    }, [router.pathname, setSelected])

    
    return (
      <section className={styles.NavbarMenu} id='NavbarMenu'>

        <div className={styles.SectionList}>

        {content.sections.map((section, index) => {
          if(selected === index){
            return(
              <Link href={section.url} passHref key={`Link#${index}`}>
                <h2 className={styles.selected} onClick={toggleStatus}>{section.title}</h2>
              </Link>
            )
          }
          return (
            <Link href={section.url} passHref key={`Link#${index}`}>
              <h2 onClick={toggleStatus}>{section.title}</h2>
            </Link>
          )
        })}


          <h3 onClick={toggleStatus}>
              <VscChromeClose/>
          </h3>

        </div>
      
      </section>
    )
  }

  return (
    <>
    {
      status === 'Hidden' ? 
        <a className={styles.ToggleButton} onClick={toggleStatus}>
          <CgMenuMotion/>
        </a> : <NavbarMenu/>
    }
    </>
  )


}

export default NavbarHidden;
