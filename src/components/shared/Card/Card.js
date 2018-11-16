import React from "react";
import { IconContext } from "react-icons";
import {
  FaEye,
  FaHeart,
  FaPlusCircle,
  FaRegComments,
  FaRegHeart
} from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import {
  CardContent,
  CardFooter,
  CardWrapper,
  Comments,
  ContentHeader,
  DateDay,
  DateIcon,
  DateInfo,
  DateMonth,
  DayTime,
  EventDescription,
  EventTitle,
  Going,
  ImageWrapper,
  Likes,
  MiniDateWrapper,
  Plus,
  PureDateWrapper,
  Tag,
  Watching
} from "./CardStyles";

export default props => {
  const eventTitle = props.title;
  const eventDescription = props.description;
  const UserLiked = false;
  return (
    <CardWrapper>
      <ImageWrapper src={props.coverUrl} />
      <DateInfo fullwidth={props.fullWidth}>
        <DateIcon>
          <IconContext.Provider value={{ size: "4em" }}>
            <MdDateRange />
          </IconContext.Provider>
        </DateIcon>
        <MiniDateWrapper>
          <PureDateWrapper>
            <DateDay>{props.day}</DateDay>
            <DateMonth>{props.month.slice(0, 3)}</DateMonth>
          </PureDateWrapper>
          <DayTime>{props.dayTime}</DayTime>
        </MiniDateWrapper>
        <Plus>
          <IconContext.Provider value={{ size: "3em" }}>
            <FaPlusCircle />
          </IconContext.Provider>
        </Plus>
      </DateInfo>
      <CardContent>
        <ContentHeader>
          <Tag color={props.tagColor}>{props.tag}</Tag>
          <Going>1.2K GOING</Going>
        </ContentHeader>
        <EventTitle>
          {eventTitle.length > 47
            ? eventTitle.slice(0, 50) + "..."
            : eventTitle}
        </EventTitle>
        <EventDescription>
          {eventDescription.length > 100
            ? eventDescription.slice(0, 100) + "..."
            : eventDescription}
        </EventDescription>
      </CardContent>
      <CardFooter>
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
      </CardFooter>
    </CardWrapper>
  );
};
