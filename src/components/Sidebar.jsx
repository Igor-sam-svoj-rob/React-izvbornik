import * as FaIcons from "react-icons/fa";
import * as AntIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const Sidebar = [
  {
    title: "Pocetna",
    path: "/",
    icon: <AntIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Izvještaji",
    path: "/izvestaji",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Proizvodi",
    path: "/proizvodi",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Tim",
    path: "/tim",
    icon: <IoIcons.IoIosPeople />,
    cName: "nav-text",
  },
  {
    title: "Poruke",
    path: "/poruke",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Podrška",
    path: "/podrska",
    icon: <IoIcons.IoIosHelpCircle />,
    cName: "nav-text",
  },
];
