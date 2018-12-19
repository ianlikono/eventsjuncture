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

export default class extends React.Component {
  render() {
    const { props } = this;

    let startDateString = new Date(props.startDate).toUTCString();
    startDateString = startDateString
      .split(" ")
      .slice(0, 4)
      .join(" ");
    const UserLiked = false;
    return (
      <Wrapper>
        <ContentWrapper>
          <ContentHeader>
            <Tag color="purple">{props.tag}</Tag>
            <HeaderItems>
              <IconContext.Provider value={{ size: "2em" }}>
                <MdPeople />
              </IconContext.Provider>
              <HeaderText>1.8k Going</HeaderText>

              <HeaderTime>
                <IconContext.Provider value={{ size: "1em" }}>
                  <MdTimer />
                </IconContext.Provider>
                {startDateString}
              </HeaderTime>
            </HeaderItems>
          </ContentHeader>
          <Title>{props.title}</Title>
          <Bar />
          <Description>{props.description}</Description>
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
  }
}
