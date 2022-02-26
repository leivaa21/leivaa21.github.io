import { NextPage } from "next";
import styles from '../../styles/Switchers.module.css';

import { useLangState } from "../../lib/LanguageHook";


const LangSwitch: NextPage = () => {
  const {language, setLanguage} = useLangState();

  const toggleLang = () => {
    if(language == 'English') {
      setLanguage('Spanish');
      return;
    }
    setLanguage('English');
  }

  return (
    <div>
      {(language === 'English') ?
        <input type="checkbox" id="langSwitch" className={styles.Switcher + ' ' + styles.LangSwitch  + ' ' + styles.checked} onChange={toggleLang} />
        :
        <input type="checkbox" id="langSwitch" className={styles.Switcher + ' ' + styles.LangSwitch} onChange={toggleLang} />
      }
      <label htmlFor="langSwitch" />
      
    </div>
  )
}

export default LangSwitch;