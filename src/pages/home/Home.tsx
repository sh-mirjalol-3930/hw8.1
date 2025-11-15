import BlogPosts from "../../components/bPosts/BlogPosts";
import Dashboard from "../../components/dashboard/Dashboard";
import Hero from "../../components/hero/Hero";

const Home = () => {
  return (
    <div className="w-[90%] m-auto">
      <Hero />
      <Dashboard />
      <BlogPosts/>
    </div>
  );
};

export default Home;
