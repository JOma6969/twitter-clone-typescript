import { createContext } from "react";
import type { Blog } from "../scipts";

interface ContextType {
  blogToCommentOn: Blog | undefined;
  setBlogToCommentOn: React.Dispatch<React.SetStateAction<Blog | undefined>>;
  wantsToComment: boolean;
  setWantsToComment: React.Dispatch<React.SetStateAction<boolean>>;
  blogsList: Blog[];
  setBlogList: React.Dispatch<React.SetStateAction<Blog[]>>;
}

export const Context = createContext<ContextType | undefined>(undefined)

