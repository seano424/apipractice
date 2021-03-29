import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from 'next/link'

export default function Home(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>More API</h1>

        <div>
          <Link href="/subscribe"><a>Subscribe</a></Link>
          <p>Users Go Under Here</p>
        </div>
      </main>
    </div>
  );
}