import React from "react";
import Comment from "./Comment";
import { Title, Wrapper } from "./CommentsStyles";

export default () => (
  <Wrapper>
    <Title>Comments</Title>
    <Comment />
    <Comment />
    <Comment />
    <Comment />
  </Wrapper>
);
