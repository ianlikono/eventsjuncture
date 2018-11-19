import React from "react";
import Carousel from "./Carousel/Carousel";
import Comments from "./Comments/Comments";
import Content from "./Content/Content";
import { Wrapper } from "./EventDetailStyles";
import Map from "./Map/Map";
import Products from "./Products/Products";

export default () => (
  <Wrapper>
    <Carousel />
    <Content />
    <Products />
    <Comments />
    <Map />
  </Wrapper>
);
