import { lighten } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2rem;
  grid-column: mid-start / mid-end;
  grid-row: 2 / 3;
  display: flex;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const ContentHeader = styled.div`
  display: flex;
  margin-top: 2rem;
  color: ${props => props.theme.textColorDark};
`;

export const Tag = styled.span`
  color: ${props => props.theme.textColorLight};
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
  display: inline-block;
  font-weight: 600;
  font-size: 1.4rem;
  justify-content: center;
  white-space: nowrap;
  text-align: center;
  padding-right: 1rem;
`;

export const HeaderItems = styled.span`
  font-size: 0.8rem;
  display: flex;
  margin-left: 1rem;
  align-self: center;
`;

export const HeaderText = styled.p`
  font-size: 1.3rem;
  margin-left: 1rem;
  align-self: center;
`;

export const HeaderTime = styled.p`
  font-size: 1.3rem;
  margin-left: 5rem;
  align-self: center;
`;

export const Title = styled.h1`
  color: ${props => props.theme.textColorLight};
  font-size: 4rem;
  font-family: "Josefin Sans", sans-serif;
  line-height: 1;
`;

export const Bar = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  :before,
  :after {
    display: flex;
    content: "";
    width: 3rem;
    height: 5px;
    background: ${props => props.theme.textColorDark};
  }
`;

export const Description = styled.p`
  color: ${props => props.theme.textColorDark};
  font-family: "Nunito", sans-serif;
  font-size: 1.5rem;
  line-height: 2;
`;

export const ContentFooter = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-bottom: ${props => `1px solid ${props.theme.BorderColor}`};
  grid-column: 1 / -1;
  grid-row: 4 / 5;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Watching = styled.div`
  color: ${props => props.theme.textColorDark};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Likes = styled.div`
  color: ${props => props.theme.textColorDark};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Comments = styled.div`
  color: ${props => props.theme.textColorDark};
  display: flex;
  align-items: center;
  cursor: pointer;
`;
