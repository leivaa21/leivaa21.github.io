import { useThemeState } from "../lib/ThemeHook";
import styles from '../styles/Career.module.css';
/* eslint-disable @next/next/no-img-element */

interface CareerSection {
  title: string,
  timelapse: string,
  content: string[]
}

const CareerSection = ( content: { sections: CareerSection[]; }  ) => {
  const {theme, setTheme} = useThemeState();

  return(
    <div className={theme === 'Dark' ? 'darkTheme' : 'whiteTheme'}>
      {content.sections.map((section, SectionIndex) => {
        return (
          <section className='section' key={`section${SectionIndex}`}>
            <div className={styles.stage}>
              <h1>{section.title}</h1>
              <h2>{section.timelapse}</h2>
              {section.content.map((paragraph, index) =>
                <p key={`section${SectionIndex}||p${index}`}>{paragraph}<br /><br /></p>)}
              <div className={styles.pacman} />
            </div>
          </section>
        )})
      }
    </div>
  )
}

export default CareerSection;