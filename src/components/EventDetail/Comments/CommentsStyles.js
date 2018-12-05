import styled from "styled-components";

export const Wrapper = styled.div`
  grid-column: mid-start / mid-end;
  grid-row: 4 / 5;
  margin: 0 auto;
  margin-top: 5rem;
  background-color: ${props => props.theme.colorPrimaryLight};
  width: 60%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${props => props.theme.textColorLight};
  font-size: 3rem;
  font-family: "Josefin Sans", sans-serif;
  line-height: 1;
  margin: 3rem;
  margin-bottom: 0;
`;

export const CommentCard = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: 10rem 1fr;
  grid-template-rows: 5rem 1fr;
`;

export const CommentHeader = styled.div`
  grid-row: 1 / 2;
  display: flex;
  grid-column: 1 / 2;
`;
export const CommentBody = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  border-bottom: ${props => `1px solid ${props.theme.BorderColor}`};
  margin-left: 6rem;
`;

export const UserAvatar = styled.img`
  box-shadow: ${props => props.theme.BoxShadow};
  vertical-align: middle;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const CommentDetails = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  justify-content: center;
`;

export const UserName = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${props => props.theme.textColorLight};
  font-size: 1.3rem;
  font-weight: 400;
  font-family: "Josefin Sans", sans-serif;
  line-height: 1;
  text-transform: uppercase;
  display: block;
`;

export const Time = styled.span`
  color: ${props => props.theme.textColorDark};
  font-size: 1rem;
  line-height: 1;
  text-transform: uppercase;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const CommentText = styled.p`
  color: ${props => props.theme.textColorDark};
  font-family: "Nunito", sans-serif;
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;
