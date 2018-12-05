import styled from "styled-components";

export const PageTitle = styled.h1`
  text-align: center;
  color: ${props => props.theme.textColorLight};
  font-size: 4rem;
  font-family: "Josefin Sans", sans-serif;
  line-height: 1;
`;

export const Wrapper = styled.div`
  overflow-x: hidden;
  display: grid;
  grid-template-columns: [leftGap-start]1fr[leftGap-end cover-start] 3fr[cover-end fields-start] 3fr[fields-end rightGap-start] 1fr [rightGap-end];

  @media (max-width: 700px) {
    grid-template-columns: [leftGap-start]1fr[leftGap-end fields-start] 6fr[fields-end rightGap-start] 1fr [rightGap-end];
  }
`;

export const Cover = styled.img`
  grid-column: cover-start / cover-end;
  width: 100%;
  height: 100%;
  box-shadow: ${props => props.theme.BoxShadow};
  object-fit: cover;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const NewEvent = styled.div`
  grid-column: fields-start / fields-end;
  box-shadow: ${props => props.theme.BoxShadow};
  background: ${props => props.theme.colorPrimaryDark};
`;

export const UploadOk = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    color: ${props => props.theme.colorPurpleDark};
    margin-left: 1.5rem;
  }
  h3 {
    color: green;
    margin-top: 1.8rem;
    font-size: 2rem;
  }
`;
