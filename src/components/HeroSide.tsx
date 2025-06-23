import { useState, useRef, useContext } from "react";
import { BlogCards } from "./Cards";
import type { Blog } from "../scipts";
import { Context } from "./context";
import { IoCloseOutline } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";

const HeroSide = () => {
  const [tweet, setTweet] = useState<string>("");
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [likedTweet, setLikedTweet] = useState<Blog[]>([]);
  const { blogsList, setBlogList } = useContext(Context)!;
  const [isOpen, setIsOpen] = useState(false);

  const likeTweet = (tweetId: string) => {
    const doesExist = likedTweet.some((tweet) => tweet.id === tweetId);

    if (doesExist) {
      setLikedTweet((prev) => prev.filter((tweet) => tweet.id !== tweetId));
    } else {
      const obj = blogsList.find((tweet) => tweet.id === tweetId); // <-- fix here
      if (obj) {
        setLikedTweet((prev) => [...prev, obj]);
      }
    }

    setBlogList((prev) =>
      prev.map((tweet) =>
        tweet.id === tweetId
          ? {
              ...tweet,
              number_of_likes: doesExist
                ? tweet.number_of_likes - 1
                : tweet.number_of_likes + 1,
            }
          : tweet
      )
    );
  };

  const handleTweetChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweet(event.target.value);
  };

  const handleImgClick = () => {
    fileRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setPreview(imgUrl);
      console.log(file);
    }
  };

  const addTweet = () => {
    const newBlog: Blog = {
      id: `${crypto.randomUUID()}`,
      img: "/imgs/avatar.png",
      name: "Olatunji",
      username: "abaddon",
      comments: [],
      tweet: tweet,
      tweet_img: preview,
      no_secs: 0,
      number_of_comments: 0,
      number_of_repost: 0,
      number_of_likes: 0,
      number_of_shares: 0,
    };
    setBlogList((prev) => [newBlog, ...prev]);
    setTweet("");
    setPreview(null);
  };

  return (
    <div className="border-l border-l-[#8899A6] h-[100vh] overflow-scroll w-[598px] border-r border-r-[#8899A6] mdx:w-[70%] scrollbar-hide tab:w-screen">
      <div className="py-4 flex justify-between items-center pl-4 pr-[14px]">
        <h1 className="font-bold text-[19px]">Home</h1>
        <div className="flex items-center gap-4 relative justify-end w-[150px]">
          {!isOpen ? (
            <HiBars3 onClick={() => setIsOpen(true)} size={25} />
          ) : (
            <IoCloseOutline onClick={() => setIsOpen(false)} size={25} />
          )}
          <img src="/imgs/tt-blue-star.png" className="size-[24px]" alt="" />
          {
            isOpen && 
          <div className="absolute top-[100%] w-[140px] z-50 p-2 px-4 backdrop-blur-[50px] bg-[#f5f5f5] bg-black rounded mt-3">
            <div className="hidden mdx:block tab:hidden">
              <p>News & More</p>
            </div>
            <div className="hidden mdx:hidden tab:block">
              <p className="mb-3">News & More</p>
              <p>Links</p>
            </div>
          </div>
          }
        </div>
      </div>
      <div className="border-t border-b border-[#8899A6] py-[10px] px-4 flex gap-3">
        <img src="/imgs/avatar.png" className="size-[49px]" alt="" />
        <div className="w-full">
          {preview !== null && (
            <img src={preview} className="size-[30px] rounded " />
          )}
          <textarea
            value={tweet}
            onChange={handleTweetChange}
            placeholder="What's happening?"
            className="bg-transparent w-[490px] mdx:w-full mt-3 outline-none resize-none h-10 font-semibold"
          />
          <div className="flex justify-between mt-5 w-full items-center">
            <div className="flex gap-4">
              <img
                src="/imgs/pic.png"
                onClick={handleImgClick}
                className="size-[24px] cursor-pointer"
                alt=""
              />
              <input
                type="file"
                accept="image/*"
                ref={fileRef}
                onChange={handleFileChange}
                className="hidden"
              />
              <img
                src="/imgs/poll.png"
                className="size-[24px] cursor-pointer"
                alt=""
              />
              <img
                src="/imgs/smiley-face.png"
                className="size-[24px] cursor-pointer"
                alt=""
              />
              <img
                src="/imgs/calender.png"
                className="size-[24px] cursor-pointer"
                alt=""
              />
            </div>
            <button
              className={`w-[77px] h-[39px] rounded-[9999px] font-semibold ${
                tweet === "" && preview === null
                  ? "bg-[#1DA1F2]/50 cursor-not-allowed"
                  : "cursor-pointer bg-[#1DA1F2]"
              } `}
              disabled={tweet === "" && preview === null}
              onClick={addTweet}
            >
              Tweet
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-[10px] bg-[#3A444C]"></div>
      <div>
        {blogsList.map((blog, i) => {
          return (
            <BlogCards
              blog={blog}
              likeTweet={likeTweet}
              isLiked={likedTweet.some((tweet) => tweet.id === blog.id)}
              key={i}
              index={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HeroSide;
