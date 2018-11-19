import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 25rem 4fr 20rem 3fr 15rem;
  grid-template-columns: [leftgap-start] 1fr [leftgap-end mid-start] 10fr[mid-end rightgap-start] 1fr[rightgap-end];

  @media only screen and (max-width: 600px) {
    grid-template-columns: [mid-start] 1fr [mid-end];
  }
`;
