import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const hotQuestions = [
  {
    _id: "1",
    title: "How do I use express as a custom server in NextJS?",
  },
  {
    _id: "2",
    title: "Redux Toolkit Not Updating State as Expected",
  },
  {
    _id: "3",
    title: "Async/Await Function Not Handling Errors Properly",
  },
  {
    _id: "4",
    title:
      "How do ES6 module exports and imports work in JavaScript, and what are the key differences from CommonJS?",
  },
  {
    _id: "5",
    title: "How to Perfectly Center a Div with Tailwind CSS?",
  },
];

export const popularTags = [
  {
    _id: "1",
    name: "javascript",
    totalQuestions: 5,
  },
  {
    _id: "2",
    name: "react",
    totalQuestions: 4,
  },
  {
    _id: "3",
    name: "next",
    totalQuestions: 7,
  },
  {
    _id: "4",
    name: "vue",
    totalQuestions: 4,
  },
  {
    _id: "5",
    name: "redux",
    totalQuestions: 8,
  },
];

export const questions = [
  {
    _id: "1",
    title: "GitHub repository tips and tricks for beginners and senior developers",
    tags: [
      { _id: "1", name: "github" },
      { _id: "2", name: "git" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      picture: "/assets/icons/avatar.svg",
    },
    upvotes: 10,
    answers: [],
    views: 100,
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "How to center a div?",
    tags: [
      { _id: "1", name: "html" },
      { _id: "2", name: "css" },
      { _id: "3", name: "flexbox" },
    ],
    author: {
      _id: "2",
      name: "Jane Smith",
      picture: "/assets/icons/avatar.svg",
    },
    upvotes: 5,
    answers: [],
    views: 50,
    createdAt: new Date("2021-09-02T14:30:00.000Z"),
  },
];
