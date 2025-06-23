import HeroSide from "../components/HeroSide";
import RightSideBar from "../components/RightSideBar";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div className="flex w-[95vw] mdx:w-[100vw] mx-auto gap-7">
      <div className="flex mdx:w-full">
        <SideBar />
        <HeroSide />
      </div>
      <div className="mdx:hidden">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;
