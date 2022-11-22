import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Hub",
    path: "/hub",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Makers",
    path: "/makers",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Takers",
    path: "/takers",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Risk-Accounts",
    path: "/riskAccounts",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "RiskUsers",
    path: "/riskUsers",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "GiveupRule",
    path: "/giveupRule",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
