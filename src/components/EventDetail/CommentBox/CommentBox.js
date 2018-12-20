import gql from "graphql-tag";
import React from "react";
import { Mutation } from "react-apollo";
import { IconContext } from "react-icons";
import { MdSend } from "react-icons/md";
import { getEvent } from "../../../graphql/getEvent";
import { createComment } from "../../../graphql/mutations";
import {
  CommentBox,
  TextArea,
  UserImg,
  Userpic,
  Wrapper
} from "./CommentBoxStyles";

export default class extends React.Component {
  state = {
    comment: ""
  };
  onCommentChange = e => {
    this.setState({ comment: e.target.value });
  };

  render() {
    return (
      <Mutation mutation={gql(createComment)}>
        {(createComment, { loading, error }) => (
          <Wrapper>
            <Userpic>
              <UserImg src="https://images.unsplash.com/photo-1529749549222-fd7475f997a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f1afa6f738d671bce6148a0ee151a576&auto=format&fit=crop&w=500&q=60" />
            </Userpic>
            <CommentBox>
              <TextArea
                value={this.state.comment}
                onChange={this.onCommentChange}
              />
              {this.state.comment.length ? (
                <IconContext.Provider value={{ size: "4em" }}>
                  <span style={{ cursor: "pointer" }}>
                    <MdSend
                      onClick={async () => {
                        const text = this.state.comment;
                        await createComment({
                          variables: {
                            input: {
                              text,
                              commentEventId: this.props.eventId,
                              commentUserId:
                                "88b52136-4cba-463a-b457-e8e22b6d52c7"
                            }
                          },
                          refetchQueries: [
                            {
                              query: gql(getEvent),
                              variables: { id: this.props.eventId }
                            }
                          ]
                        });
                        await this.setState({ comment: "" });
                      }}
                    />
                  </span>
                </IconContext.Provider>
              ) : null}
            </CommentBox>
          </Wrapper>
        )}
      </Mutation>
    );
  }
}
