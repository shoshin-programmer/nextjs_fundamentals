import Link from "next/link";

export default (props) => (
  <div className="container">
    <main className="main" style={{ textAlign: "left" }}>
      {props.content}
    </main>
    <Link href="/blog">Blog - Home</Link>
  </div>
);
