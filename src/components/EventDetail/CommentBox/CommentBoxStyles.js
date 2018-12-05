import styled, { keyframes } from "styled-components";

const turnpic = keyframes`
  0% { -webkit-transform: rotate(180deg);  }
  50% {-webkit-transform: rotate(200deg);  }
  100% { -webkit-transform: rotate(220deg); }
`;

export const Wrapper = styled.div`
  grid-column: mid-start / mid-end;
  grid-row: 3 / 4;
  margin: 0 auto;
  background-image: ${props => `linear-gradient(to right, ${
    props.theme.colorPurpleDark
  }, ${props.theme.colorPurpleLight}
    )`};
  border-radius: 3.2rem 1rem 1rem 3.2rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
`;

export const Userpic = styled.div`
  float: left;
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  box-shadow: ${props => props.theme.BoxShadow};
  animation: ${turnpic} 1s infinite alternate;
`;

export const UserImg = styled.img`
  border-radius: 50%;
  box-shadow: ${props => props.theme.BoxShadow};
  animation: ${turnpic} 1s infinite alternate;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CommentBox = styled.div`
  float: left;
  margin-left: 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
`;

export const TextArea = styled.textarea`
  background-color: ${props => props.theme.colorPrimaryLight};
  color: ${props => props.theme.textColorDark};
  height: 100%;
  padding: 2rem;
  box-shadow: ${props => props.theme.BoxShadow};
  border-radius: 0.5rem;
  border: none;
`;
