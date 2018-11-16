import styled from "styled-components";

export const HeaderWrapper = styled.div`
  grid-column: sidebar-end / full-end;
  grid-row: 1 / 2;
`;

export const HeaderImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: ${props =>
    `linear-gradient(to left top,${props.theme.imageGradientLight},${
      props.theme.imageGradientDark
    }), url("https://images.unsplash.com/photo-1521334726092-b509a19597c6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3c81d64e81415fca6fde564e483f858d&auto=format&fit=crop&w=1077&q=80")`};
  background-position: top;
`;

export const TextWrapper = styled.div`
  display: flex;
  margin-left: 10rem;
  flex-direction: column;
`;

export const HeaderUpperText = styled.span`
  font-size: 5rem;
  font-weight: 600;
  font-family: ${props => props.theme.fontDisplay};
  color: ${props => props.theme.textColorLight};
  margin-top: 4rem;
  line-height: 1;
`;

export const HeaderParagraph = styled.span`
  line-height: 1;
  font-size: 2.5rem;
  font-weight: 400;
  font-family: ${props => props.theme.fontDisplay};
  color: ${props => props.theme.textColorLight};
`;

export const Bar = styled.h2`
  margin-top: 1rem;
  :before,
  :after {
    display: flex;
    content: "";
    width: 3rem;
    height: 5px;
    background: ${props => props.theme.colorPurpleMedium};
  }
`;
