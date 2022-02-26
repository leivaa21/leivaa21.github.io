import { NextPage } from "next";
import styles from '../../styles/Switchers.module.css';
import { useThemeState } from "../../lib/ThemeHook";

const ThemeSwitch: NextPage = () => {
  const {theme, setTheme} = useThemeState();

  const toggleTheme = () => {
    if(theme == 'Light') {
      setTheme('Dark');
      return;
    }
    setTheme('Light');
  }
  return (
    <div>
      {(theme === 'Dark') ?
        <input type="checkbox" id="themeSwitch" className={styles.Switcher + ' ' + styles.ThemeSwitch + ' ' + styles.checked} onChange={toggleTheme} />
        :
        <input type="checkbox" id="themeSwitch" className={styles.Switcher + ' ' + styles.ThemeSwitch} onChange={toggleTheme} />
      }
      <label htmlFor="themeSwitch"></label>
    </div>
  )
}

export default ThemeSwitch;