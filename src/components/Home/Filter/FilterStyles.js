import styled from "styled-components";

export const FilterWrapper = styled.div`
  grid-column: center-start / center-end;
  grid-row: 2 / 3;
`;

export const FilterContentWrapper = styled.div`
  display: flex;
  align-content: center;
`;

export const FilterText = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  font-family: ${props => props.theme.fontPrimary};
  color: ${props => props.theme.textColorLight};
  margin: 1.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0;
  line-height: 1;
  cursor: pointer;
`;

export const Icon = styled.span`
  align-self: center;
  color: ${props => props.theme.textColorDark};
  cursor: pointer;
`;

export const SelectedFilter = styled.span`
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 1.5rem;
  color: ${props => props.theme.textColorDark};
`;
