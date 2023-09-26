import { allBlogs } from "@/.contentlayer/generated";
import FeaturePosts from "@/components/Home/FeaturePosts";
import HomeCover from "@/components/Home/HomeCover";
import RecentPosts from "@/components/Home/RecentPosts";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center ">
      <HomeCover blogs={allBlogs} />
      <FeaturePosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  );
}
