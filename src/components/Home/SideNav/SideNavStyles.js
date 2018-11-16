import { lighten } from "polished";
import styled from "styled-components";

const LightenedBack = color => {
  return lighten(0.009, color);
};

export const NavWrapper = styled.div`
  background: ${props => LightenedBack(props.theme.colorPrimaryDark)};
  grid-column: sidebar-start / sidebar-end;
  grid-row: 1 / -1;
  box-shadow: ${props => props.theme.BoxShadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.textColorDark};
`;

export const NavItemWrapper = styled.div`
  background-color: ${props => props.theme.colorPrimaryLight};
  cursor: pointer;
  width: 100%;
  height: 6rem;
  box-shadow: ${props => props.theme.BoxShadow};
  margin-top: 2rem;
  &:hover {
    box-shadow: ${props => props.theme.HoverBoxShadow};
    background: ${props => LightenedBack(props.theme.BorderColor)};
  }
  &:active {
    box-shadow: ${props => props.theme.BoxShadow};
  }
`;

export const NavItemChild = styled.div`
  margin-left: 25%;
  margin-top: 20%;
`;
