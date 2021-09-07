import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from './components/navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.box}>
        <div className={styles.header}>
          Create your professional CV online with FreeCVGenerator
        </div>
        <div className={styles.subheader}>
          Create your very own professional CV and download it within 15
          minutes.
        </div>
        <Link href="/cvform">
          <div className={styles.button}>Create CV</div>
        </Link>
      </div>
    </>
  );
}
