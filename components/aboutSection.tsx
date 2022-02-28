/* eslint-disable @next/next/no-img-element */
import { useThemeState } from "../lib/ThemeHook";
import styles from '../styles/About.module.css'
const AboutSection = () => {
  const {theme, setTheme} = useThemeState();

  return (
    <div className={theme === 'Dark' ? 'darkTheme' : 'whiteTheme'}>
      <section className="section">
        <h1>About me</h1>
        <h2>Typescript lover</h2>
        <p>As I mention on the career section, in college we havent done anything with Javascript nor Typescript,
          but for some reason I always says that's the lang were Im most conformtable</p>
        <p>This is because since 2019 I decided that I needed to start learning in a more autodidact way, and I started
          by looking langs and trying some of them until I discover NodeJS, then I started learning a lot of javascript,
          and in 2020/2021 did a DDD + Hexagonal Architecture course in my university (s.o. to @sgomez, a really good teacher
          and even a better person!) In that course we focused on typescript and I really loved how it works.
        </p>
        <p>So since that I specialized myself on Typescript (Even though im now learning other things like python and have
          in mind to learn PHP.</p>
      </section>

      <section className="section">
        <div className={styles.ranking}>
          <h1>Coding Skills</h1>
          <h2>Lang's Ranking</h2>
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
          <h1>Known Frameworks/Libraries</h1>
          <h2>Backend</h2>
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
          <h1>Skills</h1>
          <h2>Software Engineer Skills</h2>
      </section>
    </div>
  )
}

export default AboutSection;