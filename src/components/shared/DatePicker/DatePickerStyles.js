import styled from "styled-components";

export const SingleDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SingleDateLabel = styled.div`
  color: ${props => props.theme.textColorLight};
  font-size: 2rem;
  margin: 1.5rem 0 1.5rem 0;
`;
