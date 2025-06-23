import React, { useContext, useState, useRef, useEffect } from "react";
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
  <div className="absolute top-0 w-[100vw] min-h-screen overflow-y-auto bg-black/50">
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        bg-[#17202A] min-h-[400px] max-h-[90vh] overflow-y-auto shadow py-10 px-3 rounded-[20px] 
        flex flex-col sm:w-[90vw] md:w-[500px]">
      <h1 className="text-center text-3xl font-semibold mb-4 text-white">COMMENT</h1>
      
      <div className="flex items-center">
        <input
          type="text"
          value={commentPost}
          onChange={handleInpChange}
          placeholder="Enter comment..."
          className="font-medium p-2 outline-none w-[80%] bg-transparent border-white text-white"
          ref={inpRef}
        />
        <button
          onClick={handleCommentPost}
          className="bg-blue-500 h-full text-white border-2 border-blue-500 rounded-l px-2"
        >
          Comment
        </button>
      </div>

      <button
        onClick={() => setWantsToComment(false)}
        className="mt-6 text-red-400 underline mx-auto"
      >
        Cancel Action
      </button>

      <div className="mt-6 space-y-4">
        {updateBlog?.comments.length === 0 ? (
          <p className="text-center mt-10 text-white">Comment box is currently empty</p>
        ) : (
          updateBlog?.comments.map((comment, i) => (
            <div key={i}>
              <p className="text-[12px] text-gray-300">@{updateBlog.username}</p>
              <p className="text-[16px] text-white">{comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  </div>
);
};

export default CommentModal;
