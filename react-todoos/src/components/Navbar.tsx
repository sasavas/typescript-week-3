import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className={styles.navbarContainer}>
      <h1 className={styles.title}>Todoos</h1>
      <nav className={styles.navbar}>
        <Link className={styles.link} to="/">Home</Link>
        <Link className={styles.link} to="/todos">Todos</Link>
      </nav>
    </header>
  );
};

export default Navbar;
