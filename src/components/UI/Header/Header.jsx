import { Link } from 'react-router-dom'
import { publicRoutes } from '../../../router'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <nav>

          {/* <Link  to='/'> <i className="large material-icons">insert_chart</i></Link> */}
          <Link className={[styles.icon, "material-icons"].join(' ')}  to='/chart-libs'> insert_chart</Link>
          
          <ul >
            {publicRoutes.map(link => {
              if(link.name !== 'DashBoard') {
                return (
                  <li key={link.path}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                )
              }
            })}
          </ul>
      </nav>
    </header>
  )
}

export default Header