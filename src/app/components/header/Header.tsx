import Link from 'next/link'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link href="/">Tsundcle</Link>
      </h1>
      <nav>
        <ul className={styles.navItems}>
          <li>
            <Link className={styles.navLink} href="/">
              本棚
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="/">
              本を登録
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
