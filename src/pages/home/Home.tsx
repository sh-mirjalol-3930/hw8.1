import Dashboard from "../../components/dashboard/Dashboard";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";

const Home = () => {
  return (
    <div className="w-[90%] m-auto">
      <Header />
      <Hero />
      <Dashboard />
    </div>
  );
};

export default Home;
