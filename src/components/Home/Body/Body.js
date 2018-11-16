import React from "react";
import Card from "../../shared/Card/Card";
import { BodyStyles, EventsWrapper } from "./BodyStyles";

/**************************MOCKDATA **************************/

const title1 =
  "Summer's end and a the 'Grey Leaves' festival Begins Summer's end and a the 'Grey Leaves' festival Begins";
const title2 =
  "Music: American Guild of Organists is celebrating 100 years (Free)";
const title3 = "Saturday Running@8am..come join us.";
const title4 = "Python Programming for Everyone";
const title5 = "Proof of Lunch: A Bitcoin & Blockchain Conversation";
const title6 = "*DUSO* Season No.3 Rehearsal No.63";

const description1 =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
const description2 =
  "of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const description3 =
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum ";
const description4 =
  "he standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.";
const description5 =
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet ";
const description6 =
  "of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

const cover1 =
  "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1910d96881ab2d90dfe217957f00cae0&auto=format&fit=crop&w=500&q=60";
const cover2 =
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ac84274453d0240fd5a88b59c946c292&auto=format&fit=crop&w=500&q=60";
const cover3 =
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=be465b88fdf21a6e05ab522458452344&auto=format&fit=crop&w=500&q=60";
const cover4 =
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f9b9cb51ea58b136b1ccfc012192afcc&auto=format&fit=crop&w=500&q=60";
const cover5 =
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1d0bff8bb159f3157a0a6291244e4761&auto=format&fit=crop&w=500&q=60";
const cover6 =
  "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=20350f2b60dc7d7ac4b5e9526afacf77&auto=format&fit=crop&w=500&q=60";

const day1 = 24;
const day2 = 1;
const day3 = 2;
const day4 = 30;
const day5 = 16;
const day6 = 22;

const month1 = "January";
const month2 = "march";
const month3 = "April";
const month4 = "December";
const month5 = "November";
const month6 = "September";

const dayTime1 = "wed, 9:30PM";
const dayTime2 = "wed, 9:30PM";
const dayTime3 = "wed, 9:30PM";
const dayTime4 = "wed, 9:30PM";
const dayTime5 = "wed, 9:30PM";
const dayTime6 = "wed, 9:30PM";

/**************************MOCKDATA **************************/

export default () => (
  <BodyStyles>
    <EventsWrapper>
      <Card
        coverUrl={cover1}
        description={description1}
        title={title1}
        tagColor="purple"
        day={day1}
        month={month1}
        dayTime={dayTime1}
        tag="Music"
      />

      <Card
        coverUrl={cover2}
        description={description2}
        title={title2}
        tagColor="green"
        day={day2}
        month={month2}
        dayTime={dayTime2}
        tag="nature"
      />

      <Card
        coverUrl={cover3}
        description={description3}
        title={title3}
        tagColor="yellow"
        day={day3}
        month={month3}
        dayTime={dayTime3}
        tag="food"
      />

      <Card
        coverUrl={cover4}
        description={description4}
        title={title4}
        tagColor="red"
        day={day4}
        month={month4}
        dayTime={dayTime4}
        tag="Drinking"
      />

      <Card
        coverUrl={cover5}
        description={description5}
        title={title5}
        tagColor="blue"
        day={day5}
        month={month5}
        dayTime={dayTime5}
        tag="Running"
      />

      <Card
        coverUrl={cover6}
        description={description6}
        title={title6}
        tagColor="black"
        day={day6}
        month={month6}
        dayTime={dayTime6}
        tag="nature"
      />
    </EventsWrapper>
  </BodyStyles>
);
