import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next JS Fundamentals</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1>Index Page</h1>
        <small>
          Without the getInitialProps() the page is automatically created into a
          static HTML.
        </small>
      </main>

      <footer className="footer">
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
