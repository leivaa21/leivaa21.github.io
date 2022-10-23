/* eslint-disable @next/next/no-img-element */
import { BsGithub, BsLinkedin, BsMailbox2, BsTwitch, BsTwitter } from 'react-icons/bs';
import styles from './header.module.css';

const Header = () => {
  
  const rrss = [
    {
      name: 'Twitter',
      icon: <BsTwitter/>,
      href: 'https://twitter.com/leivaa21_'
    },
    {
      name: 'Linkedin',
      icon: <BsLinkedin/>,
      href: 'https://twitter.com/leivaa21_'
    },
    {
      name: 'Github',
      icon: <BsGithub/>,
      href: 'https://twitter.com/leivaa21_'
    },
    {
      name: 'Twitch',
      icon: <BsTwitch/>,
      href: 'https://twitter.com/leivaa21_'
    },
    {
      name: 'Mail',
      icon: <BsMailbox2/>,
      href: 'https://twitter.com/leivaa21_'
    },
  ]

  return (
  <section className={styles.base}>
    <div className="col-3">
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
          <img src="/icons/favicon.png" alt="personal-image"/>          
        </div>
      </div>
    </div>
    <div className="col-3">
      <div className={styles.title}>
        <h1>
          Backend Engineer 🚀
        </h1>
        <h3>
          Backend Developer Trainee at Genially
        </h3>
      </div>
    </div>
    <div className="col-3">

    </div>
  </section>
  )
}

export default Header;
