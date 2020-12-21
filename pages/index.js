import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next JS Fundamentals</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Index Page</h1>
      </main>

      <footer className={styles.footer}>
        <div>
          <a
            href="https://www.mark-atienza.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by {"."}
            <b> mark.the.dev</b>
          </a>
        </div>
        <div>
          <small>
            <i>
              <blockquote>Referenced article from freecodecamp.org.</blockquote>
            </i>
          </small>
        </div>
      </footer>
    </div>
  );
}
