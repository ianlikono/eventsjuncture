import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { sortBy } from "../../../utils/sort";
import {
  CommentBody,
  CommentCard,
  CommentDetails,
  CommentHeader,
  CommentText,
  ContentWrapper,
  Time,
  Title,
  UserAvatar,
  UserName,
  Wrapper
} from "./CommentsStyles";

export default props => {
  props.comments &&
    sortBy(props.comments.items, { prop: "createdAt", desc: true });
  const comments =
    props.comments &&
    props.comments.items.map(comment => {
      return (
        <React.Fragment key={comment.id}>
          <ContentWrapper>
            <CommentCard>
              <CommentHeader>
                <UserAvatar src="https://images.unsplash.com/photo-1521310192545-4ac7951413f0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a8d0b036e510bacb2baa495a6e016ef4&auto=format&fit=crop&w=500&q=60" />
                <CommentDetails>
                  <UserName>
                    <Link to={`/user/${comment.user.id}`}>
                      {comment.user.username}
                    </Link>
                  </UserName>
                  <Time>
                    <Moment fromNow>{comment.createdAt}</Moment>
                  </Time>
                </CommentDetails>
              </CommentHeader>
              <CommentBody>
                <CommentText>{comment.text}</CommentText>
              </CommentBody>
            </CommentCard>
          </ContentWrapper>
        </React.Fragment>
      );
    });
  return (
    <Wrapper>
      <Title>Comments</Title>
      {comments}
    </Wrapper>
  );
};
