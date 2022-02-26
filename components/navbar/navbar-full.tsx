import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from '../../styles/Navbar.module.css';


const NavbarFull = ( content: { sections: any[]; }  ) => {

  const [selected, setSelected] = useState<number>()

  const router = useRouter();

  useEffect( () => {
    const path = router.pathname;
    let currentSection:number = -1;
    content.sections.map((section, index) => {
      if(section.url == path) currentSection = index;
    })
    setSelected(currentSection);
  }, [content.sections, router.pathname, setSelected])

  return(
    <section className={styles.Navbar}>

      <ul>
        {content.sections.map((section, index) => {
          if(selected === index){
            return(
              <Link href={section.url} passHref key={`Link#${index}`}>
                <li className={styles.selected}>{section.title}</li>
              </Link>
            )
          }
          return (
            <Link href={section.url} passHref key={`Link#${index}`}>
              <li className={styles.section}>{section.title}</li>
            </Link>
          )
        })}
      </ul>
    </section>
  )
}

export default NavbarFull;