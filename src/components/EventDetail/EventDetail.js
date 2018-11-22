import React from "react";
import Carousel from "./Carousel/Carousel";
import CommentBox from "./CommentBox/CommentBox";
import Comments from "./Comments/Comments";
import Content from "./Content/Content";
import { Wrapper } from "./EventDetailStyles";
import Map from "./Map/Map";

export default () => (
  <Wrapper>
    <Carousel />
    <Content />
    <CommentBox />
    <Comments />
    <Map />
  </Wrapper>
);
