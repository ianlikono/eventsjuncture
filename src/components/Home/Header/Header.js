import React from "react";
import {
  Bar,
  HeaderImage,
  HeaderParagraph,
  HeaderUpperText,
  HeaderWrapper,
  TextWrapper
} from "./HeaderStyles";

export default () => (
  <HeaderWrapper>
    <HeaderImage>
      <TextWrapper>
        <HeaderUpperText>Brilliant Measures</HeaderUpperText>
        <HeaderParagraph>
          There are many variations of passages of Lorem Ipsum
        </HeaderParagraph>
        <Bar />
      </TextWrapper>
    </HeaderImage>
  </HeaderWrapper>
);
