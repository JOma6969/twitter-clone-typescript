import { IoIosSearch } from "react-icons/io";
import { users, news } from "../scipts";
import { FollowCards, NewsCards } from "./Cards";

const RightSideBar = () => {
  return (
    <div className="h-[100vh] text-[14.8px] overflow-y-scroll scrollbar-hide mdx:hidden">
      <div className="bg-[#283340] flex items-center h-[39px] px-4 gap-4 rounded-[9999px] w-full mt-3 mb-4">
        <IoIosSearch color="#8899A6" size={19} />
        <input
          type="text"
          placeholder="Search Twitter Clone..."
          className="bg-transparent outline-none pr-2 w-[100%]"
        />
      </div>
      <div className="rounded-[16px] bg-[#283340]">
        <h1 className="ml-4 font-bold text-[20px] py-3">You might like</h1>
        {users.map((user, i) => {
          return <FollowCards user={user} key={i} />;
        })}
      </div>
      <div className="rounded-[16px] mt-4 bg-[#283340]">
        <h1 className="ml-4 font-bold text-[20px] py-3">What's happening</h1>
        {news.map((news_card, i) => {
          return <NewsCards news_card={news_card} key={i} />;
        })}
      </div>

    </div>
  );
};

export default RightSideBar;
