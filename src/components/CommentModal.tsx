import React, {
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import type { Blog } from "../scipts";
import { Context } from "./context";

interface ModalProps {
  blogToComment: Blog;
}

const CommentModal: React.FC<ModalProps> = ({ blogToComment }) => {
  const [commentPost, setCommentPost] = useState<string>("");
  const { setBlogList, setWantsToComment, blogsList } = useContext(Context)!;
  const updateBlog = blogsList?.find((item) => item.id === blogToComment.id);
  const inpRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {});

  const handleCommentPost = () => {
    if (!commentPost.trim()) return;

    setBlogList((prev) =>
      prev.map((prevBlogInst) => {
        if (prevBlogInst.id !== blogToComment.id) return prevBlogInst;

        // Return a NEW object with a NEW comments array
        const no =
          blogsList[blogsList.findIndex((blog) => blog.id == blogToComment.id)]
            .number_of_comments;
        return {
          ...prevBlogInst,
          comments: [...prevBlogInst.comments, commentPost],
          number_of_comments: no + 1,
        };
      })
    );

    setCommentPost("");
  };

  const handleInpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentPost(e.target.value);
  };

  return (
    <div className="absolute top-0 w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="bg-[#17202A] min-h-[400px] shadow shadow-[#f5f5f5] p-10 rounded-[20px] flex flex-col">
        <h1 className="text-center text-3xl font-semibold mb-4">COMMENT</h1>
        <div className="border-2 rounded">
          <input
            type="text"
            value={commentPost}
            onChange={handleInpChange}
            placeholder="Enter comment..."
            className="font-medium p-2 outline-none rounded  bg-transparent border-white"
            ref={inpRef}
          />
          <button
            onClick={handleCommentPost}
            className="bg-blue-500 h-full border-2 border-blue-500 rounded-l px-2"
          >
            Comment
          </button>
        </div>
        <button
          onClick={() => setWantsToComment(false)}
          className="absolute bottom-0 mb-10 z-20 block mx-auto"
        >
          Cancel Action
        </button>
        {updateBlog?.comments.length === 0 ? (
          <p className="text-center mt-10">Comment box is currently empty</p>
        ) : (
          updateBlog?.comments.map((comment, i) => (
            <div key={i} className="mt-2">
              <p className="text-[12px] text-gray-300">@{updateBlog.username}</p>
              <p className="text-[16px]">{comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentModal;
