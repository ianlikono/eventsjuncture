import { lighten } from "polished";
import styled from "styled-components";

const LightenedBack = color => {
  return lighten(0.009, color);
};

export const Wrapper = styled.div`
  height: 5rem;
  display: grid;
  grid-template-columns: 8rem 2fr 1fr;
  background: ${props => LightenedBack(props.theme.colorPrimaryDark)};
  box-shadow: 0 8px 6px -6px #181818;
  color: ${props => props.theme.textColorDark};
`;

export const SearchBar = styled.div`
  grid-column: 2 / 3;
`;

export const NavButtons = styled.div`
  display: grid;
  grid-template-columns: 3rem 3rem 3rem 1fr;
  align-items: center;
  grid-column: 3 / 4;
  justify-content: center;
  grid-gap: 1rem;
`;

export const PlusButton = styled.button`
  grid-column: 3 / 4;
  cursor: pointer;
  box-shadow: ${props => props.theme.BoxShadow};
  border: none;
  transition: 0.3s;
  background: ${props =>
    `linear-gradient(to bottom right,${props.theme.colorPurpleLight},${
      props.theme.colorPurpleDark
    })`};
  border-radius: 50%;
  color: ${props => props.theme.textColorLight};
  &:hover {
    background: ${props =>
      `linear-gradient(to bottom left,${props.theme.colorPurpleLight},${
        props.theme.colorPurpleDark
      })`};
    box-shadow: ${props => props.theme.HoverBoxShadow};
  }
`;

export const User = styled.div`
  cursor: pointer;
  grid-column: 4/ 5;
  border-radius: 50%;
  padding: 1rem;
  color: ${props => props.theme.textColorLight};
  font-size: 1.5rem;
  font-weight: 600;
`;

export const MessageIcon = styled.span`
  cursor: pointer;
  grid-column: 1 / 2;
`;

export const NotificationIcon = styled.span`
  cursor: pointer;
  grid-column: 2/ 3;
`;

export const SearchInput = styled.div`
  .search-input {
    margin-left: 25%;
    position: relative;
    padding: 1rem 0 0.5rem 0;
    height: 4.5rem;
    width: 60%;
  }
  .search-input input {
    border: none;
    border-bottom: 1px solid #5f26fa;
    display: block;
    font-size: 2rem;
    line-height: 1rem;
    margin: 0;
    padding: 0.5rem 0;
    width: 100%;
    text-align: left;
    background-color: #333333;
    color: #ffffff;
  }
  .search-input input:focus {
    outline: none;
  }
  .search-input label {
    position: absolute;
    left: 0;
    top: 1.625rem;
    width: 100%;
    color: #aaaaaa;
    font-size: 1rem;
    line-height: 1rem;
    font-weight: normal;
    pointer-events: none;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  .search-input input:focus ~ label {
    top: 0;
    font-size: 1rem;
    color: #aaaaaa;
  }
  .search-input label.not-empty {
    top: 0;
    font-size: 1rem;
  }
  .search-input span:nth-of-type(3) {
    position: absolute;
    color: #aaaaaa;
    left: 100%;
    top: 1.625rem;
    font-size: 1rem;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  .search-input input:focus ~ span:nth-of-type(3) {
    left: -1.625rem;
    top: 1.625rem;
    color: #aaaaaa;
  }
  .search-input span:nth-of-type(3).not-empty {
    left: -1.625rem !important;
    top: 1.625rem !important;
  }
  .search-input span:nth-of-type(4) {
    position: absolute;
    color: #aaaaaa;
    right: 0;
    top: 1.625rem;
    font-size: 1rem;
    opacity: 0;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  .search-input input:focus ~ span:nth-of-type(4) {
    color: #aaaaaa;
    opacity: 1;
    cursor: pointer;
  }
  .search-input span:nth-of-type(4).not-empty {
    opacity: 1 !important;
  }
  .search-input .bar {
    display: block;
    width: 0;
    margin-left: 50%;
    height: 1px;
    background: black;
    opacity: 0;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  .search-input input:focus ~ .bar {
    opacity: 1;
    width: 100%;
    margin-left: 0;
  }
`;