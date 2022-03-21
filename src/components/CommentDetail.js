import React, { useEffect } from "react";

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useParams } from "react-router-dom";
import moment from "moment";

const DetailComment = (props) => {
  const dispatch = useDispatch();
  const [commentContent, setCommentContent] = React.useState("");

  const params = useParams().id;
  const commentId = params.watchId;

  const commentUser = localStorage.commentUser;
  const createdAt = moment().format("YYYY-MM-DD hh:mm:ss");
  const cmtOnChange = (e) => {
    setCommentContent(e.target.value);
  };
  const token = localStorage.getItem("token");

  const writeComment = () => {
    console.log(commentId);

    dispatch(
      commentActions.addCommentWatchFB(
        commentUser,
        commentContent,
        commentId,
        createdAt
      )
    );
    setCommentContent("");
  };

  return (
    <React.Fragment>
      <Wrap>
        <Input
          placeholder="좀 되라"
          onChange={cmtOnChange}
          value={commentContent}
          maxLength="100"
        />
        <Button onClick={writeComment}>제발 좀 되라</Button>
      </Wrap>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  display: flex;
  margin: 0px 0px 20px 0px;
`;

const Input = styled.input`
  flex: auto;
  width: 60%;
  padding: 12px 10px;
  border-radius: 4px;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: lightgreen;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  width: 100px;
  margin: 0px 10px;
  cursor: pointer;

  transition: 1.5s;
  &:hover {
    background-color: black;
  }
`;
export default DetailComment;
