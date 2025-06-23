import { IoLogoTwitter } from "react-icons/io5";
import { RiHome7Line } from "react-icons/ri";

const links: string[] = [
  "Home",
  "Explore",
  "Notification",
  "Message",
  "Bookmarks",
  "List",
  "Profile",  
  "More",
];

const SideBar = () => {
  return (
    <div className="pt-4 mdx:w-[30%] mdx:pl-10 tab:hidden">
      <div className="pl-[10px] mb-2">
        <IoLogoTwitter size={30} />
      </div>
      <div className="w-56">
        {links.map((link, i) => (
          <div
            key={i}
            className={`${
              i === 0 ? "active" : ""
            } pl-[10px] h-15 py-3 font-bold flex items-center flex-row-reverse justify-end gap-5`}
          >
            <p>{link}</p>
            {i === 0 ? (
              <RiHome7Line size={30} />
            ) : (
              <img src={`/imgs/${link}.png`} className="size-[30px]" alt="" />
            )}
          </div>
        ))}
      </div>
      <button className="bg-[#1DA1F2] rounded-[9999px] w-[198px] h-[43px] mt-2 font-semibold">
        Tweet
      </button>
    </div>
  );
};

export default SideBar;
