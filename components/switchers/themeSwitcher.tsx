import { NextPage } from "next";
import { useState } from "react";
import styles from '../../styles/Switchers.module.css';
const ThemeSwitch: NextPage = () => {
  type ThemeType = 'Light'|'Dark';
  const [theme, switchTheme] = useState<ThemeType>('Light');

  const toggleTheme = () => {
    if(theme == 'Light') {
      switchTheme('Dark');
      return;
    }
    switchTheme('Light');
  }

  return (
    <div>
      <input type="checkbox" id="themeSwitch" className={styles.themeSwitch} onChange={toggleTheme}/>
      <label htmlFor="themeSwitch">Theme {theme}</label>
    </div>
  )
}

export default ThemeSwitch;