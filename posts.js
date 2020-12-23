const posts = [
  {
    title: "Next Routers",
    content:
      "For Next Routers, the <push> and <prefetch> can be used.| Prefetch is used for faster loading for the next stop on your local website.| Push is used to redirect the page to the given value.",
  },
  {
    title: "Prefetch Usage",
    content: `import { useRouter } from 'next/router'||
    export default () => {|
    const router = useRouter()||

    useEffect(() => {|
      router.prefetch('/login')|
    })|
  }`,
  },
  {
    title: "Get Intial Props",
    content:
      "Get initial props is simple and straightforward, just like using useEffect in normal React for async data fetching.",
  },
];

export default posts;
