import styles from './Header.module.css'


export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        LOGO
      </div>
      <div>
        <h1>Melanie Tolvett S.</h1>
        <h2>Web Developer</h2>
      </div>
      <div>
        <p>LinkedIn</p>
        <p>GitHub</p>
      </div>
    </header>

  )
}