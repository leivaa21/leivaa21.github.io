import Link from 'next/link';
import { useRouter } from 'next/router';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useScrollHandler } from '../../hooks/useScrollHandler';

import { HiMenu } from 'react-icons/hi';

import styles from './navbar.module.css';
import { useEffect, useState } from 'react';

const Navbar = () => {

  const router = useRouter();
  const contents = [
    {
      title: "Home",
      icon: "🏠",
      href: "/",
    },
    {
      title: "Career",
      icon: "📜",
      href: "/career",
    },
    {
      title: "Blog",
      icon: "📝",
      href: "/blog",
    }
  ]

  const scrolled = useScrollHandler();

  const [isLowWidth, setLowWitdhCheck] = useState<boolean>(false);
  const {width} = useWindowSize();
  
  useEffect(() => {
    setLowWitdhCheck(width < 900);
  }, [width])

  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const toggleShown = () => {
    setShowNavbar(!showNavbar);
  }

  const formated_sections = <ul>
      {contents.map(content => (
        <Link key={`nav-${content.title}`} href={content.href}>
          <li className={router.route == content.href ? styles.active: ""}>
              <span><p>{content.icon}{content.title}</p></span>
          </li>
        </Link>
      ))}
      </ul>

  const compactNavbar: JSX.Element = showNavbar ? (
    <div className={styles.compact_background} onClick={toggleShown}>
     {formated_sections} 
    </div>
  ): <button onClick={toggleShown}><HiMenu /></button>;

  if (isLowWidth) {
    return (
      <section id="compact-navbar" className={styles.base_compact}>
        {compactNavbar}
      </section>
    )
  }

  return (
  <section id="navbar" className={`${styles.base} ${scrolled? styles.scrolled : ''}`}>
    {formated_sections} 
  </section>
  )
}

export default Navbar;
