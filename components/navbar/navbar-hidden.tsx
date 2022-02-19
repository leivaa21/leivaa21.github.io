import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CgMenuMotion } from 'react-icons/cg';
import { VscChromeClose } from 'react-icons/vsc'
import styles from '../../styles/Navbar.module.css';

type HiddenNavbarStatus = 'Hidden'|'Shown';

const NavbarHidden: NextPage = () => {
  
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
      if(path == '/') setSelected(0);
      if(path == '/about') setSelected(1);
      if(path == '/career') setSelected(2);
      if(path == '/projects') setSelected(3);
      if(path == '/contact') setSelected(4);  
    })

    
    return (
      <section className={styles.NavbarMenu} id='NavbarMenu'>

        <div className={styles.SectionList}>


        {(selected === 0) ? 
          <Link href='/'>
            <h2 className={styles.selected}>Home</h2>
          </Link>
          :
          <Link href='/'>
            <h2>Home</h2>
          </Link>
        }

        {(selected === 1) ? 
          <Link href='/about'>
            <h2 className={styles.selected}>About</h2>
          </Link>
          :
          <Link href='/about'>
            <h2>About</h2>
          </Link>
        }

        {(selected === 2) ? 
          <Link href='/career'>
            <h2 className={styles.selected}>Career</h2>
          </Link>
          :
          <Link href='/career'>
            <h2>Career</h2>
          </Link>
        }

        {(selected === 3) ? 
          <Link href='/projects'>
            <h2 className={styles.selected}>Projects</h2>
          </Link>
          :
          <Link href='/projects'>
            <h2>Projects</h2>
          </Link>
        }

        {(selected === 4) ? 
          <Link href='/contact'>
            <h2 className={styles.selected}>Contact</h2>
          </Link>
          :
          <Link href='/contact'>
            <h2>Contact</h2>
          </Link>
        }


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
