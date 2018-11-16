import styled from "styled-components";

export const BodyStyles = styled.div`
  grid-column: center-start / center-end;
  grid-row: 3 / 4;
  margin-bottom: 5rem;
`;

export const EventsWrapper = styled.div`
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
