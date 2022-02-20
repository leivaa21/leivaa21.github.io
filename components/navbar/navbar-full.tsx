import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from '../../styles/Navbar.module.css';

import {sections} from '../_contents_/english/navSections.json'

const NavbarFull: NextPage = () => {

  const [selected, setSelected] = useState<number>()

  const router = useRouter();

  useEffect( () => {
    const path = router.pathname;
    let currentSection:number = -1;
    sections.map((section, index) => {
      if(section.url == path) currentSection = index;
    })
    setSelected(currentSection);
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
        {sections.map((section, index) => {
          if(selected === index){
            return(
              <Link href={section.url}>
                <li className={styles.selected}>{section.title}</li>
              </Link>
            )
          }
          return (
            <Link href={section.url}>
            <li className={styles.section}>{section.title}</li>
            </Link>
          )
        })}
      </ul>
    </section>
  )
}

export default NavbarFull;