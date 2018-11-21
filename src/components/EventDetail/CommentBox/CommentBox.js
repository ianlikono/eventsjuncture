import React from "react";
import { IconContext } from "react-icons";
import { MdSend } from "react-icons/md";
import {
  CommentBox,
  TextArea,
  UserImg,
  Userpic,
  Wrapper
} from "./CommentBoxStyles";

export default () => (
  <Wrapper>
    <Userpic>
      <UserImg src="https://images.unsplash.com/photo-1529749549222-fd7475f997a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f1afa6f738d671bce6148a0ee151a576&auto=format&fit=crop&w=500&q=60" />
    </Userpic>
    <CommentBox>
      <TextArea />
      <IconContext.Provider value={{ size: "4em" }}>
        <MdSend />
      </IconContext.Provider>
    </CommentBox>
  </Wrapper>
);
