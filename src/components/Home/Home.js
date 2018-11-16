import React from "react";
import Body from "./Body/Body";
import Filter from "./Filter/Filter";
import Header from "./Header/Header";
import { HomeWrapper } from "./Homestyles";
import SideNav from "./SideNav/SideNav";

export default () => (
  <HomeWrapper>
    <Header />
    <SideNav />
    <Filter />
    <Body />
  </HomeWrapper>
);
