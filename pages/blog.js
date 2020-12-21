import Link from "next/link";

const Blog = () => {
  return (
    <div className="container">
      <main className="main">
        <h1>Blog</h1>
        <Link href="/">
          <p>Home Link</p>
        </Link>
        <small>
          `Link` pre-renders the destination page for faster loading.
        </small>
      </main>
    </div>
  );
};

export default Blog;
