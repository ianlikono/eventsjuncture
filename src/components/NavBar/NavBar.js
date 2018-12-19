import React from "react";
import { IconContext } from "react-icons";
import { MdAdd, MdMessage, MdNotificationsNone } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  MessageIcon,
  NavButtons,
  NotificationIcon,
  PlusButton,
  SearchBar,
  SearchInput,
  User,
  Wrapper
} from "./NavBarStyles";

const Nav = () => (
  <Wrapper>
    <h1>
      <Link to="/">Home</Link>
    </h1>
    <SearchBar>
      <SearchInput>
        <div className="search-input">
          <input type="text" />
          <span className="highlight" />
          <span className="bar" />
          <label>Search People Or Events</label>
        </div>
      </SearchInput>
    </SearchBar>
    <NavButtons>
      <MessageIcon>
        <IconContext.Provider value={{ size: "2em" }}>
          <MdMessage />
        </IconContext.Provider>
      </MessageIcon>
      <NotificationIcon>
        <IconContext.Provider value={{ size: "2em" }}>
          <MdNotificationsNone />
        </IconContext.Provider>
      </NotificationIcon>
      <PlusButton>
        <IconContext.Provider value={{ size: "1.8em" }}>
          <MdAdd />
        </IconContext.Provider>
      </PlusButton>
      <User>User</User>
    </NavButtons>
  </Wrapper>
);
export default Nav;
