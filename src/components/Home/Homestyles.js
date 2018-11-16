import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns:
    [sidebar-start] 8rem [sidebar-end full-start] minmax(6rem, 1fr)
    [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
    [center-end] minmax(6rem, 1fr)
    [full-end];
  grid-template-rows: 20rem 8rem 8fr;
`;
