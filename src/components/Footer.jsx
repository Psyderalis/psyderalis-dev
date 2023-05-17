import styles from './Footer.module.css'

export default function Footer () {
    return (
        <footer className={`${styles.footer} container-fluid text-center`}>
            <p>Esta página fue construída con</p>           
        </footer>
    )
}