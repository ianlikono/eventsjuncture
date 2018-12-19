import React from "react";
import { Wrapper } from "./CarouselStyles";

export default class extends React.Component {
  fn = () => {};
  render() {
    return (
      <Wrapper>
        <img
          style={{ width: "100%", height: "100%", backgroundSize: "contain" }}
          src={this.props.cover}
          alt="title or description"
        />
      </Wrapper>
    );
  }
}
