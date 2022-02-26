import { NextPage } from "next";
import { useState } from "react";
import styles from '../../styles/Switchers.module.css';
const LangSwitch: NextPage = () => {
  type Language = 'English'|'Spanish';
  const [Lang, switchLang] = useState<Language>('English');

  const toggleLang = () => {
    if(Lang == 'English') {
      switchLang('Spanish');
      return;
    }
    switchLang('English');
  }

  return (
    <div>
      <input type="checkbox" id="langSwitch" className={styles.themeSwitch} onChange={toggleLang}/>
      <label htmlFor="langSwitch">Language {Lang}</label>
    </div>
  )
}

export default LangSwitch;