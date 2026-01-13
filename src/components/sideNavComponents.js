import { GoFileDirectory, GoHome } from "react-icons/go";
import { RiCalendarScheduleLine, RiHomeSmile2Line } from "react-icons/ri";
import { FaAngleDown, FaRegUser } from "react-icons/fa";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { MdOutlineSecurity } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { CgUserlane } from "react-icons/cg";
import { BiHome } from "react-icons/bi";
import { TbHours12 } from "react-icons/tb";
import { Link, useLocation, useParams } from "react-router-dom";
import ReportTempId from "./params";
import {
  ClientHours_Icon,
  Clientlist_Icon,
  Home_Icon,
  Invoicing_Icon,
  Reporting_Icon,
  SchedulingandGuardManagement_Icon,
  SecurityWatch_Icon,
  Signout_Icon,
  userList_Icon,
} from "../assets";


// const { reportTempId } = () => useParams();
// const effect

export const navItems = [
  {
    icon: null,
    imgUrl: Home_Icon,
    title: "Home",
    path: "/home",
  },
  {
    icon: null,
    imgUrl: Reporting_Icon,
    title: "reporting",
    path: "/reporting",
  },
  {
    icon: null,
    imgUrl: SchedulingandGuardManagement_Icon,
    title: "Schedule & Guard Management",
  },
  {
    icon: null,
    imgUrl: Invoicing_Icon,
    title: "Invoicing",
    path: "/invoicing",
  },
  {
    icon: null,
    imgUrl: SecurityWatch_Icon,
    title: "Security Watch",
    path: "/securitywatch",
  },
  {
    icon: null,
    imgUrl: userList_Icon,
    title: "User List",
    path: "/userlist",
  },
  {
    icon: null,
    imgUrl: Clientlist_Icon,
    title: "Client List",
    path: "/clientlist",
  },
  // {
  //   icon: null,
  //   imgUrl: ClientHours_Icon,
  //   title: "Client Hours",
  //   path: "/clienthours",
  // },
  {
    icon: null,
    imgUrl: Signout_Icon,
    title: "Sign out",
    path: "/",
  },
];

export const reporting = [
  {
    icon: "",
    title: "create report",
    path: `/createreport`,
  },
  {
    icon: "",
    title: "view report",
    path: "/viewreport",
  },
  {
    icon: "",
    title: "assign report",
    path: "/assignreport",
  },
];

export const inVoicing = [
  {
    icon: "",
    title: "set up new client",
    path: "/setupnewclient",
  },
  {
    icon: "",
    title: "modify client",
    path: "/modifyclient",
  },
  {
    icon: "",
    title: "generate invoice",
    path: "/generateinvoice",
  },
  {
    icon: "",
    title: "view open invoices",
    path: "/viewopeninvoices",
  },
  {
    icon: "",
    title: "view paid invoices",
    path: "/viewpaidinvoices",
  },
  {
    icon: "",
    title: "invoice statement",
    path: "/invoicestatement",
  },
  {
    icon: "",
    title: "delete invoice",
    path: "/deleteInvoice",
  },
];

export const scheduleGuardManagement = [
  {
    icon: "",
    title: "assign permissions",
    path: "/assignpermissions",
  },
  {
    icon: "",
    title: "geolocation set up",
    path: "/geolocationsetup",
  },
  {
    icon: "",
    title: "time clock set up",
    path: "/timeclocksetup",
  },
];

export const userList = [
  {
    icon: "",
    title: "Client ",
    path: "/userclient",
  },
  {
    icon: "",
    title: "Security ",
    path: "/security",
  },
  {
    icon: "",
    title: "Management",
    path: "/managements",
  },
  {
    icon: "",
    title: "administrator",
    path: "/adminlist",
  },
];

// Client Nav Items

export const clientNav = [
  {
    icon: "",
    title: "Home",
    path: "/clienthome",
  },
  {
    icon: "",
    title: "Reporting",
    path: "/clientreport",
  },
];
export const managementNav = [
  {
    icon: "",
    title: "Home",
    path: "/managementhome",
  },
  {
    icon: "",
    title: "Reporting",
    path: "/managementreport",
  },
];

export const ReportingMap = ({
  reporting,
  activeSideNav,
  showSideNav,
  location,
  // handleSideNavClick,
}) =>
  reporting &&
  reporting.map((item, index) => {
    const isActive = location?.pathname.includes(item?.path);

    return (
      <Link
        key={index}
        to={item.path}
        // onClick={() => handleSideNavClick(item.path)}
      >
        <div
          className={`${
            showSideNav && "pl-10 pr-1 "
          } flex gap-2  cursor-pointer p-2 py-3 transition-colors duration-150 ease-in-out ${
            isActive ? activeSideNav : "bg-white hover:bg-zinc-200"
          }`}
        >
          <span
            className={`transition-transform ${
              showSideNav ? "text-lg" : "text-xl"
            }`}
          >
            {item.icon}
          </span>
          <span className='text-sm text-nowrap'>{item.title}</span>
        </div>
      </Link>
    );
  });

export const MapScheduleGuardManagement = ({
  activeSideNav,
  showSideNav,
  activeIcons,
  setActiveIcons,
  // handleSideNavClick,
}) => {
  const location = useLocation();

  return scheduleGuardManagement.map((item, index) => {
    const isActive = location?.pathname.includes(item?.path);

    return (
      <Link
        key={index}
        to={item.path}
        // onClick={() => handleSideNavClick(item.path)}
      >
        <div
          className={`${
            showSideNav && "pl-10 pr-1 "
          } flex gap-2  cursor-pointer p-2 py-3 transition-colors duration-150 ease-in-out ${
            isActive ? activeSideNav : "bg-white hover:bg-zinc-200"
          }`}
        >
          <span
            className={`transition-transform text-xl ${
              showSideNav && activeIcons === "schedule"
                ? " bg-blue-200 text-blue-700 p-1.5 rounded-md "
                : ""
            } `}
            onClick={() => setActiveIcons("schedule")}
          >
            {item.icon}
          </span>
          <span className='text-sm text-nowrap'>{item.title}</span>
        </div>
      </Link>
    );
  });
};
