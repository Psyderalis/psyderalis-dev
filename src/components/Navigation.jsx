import { Link } from 'react-router-dom'

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
    label: 'Projects',
    route: '/projects'
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
      <nav>
        <ul>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link to={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
  )
}