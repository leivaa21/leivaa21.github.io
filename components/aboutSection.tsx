/* eslint-disable @next/next/no-img-element */
import { useThemeState } from "../lib/ThemeHook";
import styles from '../styles/About.module.css'

interface AboutSection {
  title: string,
  subtitle: string,
  paragraphs: string[]
  CodeSkillsTitle: string,
  CodeSkillsSubtitle: string,
  FrameworksTitle: string,
  FrameworksSubtitle: string,
  SkillsTitle: string,
  SkillsSubtitle: string,

}

const AboutSection = (
  content: { section: AboutSection; }  
) => {
  const {theme, setTheme} = useThemeState();
  const { section } = content;
  return (
    <div className={theme === 'Dark' ? 'darkTheme' : 'whiteTheme'}>
      <section className="section">
        <h1>{section.title}</h1>
        <h2>{section.subtitle}</h2>
        {section.paragraphs.map((parr, index) => <p key={`parr${index}`}>{parr}<br/><br/></p>)}
      </section>

      <section className="section">
        <div className={styles.ranking}>
          <h1>{section.CodeSkillsTitle}</h1>
          <h2>{section.CodeSkillsSubtitle}</h2>
          <ul>
            <li className={styles.eighty}>
              TypeScript
            </li>
            <li className={styles.seventy}>
              JavaScript
            </li>
            <li className={styles.seventy}>
              C++
            </li>
            <li className={styles.sixty}>
              Java
            </li>
            <li className={styles.sixty}>
              C
            </li>
            <li className={styles.fifty}>
              Python
            </li>
          </ul>
        </div>
      </section>
      <section className="section centered">
        <h1>{section.FrameworksTitle}</h1>
        <h2>{section.FrameworksSubtitle}</h2>
        <div className={styles.grid}>
          <a className={styles.FrLogo}>
            <img src='images/frameworks/nestjs.png' alt="NestJS" />
          </a>
          <a className={styles.FrLogo}>
            <img src='images/frameworks/express.png' alt="NestJS" />
          </a>
          <a className={styles.FrLogo}>
            <img src='images/frameworks/nextjs.png' alt="NestJS" />
          </a>
          <a className={styles.FrLogo}>
            <img src='images/frameworks/react.png' alt="NestJS" />
          </a>
          <a className={styles.FrLogo}>
            <img src='images/frameworks/vue.png' alt="NestJS" />
          </a>
          <a className={styles.FrLogo}>
            <img src='images/frameworks/mongoose.png' alt="NestJS" />
          </a>
          <a className={styles.FrLogo}>
            <img src='images/frameworks/discordjs.svg' alt="NestJS" />
          </a>
          <a className={styles.FrLogo}>
            <img src='images/frameworks/jest.png' alt="NestJS" />
          </a>
        </div>
      </section>
      <section className="section centered">
        <h1>{section.SkillsTitle}</h1>
        <h2>{section.SkillsSubtitle}</h2>
        <div className={styles.roundGraphGrid}>
          <div className={styles.roundGraph + ' ' + styles.roundGraph80}>Architecture</div>
          <div className={styles.roundGraph + ' ' + styles.roundGraph90}>Clean Code</div>
          <div className={styles.roundGraph + ' ' + styles.roundGraph70}>Backend</div>
          <div className={styles.roundGraph + ' ' + styles.roundGraph50}>Frontend</div>
          <div className={styles.roundGraph + ' ' + styles.roundGraph70}>QA</div>
        </div>
      </section>
    </div>
  )
}

export default AboutSection;