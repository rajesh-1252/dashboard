import { IoBarChartSharp } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaHome, FaInbox, FaProductHunt } from "react-icons/fa";

const links = [
  {
    id: 1,
    text: "Home",
    icon: <FaHome />,
    path: "/",
  },
  {
    id: 2,
    text: "Dashboard",
    icon: <IoBarChartSharp />,
    path: "/",
  },
  {
    id: 3,
    text: "Inbox",
    icon: <FaInbox />,
    path: "/",
  },
  {
    id: 4,
    text: "Products",
    icon: <FaProductHunt />,
    path: "/",
  },
  {
    id: 5,
    text: "Admin",
    icon: <MdAdminPanelSettings />,
    path: "/",
  },
];
export default links;
