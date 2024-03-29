/* eslint-disable @next/next/no-img-element */
import { BsGithub, BsLinkedin, BsMailbox2, BsTwitter } from 'react-icons/bs';
import styles from './hero.module.css';

const Hero = () => {
  
  const rrss = [
    {
      name: 'Twitter',
      icon: <BsTwitter/>,
      href: 'https://twitter.com/leivaa21_'
    },
    {
      name: 'Linkedin',
      icon: <BsLinkedin/>,
      href: 'https://www.linkedin.com/in/adri%C3%A1n-leiva-rojano-02763b216/'
    },
    {
      name: 'Github',
      icon: <BsGithub/>,
      href: 'https://github.com/leivaa21'
    },
    {
      name: 'Mail',
      icon: <BsMailbox2/>,
      href: 'mailto:adrianleiva212@gmail.com'
    },
  ]

  return (
    <section className={styles.base}>
      <div className={styles.hero}>
        <div className={styles.col_wrapper}>
          <div className={styles.col}>
            <div className={styles.content}>
              <h1 className={styles.title}>
                <span>Hello world!</span> Welcome to my web.
              </h1>
              <h1>
                Backend Engineer 🚀
              </h1>
              <h3>
                Backend Developer Trainee at Genially
              </h3>
            </div>
          </div>
          <div className={styles.col}>  
            <div className={styles.me}>
              <div className={styles.info}>
                <h1>Adrián Leiva Rojano</h1>
                <h2>Córdoba, Spain</h2>
                <div className={styles.rrss}>
                  <ul>
                  {rrss.map(rs =>
                    <li key={`rs-${rs.name}`}>
                      <a href={rs.href} rel="noopener noreferrer" target='_blank'>{rs.icon}</a>
                    </li>
                  )}
                  </ul>    
                </div>
              </div>
              <div className={styles.img_wrapper}>
                <img src="/images/icons/favicon.png" alt="personal-image"/>          
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
