import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from './navbar.module.css';

const Navbar = () => {

  const router = useRouter();
  const contents = [
    {
      title: "Home",
      icon: "🏠",
      href: "/",
    },
    {
      title: "Career",
      icon: "📜",
      href: "/career",
    },
    {
      title: "Blog",
      icon: "📝",
      href: "/blog",
    }
  ]

  return (
  <section id="navbar" className={styles.base}>
    <ul>
    {contents.map(content => (
      <li key={`nav-${content.title}`} className={router.route == content.href ? styles.active: ""}>
        <Link href={content.href}>
          <span><p>{content.icon}{content.title}</p></span>
        </Link>
      </li>
    ))}
    </ul>
  </section>
  )
}

export default Navbar;
