import type { User, News, Blog } from "../scipts";
import { useContext } from "react";
import { Context } from "./context";
import CommentModal from "./CommentModal";

interface Props {
  user: User;
}

interface NewsProps {
  news_card: News;
}

interface Blogs {
  blog: Blog;
  likeTweet: (tweetId: string) => void;
  isLiked: boolean;
  index: number;
}

export const FollowCards: React.FC<Props> = ({ user }) => {
  return (
    <div className="flex px-4 h-[70px] items-center border-t border-[#8899A6]">
      <img className="size-[49px] mr-[10px]" src={user.userImg} alt="" />
      <div>
        <h3 className="font-bold">{user.userName}</h3>
        <p className="text-[#8899A6] font-medium text-[13px]">
          @{user.user_UserName}
        </p>
      </div>
      <button className="ml-auto h-[30px] border border-[#1DA1F2] text-[#1DA1F2] rounded-[9999px] font-bold w-20">
        Follow
      </button>
    </div>
  );
};

export const NewsCards: React.FC<NewsProps> = ({ news_card }) => {
  return (
    <div className="px-[15px] py-[10px] border-t border-[#8899a6]">
      <div className="">
        <div className="flex items-center gap-[4px] text-[#8899A6]">
          <p>{news_card.subTtl}</p>
          <p>.</p>
          <p>{news_card.time}</p>
        </div>
        <h3 className="my-[6px] font-semibold">{news_card.headline}</h3>
        <p className="text-[#8899A6]">
          Trending with <span className="text-[#1DA1F2]">#{news_card.tag}</span>
        </p>
      </div>
    </div>
  );
};

export const BlogCards: React.FC<Blogs> = ({
  blog,
  isLiked,
  likeTweet,
  index,
}) => {
  const {
    setWantsToComment,
    blogToCommentOn,
    setBlogToCommentOn,
    blogsList,
    wantsToComment,
    setBlogList,
  } = useContext(Context)!;

  const handleCommentIconClick = (index: number) => {
    console.log("Currently commenting on", blogsList[index].name);
    setBlogToCommentOn(blogsList[index]);
    setWantsToComment(true);
  };

  const handleRepost = (blogIndex: number) => {
    const no = blogsList[blogIndex].number_of_repost
    setBlogList(prev => prev.map((blogInst, i) => i === blogIndex ? {...blogInst, number_of_repost: no + 1} : blogInst))
    setBlogList(prev => [{...blogsList[index], img: "/imgs/avatar.png", name: "Olatunji", username: "abaddon"}, ...prev])
  };

  return (
    <div className="pt-[9px] flex border-t border-[#8899a6] text-[14px] gap-[10px] px-4 pr-[14px]">
      {wantsToComment && blogToCommentOn && (
        <CommentModal blogToComment={blogToCommentOn} />
      )}
      <img src={blog.img} className="size-[49px]" alt="" />
      <div className="w-[80%]">
        <div className="flex gap-[4px] sm:justify-between mdy:flex-col mdy:gap-0 mdy:mb-2">
          <h3 className="font-bold">{blog.name}</h3>
          <div className="flex items-center font-medium text-[#8899a6] gap-[4px]">
            <p className="">@{blog.username}</p>.<p>{blog.no_secs}s</p>
          </div>
        </div>
        <p className="">{blog.tweet}</p>
        {blog.tweet_img && (
          <img src={blog.tweet_img} className="mt-[10px] h-[247px] sm:h-[150px]" alt="" />
        )}
        <div className="text-[#8899a6] mt-[10px] grid grid-cols-4">
          <div
            onClick={() => handleCommentIconClick(index)}
            className="flex items-center gap-[10px] cursor-pointer"
          >
            <img src="/imgs/comment.png" className="size-[18px]" alt="" />
            <p>{blog.number_of_comments}</p>
          </div>
          <div
            className="flex items-center gap-[10px]"
            onClick={() => handleRepost(index)}
          >
            <img src="/imgs/retweet.png" className="size-[18px]" alt="" />
            <p>{blog.number_of_repost}</p>
          </div>
          <div
            onClick={() => likeTweet(blog.id)}
            className={`${
              isLiked ? "text-[#F4245E]" : ""
            } flex items-center gap-[10px] cursor-pointer`}
          >
            <img
              src={isLiked ? "/imgs/liked.png" : "/imgs/like.png"}
              className="size-[18px]"
              alt=""
            />
            {blog.number_of_likes > 999 ? (
              <p className={`${isLiked ? "text-[#F4245E]" : ""}`}>
                {blog.number_of_likes > 999
                  ? (blog.number_of_likes / 1000).toFixed(1) + "k"
                  : blog.number_of_likes}
              </p>
            ) : (
              <p className={`${isLiked ? "text-[#F4245E]" : ""}`}>
                {blog.number_of_likes}
              </p>
            )}
          </div>
          <div className="flex items-center gap-[10px]">
            <img src="/imgs/share.png" className="size-[18px]" alt="" />
            {blog.number_of_shares > 999 ? (
              <p>{blog.number_of_shares / 1000}k</p>
            ) : (
              <p>{blog.number_of_shares}</p>
            )}
          </div>
        </div>
        <p className="text-[#1DA1F2] py-[10px]">Show this thread</p>
      </div>
    </div>
  );
};
