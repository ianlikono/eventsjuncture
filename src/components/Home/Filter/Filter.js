import React from "react";
import { IconContext } from "react-icons";
import { FaAngleDown } from "react-icons/fa";
import {
  FilterContentWrapper,
  FilterText,
  FilterWrapper,
  Icon,
  SelectedFilter
} from "./FilterStyles";

export default () => (
  <FilterWrapper>
    <FilterContentWrapper>
      <FilterText>Filter by</FilterText>
      <Icon>
        <IconContext.Provider value={{ size: "2em" }}>
          <FaAngleDown />
        </IconContext.Provider>
      </Icon>
    </FilterContentWrapper>
    <SelectedFilter>Today</SelectedFilter>
  </FilterWrapper>
);
