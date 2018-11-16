import React from "react";
import { IconContext } from "react-icons";
import { FaHome, FaPowerOff } from "react-icons/fa";
import { MdDashboard, MdDateRange, MdLiveTv } from "react-icons/md";
import { NavItemChild, NavItemWrapper, NavWrapper } from "./SideNavStyles";

export default class extends React.Component {
  state = {
    activeButton: false
  };

  render() {
    return (
      <NavWrapper>
        <NavItemWrapper>
          <NavItemChild>
            <IconContext.Provider value={{ size: "3em" }}>
              <FaHome />
            </IconContext.Provider>
          </NavItemChild>
        </NavItemWrapper>
        <NavItemWrapper>
          <NavItemChild>
            <IconContext.Provider value={{ size: "3em" }}>
              <MdLiveTv />
            </IconContext.Provider>
          </NavItemChild>
        </NavItemWrapper>
        <NavItemWrapper>
          <NavItemChild>
            <IconContext.Provider value={{ size: "3em" }}>
              <MdDashboard />
            </IconContext.Provider>
          </NavItemChild>
        </NavItemWrapper>
        <NavItemWrapper>
          <NavItemChild>
            <IconContext.Provider value={{ size: "3em" }}>
              <MdDateRange />
            </IconContext.Provider>
          </NavItemChild>
        </NavItemWrapper>
        <NavItemWrapper>
          <NavItemChild>
            <IconContext.Provider value={{ size: "3em" }}>
              <FaPowerOff />
            </IconContext.Provider>
          </NavItemChild>
        </NavItemWrapper>
      </NavWrapper>
    );
  }
}
