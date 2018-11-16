import { lighten } from "polished";
import styled from "styled-components";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-rows: 4fr 2fr 5fr 1fr;
  grid-template-columns: repeat(2, 1fr);
  background-color: ${props => props.theme.colorPrimaryLight};
  box-shadow: ${props => props.theme.BoxShadow};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: ${props => props.theme.HoverBoxShadow};
  }
`;

export const ImageWrapper = styled.img`
  width: 100%;
  height: 20rem;
  grid-row: 1 / 3;
  grid-column: 1 / -1;
  background-size: cover;
`;

export const DateInfo = styled.div`
  background-color: ${props => props.theme.colorPrimaryDark};
  grid-row: 2 / 3;
  display: flex;
  position: relative;
  grid-column: 1 / -1;
`;

export const DateIcon = styled.div`
  background-color: ${props => props.theme.colorPrimaryLight};
  height: 100%;
  margin-left: 1rem;
  padding: 1.2rem;
`;

export const DateDay = styled.h1`
  color: ${props => props.theme.textColorLight};
  font-size: 3.5rem;
  display: flex;
`;

export const DateMonth = styled.h1`
  color: ${props => props.theme.textColorLight};
  font-size: 1.5rem;
  align-self: center;
  display: block;
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const PureDateWrapper = styled.div`
  display: flex;
`;

export const MiniDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DayTime = styled.div`
  color: ${props => props.theme.textColorLight};
  text-transform: uppercase;
  margin-top: -0.5rem;
`;

export const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
`;

export const Plus = styled.div`
  position: absolute;
  right: 1rem;
  align-self: center;

  &:hover {
    box-shadow: ${props => props.theme.HoverBoxShadow};
  }
  &:active {
    box-shadow: ${props => props.theme.BoxShadow};
  }
`;

export const CardContent = styled.div`
  z-index: 20;
  grid-row: 3 / 4;
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-content: center;
  margin-bottom: 0.5rem;
`;

export const CardFooter = styled.div`
  border-top: ${props => `1px solid ${props.theme.BorderColor}`};
  grid-column: 1 / -1;
  grid-row: 4 / 5;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Tag = styled.div`
  margin-right: 1rem;
  box-shadow: ${props => props.theme.BoxShadow};
  display: flex;
  ${({ color }) => {
    const lightColor = lighten(0.2, color);
    return (
      color &&
      `background-image: linear-gradient(to right, ${color}, ${lightColor}
    );`
    );
  }}
  width: 7rem;
  font-weight: 600;
  font-size: 1.4rem;
  justify-content: center;
`;

export const Going = styled.span`
  color: ${props => props.theme.textColorDark};
  font-weight: 600;
  letter-spacing: 0.3rem;
`;

export const EventTitle = styled.h1`
  font-size: 3rem;
  font-family: "Josefin Sans", sans-serif;
  line-height: 1;
`;

export const EventDescription = styled.p`
  color: ${props => props.theme.textColorDark};
  font-family: "Nunito", sans-serif;
  font-size: 1.5rem;
`;

export const Watching = styled.div`
  color: ${props => props.theme.textColorDark};
  display: flex;
  align-items: center;
`;

export const Likes = styled.div`
  color: ${props => props.theme.textColorDark};
  display: flex;
  align-items: center;
`;

export const Comments = styled.div`
  color: ${props => props.theme.textColorDark};
  display: flex;
  align-items: center;
`;
