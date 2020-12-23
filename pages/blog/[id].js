import { useRouter } from "next/router";
import Link from "next/link";
import posts from "../../posts";

const BlogPost = () => {
  const router = useRouter();

  const post = posts[router.query.id];

  return (
    <div className="container">
      <main className="main">
        {post ? (
          <>
            <h2>{post.title}</h2>
            <small>
              {post.content.split("|").map((str) => (
                <>
                  {str}
                  <br />
                </>
              ))}
            </small>
          </>
        ) : (
          <>
            <h2>Preloading or missing data.</h2>
            <small>
              This will show while the data is being fetched or when there is no
              data.
            </small>
          </>
        )}
      </main>
      <Link href="/blog">Blog - Home</Link>
    </div>
  );
};

export default BlogPost;
