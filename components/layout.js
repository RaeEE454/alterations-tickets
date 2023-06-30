import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Alterations Database';
export const siteTitle = 'Alterations Database';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
      </Head>
      <header className={styles.header}>
        {home ? (
          
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            
        ) : (
          <>
            
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      
    </div>
  );
}