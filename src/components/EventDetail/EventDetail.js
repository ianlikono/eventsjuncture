import { BackTop, message } from "antd";
import gql from "graphql-tag";
import React from "react";
import { Query } from "react-apollo";
import NotFound from "../../components/NotFound/NotFound";
import { getEvent } from "../../graphql/getEvent";
import Carousel from "./Carousel/Carousel";
import CommentBox from "./CommentBox/CommentBox";
import Comments from "./Comments/Comments";
import Content from "./Content/Content";
import { Wrapper } from "./EventDetailStyles";
import Map from "./Map/Map";

export default props => {
  const id = props.match.params.id.toString();
  return (
    <Query query={gql(getEvent)} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) {
          return "loading....";
        }
        if (error) {
          return message.error("Something went wrong");
        }
        if (!data.getEvent) {
          return <NotFound />;
        }
        const event = data.getEvent;
        console.log(event);
        return (
          <React.Fragment>
            <BackTop />
            <Wrapper>
              <Carousel cover={event.largeCoverUrl} />
              <Content
                startDate={event.startDate}
                title={event.title}
                description={event.description}
                tag={event.tag}
              />
              <CommentBox eventId={id} />
              <Comments comments={event.comments} />
              <Map
                latitude={event.latitude}
                longitude={event.longitude}
                address={event.address}
              />
            </Wrapper>
          </React.Fragment>
        );
      }}
    </Query>
  );
};
