// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import comments from "./comments.json";

export default (req, res) => {
  switch (req.method) {
    case "GET":
      res.statusCode = 200;
      res.json({ comments });
    case "POST":
      break;
    default:
      res.statusCode = 405;
      res.end()
      break
  }
};
