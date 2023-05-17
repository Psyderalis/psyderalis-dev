import styles from './Header.module.css'


export default function Header() {
  return (
    <header className= {`${styles.header} container-fluid row`} >
      <div className={`col-2 text-center`}>
        LOGO
      </div>
      <div className={`col-8 text-center`}>
        <h2>Melanie Tolvett S.</h2>
        <h4>Web Developer</h4>
      </div>
      <div className={`col-2`}>
        <p>LinkedIn</p>
        <p>GitHub</p>
      </div>
    </header>

  )
}