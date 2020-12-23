import { useRouter } from "next/router";
import Link from "next/link";
import posts from "../../posts";

const BlogPost = ({ post }) => {
  const router = useRouter();

  return (
    <div className="container">
      <main className="main" style={{ textAlign: "left" }}>
        <>
          <h2>{post.title}</h2>
          <small>
            {post.content.split("|").map((str, idx) => (
              <div key={idx}>
                {str}
                <br />
              </div>
            ))}
          </small>
        </>
      </main>
      <Link href="/blog">Blog - Home</Link>
    </div>
  );
};

BlogPost.getInitialProps = async ({ query }) => {
  return {
    post: posts[query.id],
  };
};

export default BlogPost;
