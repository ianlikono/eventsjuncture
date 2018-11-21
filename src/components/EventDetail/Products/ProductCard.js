import React from "react";
import { IconContext } from "react-icons";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import { Button } from "../../shared/Button/Button";
import {
  AddToCart,
  Arrows,
  InputNumber,
  ProductDescription,
  ProductImage,
  ProductPrice,
  ProductQuantity,
  ProductTitle,
  QuantityText,
  Wrapper
} from "./CardStyles";

export default class extends React.Component {
  state = {
    quantity: 0
  };

  onAddQuantityClick = () => {
    this.setState(prevState => {
      return { quantity: prevState.quantity + 1 };
    });
  };

  onDecreaseQuantityClick = () => {
    if (this.state.quantity > 0) {
      this.setState(prevState => {
        return { quantity: prevState.quantity - 1 };
      });
    }
  };

  render() {
    return (
      <Wrapper>
        <ProductImage
          src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce33761e90611fc4072c99cfa8adbe35&auto=format&fit=crop&w=500&q=60"
          alt="image"
        />
        <ProductTitle>TimberJack</ProductTitle>
        <ProductDescription>
          survived not only five centuries, but also the leap into electronic
          typesetting,,
        </ProductDescription>
        <ProductPrice>$50.00</ProductPrice>
        <ProductQuantity>
          <InputNumber>
            <QuantityText>Quantity:</QuantityText> {this.state.quantity}
            <Arrows onClick={this.onAddQuantityClick}>
              <IconContext.Provider value={{ size: "1em" }}>
                <FaArrowCircleUp />
              </IconContext.Provider>
            </Arrows>
            <Arrows onClick={this.onDecreaseQuantityClick}>
              <IconContext.Provider value={{ size: "1em" }}>
                <FaArrowCircleDown />
              </IconContext.Provider>
            </Arrows>
          </InputNumber>
        </ProductQuantity>
        <AddToCart>
          <Button blue big>
            Add To Cart
          </Button>
        </AddToCart>
      </Wrapper>
    );
  }
}
