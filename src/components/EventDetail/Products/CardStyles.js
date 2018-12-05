import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 2fr 2.5fr 1fr 1fr 1fr;
  width: 35rem;
  height: 100%;
  background-color: ${props => props.theme.colorPrimaryLight};
  box-shadow: ${props => props.theme.BoxShadow};
  cursor: default;
  transition: 0.3s;

  &:hover {
    box-shadow: ${props => props.theme.HoverBoxShadow};
  }
`;

export const ProductImage = styled.img`
  grid-column: 1 / 2;
  grid-row: 1 / -1;
  width: 100%;
  height: 100%;
  background-size: cover;
  object-fit: contain;
`;

export const ProductTitle = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  color: ${props => props.theme.textColorLight};
  font-size: 3rem;
  font-family: "Josefin Sans", sans-serif;
  line-height: 1;
  text-align: center;
  font-weight: 400;
  margin-top: 0.5rem;
`;
export const ProductDescription = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  color: ${props => props.theme.textColorDark};
  font-family: "Nunito", sans-serif;
  font-size: 1.5rem;
  margin: 0.5rem;
  text-align: center;
`;

export const ProductPrice = styled.div`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  color: ${props => props.theme.textColorLight};
  font-size: 3rem;
  line-height: 1;
  text-align: center;
  font-weight: 400;
  margin-top: 0.5rem;
`;

export const ProductQuantity = styled.div`
  grid-column: 2 / 3;
  grid-row: 4 / 5;
`;

export const AddToCart = styled.div`
  grid-column: 2 / 3;
  grid-row: 5 / 6;
  align-self: end;
`;

export const InputNumber = styled.span`
  color: ${props => props.theme.textColorLight};
  font-weight: 600;
  font-size: 2rem;
  white-space: nowrap;
  text-align: center;
`;

export const Arrows = styled.span`
  color: ${props => props.theme.textColorDark};
  margin-left: 1rem;
  cursor: pointer;
`;

export const QuantityText = styled.span`
  color: ${props => props.theme.textColorDark};
`;
