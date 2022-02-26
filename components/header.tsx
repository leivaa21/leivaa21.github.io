/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Header.module.css';
import { VscGithub } from 'react-icons/vsc';
import { SiLinkedin, SiTwitter, SiTelegram } from 'react-icons/si';

import ThemeSwitch from './switchers/themeSwitcher'
import LangSwitch from "./switchers/langSwitcher";
import { useThemeState } from '../lib/ThemeHook';

interface HeaderInfo {
  ProfesionalTitle: string,
  Specialization: string,
  SocialMedia: string
}
const Header = (content: { info: HeaderInfo }) => {
  const {theme, setTheme} = useThemeState();
  
  return (
    <div className={theme === 'Dark' ? 'darkTheme' : 'whiteTheme'}>
    <section className={styles.Header}>
      <div className={styles.Col}>
        <img
          src='/images/profilephoto.jpg'
          className={styles.profilePhoto}
          alt="Photo of myself"
        />
        <ThemeSwitch/>
        <LangSwitch/>

      </div>
      <div className={styles.Col}>
        <h1>Adrián Leiva Rojano</h1>
        <h3>{content.info.ProfesionalTitle}</h3>
        <h4>{content.info.Specialization}</h4>
      </div>
      <div className={styles.Col}>
        <h3>{content.info.SocialMedia}</h3>
        <ul className={styles.SocialMediaList}>
          <li>
            <a href="https://github.com/leivaa21" target="_blank" rel="noreferrer" >
              <VscGithub className={styles.socialLogo}/> @Leivaa21
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/adrian-leiva-rojano-02763b216/" target="_blank" rel="noreferrer" >
              <SiLinkedin className={styles.socialLogo}/> Adrián Leiva Rojano
            </a>
          </li>
          <li>
            <a href="https://twitter.com/leivaa21_" target="_blank" rel="noreferrer" >
              <SiTwitter className={styles.socialLogo}/> @Leivaa21_
            </a>
          </li>
          <li>
            <a href="https://telegram.me/leivaa21" target="_blank" rel="noreferrer" >
              <SiTelegram className={styles.socialLogo}/> @Leivaa_
            </a>
          </li>
        </ul>
      </div>
      </section>
    </div>
      
  )
}

export default Header;