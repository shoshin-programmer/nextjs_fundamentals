import { useRouter } from "next/router";
import Link from "next/link";
import posts from "../../posts";
import BlogLayout from "../../components/layouts/bloglayout";

const BlogPost = ({ post }) => {
  const router = useRouter();

  return (
    <BlogLayout
      content={
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
      }
    />
  );
};

BlogPost.getInitialProps = async ({ query }) => {
  return {
    post: posts[query.id],
  };
};

export default BlogPost;
