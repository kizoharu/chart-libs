import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <a href='https://github.com/kizoharu/'>
          © {new Date().getFullYear()} Copyright Text
        </a>
      </div>
    </footer>
  )
}

export default Footer