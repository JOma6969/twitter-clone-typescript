import { Context } from "./components/context";
import Home from "./pages/Home";
import type { Blog } from "./scipts";
import { blogs } from "./scipts";
import { useState } from "react";

const App = () => {
  const [wantsToComment, setWantsToComment] = useState<boolean>(false);
  const [blogsList, setBlogList] = useState<Blog[]>(blogs);
  const [blogToCommentOn, setBlogToCommentOn] = useState<Blog | undefined>(undefined)

  return (
    <div className="bg-[#17202A] text-white min-h-[100vh]">
      <Context.Provider
        value={{
          wantsToComment,
          setWantsToComment,
          blogsList,
          setBlogList,
          blogToCommentOn,
          setBlogToCommentOn
        }}
      >
        <Home />
      </Context.Provider>
    </div>
  );
};

export default App;
