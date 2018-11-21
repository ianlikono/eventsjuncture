import React from "react";
import { Wrapper } from "./CarouselStyles";

export default class extends React.Component {
  fn = () => {};
  render() {
    return (
      <Wrapper>
        <img
          style={{ width: "100%", height: "100%", backgroundSize: "contain" }}
          src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6b2b3eeca79a80926667ec71b01eac12&auto=format&fit=crop&w=800&q=60"
          alt="title or description"
        />
      </Wrapper>
    );
  }
}
