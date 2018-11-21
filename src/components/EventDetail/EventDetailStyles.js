import styled from "styled-components";

export const Wrapper = styled.div`
  overflow-x: hidden;
  display: grid;
  grid-template-rows:
    fit-content(1rem) fit-content(1rem) fit-content(1rem) fit-content(1fr)
    15rem;
  grid-template-columns: [leftgap-start] 1fr [leftgap-end mid-start] 10fr[mid-end rightgap-start] 1fr[rightgap-end];

  @media only screen and (max-width: 600px) {
    grid-template-columns: [mid-start] 1fr [mid-end];
  }
`;
