import React from "react";
import { IconContext } from "react-icons";
import { FaEye, FaHeart, FaRegComments, FaRegHeart } from "react-icons/fa";
import { MdPeople, MdTimer } from "react-icons/md";
import {
  Bar,
  Comments,
  ContentFooter,
  ContentHeader,
  ContentWrapper,
  Description,
  HeaderItems,
  HeaderText,
  HeaderTime,
  Likes,
  Tag,
  Title,
  Watching,
  Wrapper
} from "./ContentStyles";

export default () => {
  const UserLiked = false;
  return (
    <Wrapper>
      <ContentWrapper>
        <ContentHeader>
          <Tag color="purple">Art & Design</Tag>
          <HeaderItems>
            <IconContext.Provider value={{ size: "2em" }}>
              <MdPeople />
            </IconContext.Provider>
            <HeaderText>1.8k Going</HeaderText>

            <HeaderTime>
              <IconContext.Provider value={{ size: "1em" }}>
                <MdTimer />
              </IconContext.Provider>
              33 minutes ago
            </HeaderTime>
          </HeaderItems>
        </ContentHeader>
        <Title>
          Merchants might be Princes, but creators are the new Kings.
        </Title>
        <Bar />
        <Description>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum
        </Description>
        <ContentFooter>
          <Watching>
            <IconContext.Provider value={{ size: "2em" }}>
              <FaEye />
              <span style={{ marginLeft: "1rem" }}>2.6K</span>
            </IconContext.Provider>
          </Watching>

          <Likes>
            <IconContext.Provider value={{ size: "2em" }}>
              {UserLiked ? <FaHeart /> : <FaRegHeart />}
              <span style={{ marginLeft: "1rem" }}>159</span>
            </IconContext.Provider>
          </Likes>

          <Comments>
            <IconContext.Provider value={{ size: "2em" }}>
              <FaRegComments />
              <span style={{ marginLeft: "1rem" }}>159</span>
            </IconContext.Provider>
          </Comments>
        </ContentFooter>
      </ContentWrapper>
    </Wrapper>
  );
};
