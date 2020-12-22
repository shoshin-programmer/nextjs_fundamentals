import Link from "next/link";
import posts from "../posts";

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
        <p>Links</p>
        {posts ? (
          posts.map((post, idx) => (
            <Link key={idx} href={`blog/${idx}`}>
              <small>{post.title}</small>
            </Link>
          ))
        ) : (
          <>Nothing</>
        )}
      </main>
    </div>
  );
};

export default Blog;
