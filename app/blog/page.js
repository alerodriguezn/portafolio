import axios from "axios";
import ListPosts from "@/components/ListPosts";

async function getData() {
  const { data } = await axios('http://localhost:3000/api/blog', { cache: 'no-store' });
  return data;
}

const BlogPage = async () => {
  const posts = await getData();
  return (
    <main className="mt-14">
      <h2 className="text-white font-bold text-2xl border-b border-zinc-600 pb-2">Blog</h2>
      <ListPosts posts={posts} />
    </main>
  )
}

export default BlogPage