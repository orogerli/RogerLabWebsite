import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Publications",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Presentations",
        path: "/presentations",
        newTab: false,
      },
      {
        id: 22,
        title: "Publications",
        path: "/publications",
        newTab: false,
      }

    ]
  },
  {
    id: 5,
    title: "Team",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Member",
        path: "/member",
        newTab: false,
      },
      {
        id: 52,
        title: "Award",
        path: "/award",
        newTab: false,
      }

    ]
  },
  {
    id: 3,
    title: "Research Partcipants",
    path: "/signup",
    newTab: false,
  },
  {
    id: 4,
    title: "Opportunities",
    path: "/opportunity",
    newTab: false,
    
  },
];
export default menuData;
