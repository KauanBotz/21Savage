import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.content}>
          <h3 className={styles.h1}>
            <img src="/savage.png" className={styles.image} />
          </h3>
          <nav className={styles.navContainer}>
            <ul className={styles.nav}>
              <li>
                <Link to="/">SOBRE</Link>
              </li>
              <li>
                <Link to="/albums">ALBUNS</Link>
              </li>
              <li>
                <Link to="/singles">SINGLES</Link>
              </li>
              <li>
                <Link to="/feats">FEATS</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
