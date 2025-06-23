export interface Blog {
  id: string;
  img: string;
  name: string;
  tweet: string;
  tweet_img: string | null;
  username: string;
  comments: string[],
  no_secs: number;
  number_of_comments: number;
  number_of_repost: number;
  number_of_likes: number;
  number_of_shares: number;
}

export interface User {
  userImg: string;
  userName: string;
  user_UserName: string;
}

export interface News {
  subTtl: string;
  time: string;
  headline: string;
  tag: string;
}

export const blogs: Blog[] = [
  {
    id: `${crypto.randomUUID()}`,
    img: "/imgs/user-03.png",
    name: "Devon Lane",
    tweet: "is this big enough for you?",
    tweet_img: "/imgs/blog-img-01.png",
    username: "marcelosalomao",
    comments: [],
    no_secs: 23,
    number_of_comments: 0,
    number_of_repost: 0,
    number_of_likes: 0,
    number_of_shares: 0,
  },
  {
    id: `${crypto.randomUUID()}`,
    img: "/imgs/user-01.png",
    name: "Darlene Robertson",
    tweet: "Tom is in a big hurry.",
    tweet_img: "/imgs/blog-img-02.png",
    username: "johndue",
    comments: [],
    no_secs: 23,
    number_of_comments: 0,
    number_of_repost: 0,
    number_of_likes: 0,
    number_of_shares: 0,
  },
  {
    id: `${crypto.randomUUID()}`,
    img: "/imgs/avatar.png",
    name: "Devon Lane",
    tweet: "is this big enough for you?",
    tweet_img: "/imgs/blog-img-01.png",
    username: "marcelosalomao",
    comments: [],
    no_secs: 23,
    number_of_comments: 0,
    number_of_repost: 0,
    number_of_likes: 0,
    number_of_shares: 0,
  },
  {
    id: `${crypto.randomUUID()}`,
    img: "/imgs/user-01.png",
    name: "Darlene Robertson",
    tweet: "Tom is in a big hurry.",
    tweet_img: "/imgs/blog-img-02.png",
    username: "johndue",
    comments: [],
    no_secs: 23,
    number_of_comments: 0,
    number_of_repost: 0,
    number_of_likes: 0,
    number_of_shares: 0,
  },
];

export const users: User[] = [
  {
    userImg: "/imgs/user-03.png",
    userName: "Bessie Cooper",
    user_UserName: "alessandroveronezi",
  },
  {
    userImg: "/imgs/user-01.png",
    userName: "Jenny Wilson",
    user_UserName: "gabrielcantarin",
  },
  {
    userImg: "/imgs/avatar.png",
    userName: "Mr Hacker Josh",
    user_UserName: "hackerjosh213",
  },
];

export const news: News[] = [
  {
    subTtl: "COVID 19",
    time: "Last night",
    headline:
      "England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic",
    tag: "covid19",
  },
  {
    subTtl: "US news",
    time: "4h ago",
    headline:
      "Parler may go offline following suspensions by Amazon, Apple and Google",
    tag: "trump",
  },
  {
    subTtl: "India",
    time: "1h ago",
    headline:
      "India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test",
    tag: "sport",
  },
];
