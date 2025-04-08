import { Day, Night, Circle } from "@/components";

const Home = () => {
  return (
    <div className="h-[100vh]  flex relative ">
      <Day />
      <Night />
      <Circle />
    </div>
  );
};

export default Home;
