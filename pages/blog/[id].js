import { useRouter } from "next/router";
import posts from "../../posts.json";

const BlogPost = () => {
  const router = useRouter();

  const post = posts[router.query.id];

  return (
    <div className="container">
      <main className="main">
        {post ? (
          <>
            <h2>{post.title}</h2>
            <small>{post.content}</small>
          </>
        ) : (
          <>
            <h2>Preloading</h2>
            <small>This will show while the data is being fetched.</small>
          </>
        )}
      </main>
    </div>
  );
};

export default BlogPost;
