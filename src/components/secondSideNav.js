import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { logo, miniLogo } from "../assets";
import { activeSideNav } from "../style/globalStyles";
import { GoFileDirectory, GoHome } from "react-icons/go";
import { RiCalendarScheduleLine, RiHomeSmile2Line } from "react-icons/ri";
import { FaAngleDown, FaRegUser } from "react-icons/fa";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { MdOutlineSecurity } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { CgUserlane } from "react-icons/cg";
import { BiHome } from "react-icons/bi";
import { TbHours12 } from "react-icons/tb";
import {
  clientNav,
  managementNav,
  inVoicing,
  MapScheduleGuardManagement,
  navItems,
  reporting,
  ReportingMap,
  scheduleGuardManagement,
  userList,
} from "./sideNavComponents";
import { Header } from "./layout";
import { auth } from "../config/config";

const SideNav = ({ className, removeNav }) => {
  const {
    openReport,
    setOpenReport,
    openscheduleGuardManagement,
    setOpenscheduleGuardManagement,

    openInVoicing,
    setOpenInVoicing,
    isVisibleReport,
    setIsVisibleReport,
    isVisibleSchedule,
    setIsVisibleSchedule,
    isVisibleInvoicing,
    setVisibleInvoicing,
    isUserList,
    setIsUserList,
    OpenUserList,
    setOpenUserList,
    setRemoveNav,
    UserType,
  } = useAppContext();
  const showSideNav = true;
  const location = useLocation();
  const handleSignOut = () => {
    navigate(`/`); // Redirect to login page after sign out
    console.log("Signed out successfully");
    localStorage.removeItem("maxUser");
    sessionStorage.removeItem("maxUser");

    window.location.reload();
    // try {
    //   await auth.signOut();
    //   const navLocation =
    //     UserType?.role === "Client"
    //       ? "clients"
    //       : UserType?.role === "admin"
    //       ? "admin"
    //       : UserType?.role === "management"
    //       ? "management"
    //       : "";
    //   navigate(`/${navLocation}`); // Redirect to login page after sign out
    //   console.log("Signed out successfully");
    //   localStorage.removeItem("maxUser");
    //   window.location.reload();
    // } catch (error) {
    //   console.error("Sign out error:", error);
    // }
  };

  useEffect(() => {
    if (openReport) {
      setIsVisibleReport(true);
    } else {
      // Delay hiding to allow transition
      const timer = setTimeout(() => setIsVisibleReport(false), 0); // Duration should match your transition time
      return () => clearTimeout(timer);
    }
  }, [openReport]);

  useEffect(() => {
    if (OpenUserList) {
      setIsUserList(true);
    } else {
      // Delay hiding to allow transition
      const timer = setTimeout(() => setIsUserList(false), 0); // Duration should match your transition time
      return () => clearTimeout(timer);
    }
  }, [OpenUserList]);

  useEffect(() => {
    if (openInVoicing) {
      setVisibleInvoicing(true);
    } else {
      // Delay hiding to allow transition
      const timer = setTimeout(() => setVisibleInvoicing(false), 0); // Duration should match your transition time
      return () => clearTimeout(timer);
    }
  }, [openInVoicing]);
  useEffect(() => {
    if (openscheduleGuardManagement) {
      setIsVisibleSchedule(true);
    } else {
      // Delay hiding to allow transition
      const timer = setTimeout(() => setIsVisibleSchedule(false), 0); // Duration should match your transition time
      return () => clearTimeout(timer);
    }
  }, [openscheduleGuardManagement]);

  const navigate = useNavigate();
  const [activeIcons, setActiveIcons] = useState("");
  // console.log("activeIcons", activeIcons);
  // console.log(location.pathname);
  return (
    <div className={`${className} capitalize shadow  h-full `}>
      <div className="lg:flex  justify-start items-center pt-4 ">
        {/* <Link to='https://maximalsecurityservices.com'>
         
          <img
            src={showSideNav ? logo : miniLogo}
            alt=''
            className={`${
              showSideNav ? "max-w-40 max-h-32" : "max-w-14 min-w-14 px-2 "
            }`}
          />
         
        </Link> */}
        <Header
          className="h-12  pl-5"
          setRemoveNav={setRemoveNav}
          removeNav={removeNav}
        />
        <div
          className={`font-bold text-xs text-nowrap text-zinc-500 ${
            !showSideNav && "opacity-0"
          } `}
        >
          {UserType?.role === "admin"
            ? "admin panel"
            : UserType?.role === "client"
            ? "Client panel"
            : UserType?.role === "management"
            ? "Management panel"
            : ""}
        </div>

        {/* <Header className='h-12 w-full' setRemoveNav={setRemoveNav} /> */}
      </div>
      <div className=" xl:text-sm   h-[calc(100%-5rem)] relative mt-2">
        <div class="custom-scrollbar-track absolute right-0">
          <div class="custom-scrollbar-thumb"></div>
        </div>
        <div
          className={` sidenav  h-full w-full  ${
            showSideNav ? "overflow-y-scroll" : ""
          } `}
        >
          {/* {showSideNav && ( */}

          {/* )} */}
          <div
            className={` transition-all duration-500 ease-in-out
              ${showSideNav ? "" : "flex flex-col gap-0"}
              `}
          >
            {UserType?.role === "admin"
              ? navItems.map((item, index) => {
                  return (
                    <div key={index} className="">
                      {item.title === "reporting" ? (
                        <>
                          <div
                            className={`border-b ${
                              showSideNav ? "pl-5" : "pl-5"
                            }  pr-1 py-1.5 relative  ${
                              showSideNav ? "" : "group border-transparent"
                            }`}
                          >
                            <button
                              onClick={() => {
                                setOpenReport(!openReport);
                                setOpenscheduleGuardManagement(false);
                                setOpenInVoicing(false);
                                setOpenUserList(false);
                              }}
                              className=" w-full py-2 text-start  cursor-pointer flex justify-between items-center capitalize"
                            >
                              <div
                                className={`flex items-center gap-2   ${
                                  openReport && "text-blue-500"
                                } `}
                              >
                                <Icon
                                  icon={item.icon}
                                  imgUrl={item.imgUrl}
                                  showSideNav={showSideNav}
                                  activeIcons={activeIcons}
                                  active="report"
                                  onClick={() => setActiveIcons("report")}
                                />
                                {/* {showSideNav && ( */}
                                <span
                                  className={`text-sm  ${
                                    !showSideNav && "opacity-0"
                                  } `}
                                >
                                  {item.title}
                                </span>
                                {/* )} */}
                              </div>
                              {/* {showSideNav && ( */}
                              <FaAngleDown
                                className={`  ${
                                  openReport && "rotate-180"
                                } transition-all ease-in-out  ${
                                  !showSideNav && "opacity-0"
                                } `}
                              />
                              {/* )} */}
                            </button>
                            {/* <div className='absolute z-50 left-16 ml-1 shadow '>
                        <MapScheduleGuardManagement />
                       </div> */}

                            <div
                              className={`transition-all duration-300 ease-in-out  bg-white ${
                                showSideNav && "overflow-hidden"
                              }  ${
                                !showSideNav &&
                                "absolute z-40 left-full  top-0 group-hover:block hidden  text-left  shadow-md p-1 text-nowrap"
                              }  ${
                                showSideNav
                                  ? isVisibleReport
                                    ? "max-h-screen opacity-100"
                                    : "max-h-0 "
                                  : ""
                              }`}
                            >
                              <ReportingMap
                                reporting={reporting}
                                activeSideNav={showSideNav && activeSideNav}
                                showSideNav={showSideNav}
                                location={location}
                                // handleSideNavClick={handleSideNavClick}
                              />
                            </div>
                          </div>
                        </>
                      ) : item.title === "Schedule & Guard Management" ? (
                        <div
                          className={`pl-5 border-b pr-1  py-1.5 relative translate-all ease-in-out duration-700 ${
                            showSideNav ? "" : "group/sch border-transparent"
                          } `}
                        >
                          <button
                            onClick={() => {
                              setOpenscheduleGuardManagement(
                                !openscheduleGuardManagement
                              );
                              setOpenReport(false);
                              setOpenInVoicing(false);
                              setOpenUserList(false);
                            }}
                            className="  w-full  py-2 text-start cursor-pointer flex justify-between items-center"
                          >
                            <div
                              className={`flex items-center gap-2 transition-all duration-300  ${
                                openscheduleGuardManagement && "text-blue-500"
                              } `}
                            >
                              <Icon
                                icon={item.icon}
                                imgUrl={item.imgUrl}
                                showSideNav={showSideNav}
                                activeIcons={activeIcons}
                                active={item.title}
                                onClick={() => setActiveIcons(item.title)}
                              />
                              <span
                                className={`text-sm w-full flex flex-col text-nowrap ${
                                  !showSideNav && "opacity-0 hidden"
                                } `}
                              >
                                {/* {item.title} */}
                                <span>Schedule &</span>
                                <span> Guard Management </span>
                              </span>
                            </div>
                            {/* {showSideNav && ( */}
                            <FaAngleDown
                              className={`  ${
                                openscheduleGuardManagement && "rotate-180"
                              } transition-all ease-in-out  ${
                                !showSideNav && "opacity-0"
                              }  `}
                            />
                            {/* )} */}
                          </button>
                          <div
                            className={`transition-all duration-300 ease-in-out bg-white   ${
                              showSideNav && "overflow-hidden"
                            }  ${
                              !showSideNav &&
                              "absolute z-40 left-full top-0 bg-white group-hover/sch:block hidden   text-left  shadow-md p-1 text-nowrap"
                            }  ${
                              showSideNav
                                ? isVisibleSchedule
                                  ? "max-h-screen opacity-100"
                                  : "max-h-0 "
                                : ""
                            }`}
                          >
                            <MapScheduleGuardManagement
                              // activeSideNav={activeSideNav}
                              activeSideNav={showSideNav && activeSideNav}
                              showSideNav={showSideNav}
                              activeIcons={activeIcons}
                              setActiveIcons={setActiveIcons}
                              // handleSideNavClick={handleSideNavClick}
                            />
                          </div>
                        </div>
                      ) : item.title === "Invoicing" ? (
                        <>
                          <div
                            className={` translate-all ease-linear duration-500 border-b ${
                              showSideNav ? "pl-5" : "pl-5 "
                            }  pr-1 py-1.5 relative ${
                              showSideNav ? "" : "group/inv border-transparent"
                            }`}
                          >
                            <button
                              onClick={() => {
                                setOpenInVoicing(!openInVoicing);
                                setOpenscheduleGuardManagement(false);
                                setOpenReport(false);

                                setOpenUserList(false);
                              }}
                              className=" w-full py-2 text-start cursor-pointer flex justify-between items-center"
                            >
                              <div
                                className={`flex items-center gap-2  ${
                                  openInVoicing && "text-blue-500"
                                } `}
                              >
                                <Icon
                                  icon={item.icon}
                                  imgUrl={item.imgUrl}
                                  showSideNav={showSideNav}
                                  activeIcons={activeIcons}
                                  active={item.title}
                                  onClick={() => setActiveIcons(item.title)}
                                />

                                <span
                                  className={`text-sm flex-nowrap ${
                                    !showSideNav && "opacity-0"
                                  } `}
                                >
                                  {item.title}
                                </span>
                              </div>
                              {showSideNav && (
                                <FaAngleDown
                                  className={`${
                                    openInVoicing && "rotate-180"
                                  } transition-all ease-in-out`}
                                />
                              )}
                            </button>

                            <div
                              className={`transition-all duration-300 ease-in-out   ${
                                !showSideNav
                                  ? "absolute z-40 left-full top-0 bg-white group-hover/inv:block hidden   text-left  shadow-md p-1 text-nowrap"
                                  : "overflow-hidden"
                              }  ${
                                showSideNav
                                  ? isVisibleInvoicing
                                    ? "max-h-screen opacity-100"
                                    : "max-h-0 "
                                  : ""
                              }`}
                            >
                              {inVoicing.map((item, index) => {
                                const isActive = location?.pathname.includes(
                                  item?.path
                                );

                                return (
                                  <Link key={index} to={item.path}>
                                    <div
                                      className={`${
                                        showSideNav && "pl-7 pr-1 "
                                      } flex gap-2  cursor-pointer p-2 py-3 transition-colors duration-150 ease-in-out ${
                                        isActive
                                          ? activeSideNav
                                          : "bg-white hover:bg-zinc-200"
                                      }`}
                                    >
                                      <Icon
                                        icon={item.icon}
                                        activeIcons={activeIcons}
                                        onClick={() => setActiveIcons("")}
                                      />
                                      <span className="text-sm text-nowrap">
                                        {item.title}
                                      </span>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </>
                      ) : item.title === "User List" ? (
                        <>
                          <div
                            className={`translate-all ease-linear duration-500 border-b ${
                              showSideNav ? "pl-5" : "pl-5 "
                            }  pr-1 py-1.5 relative ${
                              showSideNav ? "" : "group/inv border-transparent"
                            }`}
                          >
                            <button
                              onClick={() => {
                                setOpenUserList(!OpenUserList);
                                setOpenReport(false);
                                setOpenInVoicing(false);
                                setOpenscheduleGuardManagement(false);
                              }}
                              className=" w-full py-2 text-start cursor-pointer flex justify-between items-center"
                            >
                              <div
                                className={`flex items-center gap-2  ${
                                  OpenUserList && "text-blue-500"
                                } `}
                              >
                                <Icon
                                  icon={item.icon}
                                  imgUrl={item.imgUrl}
                                  showSideNav={showSideNav}
                                  activeIcons={activeIcons}
                                  active={item.title}
                                  onClick={() => setActiveIcons(item.title)}
                                />
                                {/* {showSideNav && ( */}
                                <span
                                  className={`text-sm text-nowrap ${
                                    !showSideNav && "opacity-0"
                                  } `}
                                >
                                  {item.title}
                                </span>
                                {/* )} */}
                              </div>
                              {showSideNav && (
                                <FaAngleDown
                                  className={`  ${
                                    OpenUserList && "rotate-180"
                                  } transition-all ease-in-out`}
                                />
                              )}
                            </button>

                            <div
                              className={`transition-all duration-300 ease-in-out   ${
                                showSideNav && "overflow-hidden"
                              }  ${
                                !showSideNav &&
                                "absolute z-40 left-full top-0 bg-white group-hover/inv:block hidden   text-left  shadow-md p-1 text-nowrap"
                              }  ${
                                showSideNav
                                  ? isUserList
                                    ? "max-h-screen opacity-100"
                                    : "max-h-0 "
                                  : ""
                              }`}
                            >
                              {userList.map((item, index) => {
                                const isActive = location?.pathname.includes(
                                  item?.path
                                );

                                return (
                                  <Link key={index} to={item.path}>
                                    <div
                                      className={`${
                                        showSideNav && "pl-7 pr-1 "
                                      } flex gap-2  cursor-pointer p-2 py-3 transition-colors duration-150 ease-in-out ${
                                        isActive
                                          ? activeSideNav
                                          : "bg-white hover:bg-zinc-200"
                                      }`}
                                    >
                                      <Icon
                                        icon={item.icon}
                                        activeIcons={activeIcons}
                                        active={item.title}
                                        onClick={() =>
                                          setActiveIcons(item.title)
                                        }
                                      />
                                      <span className="text-sm text-nowrap">
                                        {item.title}
                                      </span>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </>
                      ) : (
                        <Link to={item.path}>
                          <div
                            className={`pl-5 pr-1 flex gap-2 items-center border-b ${
                              showSideNav && ""
                            }  p-2 py-3   cursor-pointer ${
                              showSideNav
                                ? item?.path === location.pathname
                                  ? activeSideNav
                                  : "bg-white hover:bg-zinc-200 "
                                : "border-transparent"
                            } `}
                            onClick={() => {
                              setOpenInVoicing(false);
                              setOpenscheduleGuardManagement(false);
                              setOpenReport(false);
                              setOpenUserList(false);
                            }}
                          >
                            <Icon
                              icon={item.icon}
                              imgUrl={item.imgUrl}
                              showSideNav={showSideNav}
                              activeIcons={activeIcons}
                              active={item.title}
                              onClick={() => {
                                setActiveIcons(item.title);
                                setOpenInVoicing(false);
                                setOpenscheduleGuardManagement(false);
                                setOpenReport(false);

                                setOpenUserList(false);
                              }}
                            />

                            <span
                              className={`text-sm text-nowrap  ${
                                !showSideNav && "opacity-0"
                              } `}
                            >
                              {item.title}
                            </span>
                          </div>
                        </Link>
                      )}
                    </div>
                  );
                })
              : UserType?.role === "client"
              ? clientNav.map((item, index) => {
                  return (
                    <Link to={item.path}>
                      <div
                        className={`pl-5 pr-1 flex gap-2 items-center border-b ${
                          showSideNav && ""
                        }  p-2 py-3   cursor-pointer ${
                          showSideNav
                            ? item?.path === location.pathname
                              ? activeSideNav
                              : "bg-white hover:bg-zinc-200 "
                            : "border-transparent"
                        } `}
                        // onClick={() => {
                        //   setOpenInVoicing(false);
                        //   setOpenscheduleGuardManagement(false);
                        //   setOpenReport(false);
                        //   setOpenUserList(false);
                        // }}
                      >
                        <Icon
                          icon={item.icon}
                          imgUrl={item.imgUrl}
                          showSideNav={showSideNav}
                          activeIcons={activeIcons}
                          active={item.title}
                          onClick={() => {
                            setActiveIcons(item.title);
                            // setOpenInVoicing(false);
                            // setOpenscheduleGuardManagement(false);
                            // setOpenReport(false);

                            // setOpenUserList(false);
                          }}
                        />

                        <span
                          className={`text-sm text-nowrap  ${
                            !showSideNav && "opacity-0"
                          } `}
                        >
                          {item.title}
                        </span>
                      </div>
                    </Link>
                  );
                })
              : UserType?.role === "management"
              ? managementNav.map((item, index) => {
                  return (
                    <Link to={item.path}>
                      <div
                        className={`pl-5 pr-1 flex gap-2 items-center border-b ${
                          showSideNav && ""
                        }  p-2 py-3   cursor-pointer ${
                          showSideNav
                            ? item?.path === location.pathname
                              ? activeSideNav
                              : "bg-white hover:bg-zinc-200 "
                            : "border-transparent"
                        } `}
                        // onClick={() => {
                        //   setOpenInVoicing(false);
                        //   setOpenscheduleGuardManagement(false);
                        //   setOpenReport(false);
                        //   setOpenUserList(false);
                        // }}
                      >
                        <Icon
                          icon={item.icon}
                          imgUrl={item.imgUrl}
                          showSideNav={showSideNav}
                          activeIcons={activeIcons}
                          active={item.title}
                          onClick={() => {
                            setActiveIcons(item.title);
                            // setOpenInVoicing(false);
                            // setOpenscheduleGuardManagement(false);
                            // setOpenReport(false);

                            // setOpenUserList(false);
                          }}
                        />

                        <span
                          className={`text-sm text-nowrap  ${
                            !showSideNav && "opacity-0"
                          } `}
                        >
                          {item.title}
                        </span>
                      </div>
                    </Link>
                  );
                })
              : ""}
            {/* <div
              className={`pl-5 pr-1 flex gap-2 items-center border-b   p-2 py-3   cursor-pointer hover:bg-red-100  hover:text-red-600`}
              onClick={handleSignOut}
            >
              <span className='text-sm text-nowrap'>Sign out</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const Icon = ({ icon, imgUrl, showSideNav, activeIcons, onClick, active }) => (
  <span
    className={`text-2xl p-1.5 ${
      !showSideNav
        ? activeIcons === active && " bg-blue-200 text-blue-700    "
        : ""
    }  ${!showSideNav && "hover:bg-zinc-200 rounded-md"}  `}
    onClick={onClick}
  >
    {icon && icon}
    {imgUrl && (
      <div className="w-7 h-7 ">
        <img src={imgUrl} />
      </div>
    )}
  </span>
);
