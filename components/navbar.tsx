import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import styles from '../styles/Navbar.module.css';
const Navbar: NextPage = () => {

  const [selected, setSelected] = useState<number>(0)

  const handleNavbar = (e: React.MouseEvent<HTMLElement> ) => {
    setSelected(parseInt(e.currentTarget.id))
  }

  return(
    <section className={styles.Navbar}>
      <Link href="/">
        <a id='0' onClick={handleNavbar}>
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
            <a id='0' onClick={handleNavbar}>
              <li className={styles.selected}>Home</li>
            </a>
          </Link>
          :
          <Link href='/'>
            <a id='0' onClick={handleNavbar}>
              <li className={styles.section}>Home</li>
            </a>
          </Link>
        }
        {(selected === 1) ? 
          <Link href='/about'>
            <a id='1' onClick={handleNavbar}>
              <li className={styles.selected}>About</li>
            </a>
          </Link>
          :
          <Link href='/about'>
            <a id='1' onClick={handleNavbar}>
              <li className={styles.section}>About</li>
            </a>
          </Link>
        }
        {(selected === 2) ? 
          <Link href='/career'>
            <a id='2' onClick={handleNavbar}>
              <li className={styles.selected}>Career</li>
            </a>
          </Link>
          :
          <Link href='/career'>
            <a id='2' onClick={handleNavbar}>
              <li className={styles.section}>Career</li>
            </a>
          </Link>
        }
        {(selected === 3) ? 
          <Link href='/projects'>
            <a id='3' onClick={handleNavbar}>
              <li className={styles.selected}>Projects</li>
            </a>
          </Link>
          :
          <Link href='/projects'>
            <a id='3' onClick={handleNavbar}>
              <li className={styles.section}>Projects</li>
            </a>
          </Link>
        }
        {(selected === 4) ? 
          <Link href='/contact'>
            <a id='4' onClick={handleNavbar}>
              <li className={styles.selected}>Contact</li>
            </a>
          </Link>
          :
          <Link href='/contact'>
            <a id='4' onClick={handleNavbar}>
              <li className={styles.section}>Contact</li>
            </a>
          </Link>
        }
      </ul>
    </section>
  )
}

export default Navbar;