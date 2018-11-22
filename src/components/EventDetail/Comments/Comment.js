import React from "react";
import {
  CommentBody,
  CommentCard,
  CommentDetails,
  CommentHeader,
  CommentText,
  ContentWrapper,
  Time,
  UserAvatar,
  UserName
} from "./CommentsStyles";

export default () => (
  <React.Fragment>
    <ContentWrapper>
      <CommentCard>
        <CommentHeader>
          <UserAvatar src="https://images.unsplash.com/photo-1521310192545-4ac7951413f0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a8d0b036e510bacb2baa495a6e016ef4&auto=format&fit=crop&w=500&q=60" />
          <CommentDetails>
            <UserName>Richard Hall</UserName>
            <Time>53 min ago</Time>
          </CommentDetails>
        </CommentHeader>
        <CommentBody>
          <CommentText>
            Lorem ipsum dolor sit amet, insolens postulant vulputate usu id, id
            ius commodo dolorum, ad vix simul decore ocurreret. Dico dignissim
            vel an. Ad pro eruditi pertinax adipiscing, vero choro consectetuer
            ei vim. Ne ubique constituam qui, pro in graeco evertitur
            deseruisse, dicunt commodo propriae mei ex. Mea nisl persius
            oportere ad
          </CommentText>
        </CommentBody>
      </CommentCard>
    </ContentWrapper>
  </React.Fragment>
);
