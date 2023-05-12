import Link from "next/link"
import styles from './Navigation.module.css'

const links = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'About me',
    route: '/about-me'
  },
  {
    label: 'Proyects',
    route: '/proyects'
  },
  {
    label: 'Skills',
    route: '/skills'
  },
  {
    label: 'Education',
    route: '/education'
  },
  {
    label: 'Contact',
    route: '/contact'
  }
]

export default function Navigation() {
  return (
      <nav className={`container-fluid col-3 text-center`}>
        <ul className={styles.navigation}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
  )
}