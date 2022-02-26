import { useThemeState } from "../lib/ThemeHook";
import styles from '../styles/Career.module.css';
/* eslint-disable @next/next/no-img-element */
const CareerSection = ( /**content: { sections: section[]; }*/  ) => {
  const {theme, setTheme} = useThemeState();

  return(
    <div className={theme === 'Dark' ? 'darkTheme' : 'whiteTheme'}>
      <section className='section'>
        <div className={styles.stage}>
          <h1>Computer Engineering / Software Specialization</h1>
          <h2>2019 - current</h2>
          <p>In 2019 I started the engineering degree and I{"'"}m on third year right now.<br/><br/></p>
          <p>In the degree I have learn about data structures, operating system, object oriented programming among other things.<br/><br/></p>
          <p>The programming languages that I learned in this degree (at least from now) are <b>C</b>, <b>C++</b>, <b>MySQL</b> and <b>Java</b>.<br/><br/></p>
          <div className={styles.pacman}/>
        </div>
      </section>
      <section className='section'>
        <div className={styles.stage}>
          <h1>Aula de Software Libre</h1>
          <h2>2021 - current</h2>
          <p>I have been asisting to workshops from the {"'"}Aula de Software Libre{"'"} since I was in first year of the degree but I didnt joined since 2021 due to all the things that has happened this lasts years...<br/><br/></p>
          <p>The first project I did for the ASL was a node workshop for beginners so the people from the grade would get to know NodeJS and all the javascript/typescript world. (This is better explained on the projects section).<br/><br/></p>
          <p>Since that, I have been participiting in some projects like building the web for SalmorejoTech2022 (wich is still under development).</p>
          <div className={styles.pacman}/>
        </div>
      </section>
      
    </div>
  )
}

export default CareerSection;