// style={{
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))"
// }}

import React from "react";
import { IconContext } from "react-icons";
import { FaEye, FaHeart, FaPlusCircle, FaRegComments, FaRegHeart } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { CardContent, CardFooter, CardWrapper, Comments, ContentHeader, DateDay, DateIcon, DateInfo, DateMonth, DayTime, EventDescription, EventTitle, Going, ImageWrapper, Likes, MiniDateWrapper, Plus, PureDateWrapper, Tag, Watching } from "./CardStyles";

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

export default props => {
  const eventTitle =
    "Summer's end and a the 'Grey Leaves' festival Begins Summer's end and a the 'Grey Leaves' festival Begins";
  const eventDescription = lorem;
  const UserLiked = false;
  return (
    <CardWrapper>
      <ImageWrapper src="https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_zuerich_home_topevents_1600x900.jpg?itok=NI4hhrwV" />
      <DateInfo fullwidth={props.fullWidth}>
        <DateIcon>
          <IconContext.Provider value={{ size: "4em" }}>
            <MdDateRange />
          </IconContext.Provider>
        </DateIcon>
        <MiniDateWrapper>
          <PureDateWrapper>
            <DateDay>24</DateDay>
            <DateMonth>Oct</DateMonth>
          </PureDateWrapper>
          <DayTime>wed, 9:30PM</DayTime>
        </MiniDateWrapper>
        <Plus>
          <IconContext.Provider value={{ size: "3em" }}>
            <FaPlusCircle />
          </IconContext.Provider>
        </Plus>
      </DateInfo>
      <CardContent>
        <ContentHeader>
          <Tag color={props.tagColor}>Music</Tag>
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
