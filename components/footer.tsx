/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import {FiTwitter, FiGithub, FiTwitch, FiYoutube} from 'react-icons/fi'
import { GiWorld } from 'react-icons/gi';
import {RiCopyrightLine, RiTelegramLine  } from 'react-icons/ri';
import {MdOutlineMailOutline, MdOutlineLocationOn} from 'react-icons/md'
import { useThemeState } from '../lib/ThemeHook';
interface FooterInfo {

} 

const Footer = (/**content: {info: FooterInfo}*/) => {
  const {theme, setTheme} = useThemeState();
  return (
    <div className={theme === 'Dark' ? 'darkTheme' : 'whiteTheme'}>
      <footer className={styles.footer}>
        <div className={styles.col}>
          <div className={styles.sRow}>
            <h3>Leivaa_</h3>
          </div>
          <div className={styles.sRow}>
            <Link href="/" passHref>
              <img
                src="images/leivaalogo.png"
                className={styles.logo}
                alt="Leivaa logo"
              />
            </Link>
          </div>
          <div className={styles.sRow}>
            <a href="https://twitter.com/Leivaa21_" target="_blank" rel="noopener noreferrer">
              <FiTwitter className={styles.socialMedia}/>
            </a>
            <a href="https://twitch.tv/leivaa_" target="_blank" rel="noopener noreferrer">
              <FiTwitch className={styles.socialMedia}/>
            </a>
            <a href="https://github.com/leivaa21" target="_blank" rel="noopener noreferrer">
              <FiGithub className={styles.socialMedia}/>
            </a>
            <a href="https://www.youtube.com/leivaa" target="_blank" rel="noopener noreferrer">
              <FiYoutube className={styles.socialMedia}/>
            </a>
            <a href="https://telegram.me/leivaa21" target="_blank" rel="noopener noreferrer">
              <RiTelegramLine className={styles.socialMedia}/>
            </a>
            <Link href="/" passHref>
              <GiWorld className={styles.socialMedia}/>
            </Link>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.sRow}>
          </div>
          <div className={styles.sRow}>
            <a href="mailto:adrianleivarojano21@gmail.es" target="_blank" rel="noopener noreferrer">
              <h4><MdOutlineMailOutline/>adrianleivarojano21@gmail.com</h4>
            </a>
          </div>
          <div className={styles.sRow}>
            <a href="https://www.google.com/maps/place/C%C3%B3rdoba/" target="_blank" rel="noopener noreferrer">
              <h4><MdOutlineLocationOn/>Andalucia, Córdoba</h4>
            </a>
          </div>
          <div className={styles.sRow}>
            <h4><RiCopyrightLine/> Adrián Leiva Rojano - 2022</h4>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;