import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from '../../styles/Navbar.module.css';

const NavbarFull: NextPage = () => {

  const [selected, setSelected] = useState<number>()

  const router = useRouter();

  useEffect( () => {
    const path = router.pathname;
    if(path == '/') setSelected(0);
    if(path == '/about') setSelected(1);
    if(path == '/career') setSelected(2);
    if(path == '/projects') setSelected(3);
    if(path == '/contact') setSelected(4);
  })

  return(
    <section className={styles.Navbar}>
      <Link href="/">
        <a>
          <img
            src="images/leivaalogo.png"
            width='75'
            className={styles.logoNavbar}
          />
        </a>
      </Link>
      <ul>
        {(selected === 0) ? 
          <Link href='/'>
            <li className={styles.selected}>Home</li>
          </Link>
          :
          <Link href='/'>
            <li className={styles.section}>Home</li>
          </Link>
        }
        {(selected === 1) ? 
          <Link href='/about'>
            <li className={styles.selected}>About</li>
          </Link>
          :
          <Link href='/about'>
            <li className={styles.section}>About</li>
          </Link>
        }
        {(selected === 2) ? 
          <Link href='/career'>
            <li className={styles.selected}>Career</li>
          </Link>
          :
          <Link href='/career'>
            <li className={styles.section}>Career</li>
          </Link>
        }
        {(selected === 3) ? 
          <Link href='/projects'>
            <li className={styles.selected}>Projects</li>
          </Link>
          :
          <Link href='/projects'>
            <li className={styles.section}>Projects</li>
          </Link>
        }
        {(selected === 4) ? 
          <Link href='/contact'>
            <li className={styles.selected}>Contact</li>
          </Link>
          :
          <Link href='/contact'>
            <li className={styles.section}>Contact</li>
          </Link>
        }
      </ul>
    </section>
  )
}

export default NavbarFull;