import React from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';
const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/login" className={styles.navLink}>Login</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/home" className={styles.navLink}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/profile" className={styles.navLink}>Profile</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/movie" className={styles.navLink}>Movie</Link>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;