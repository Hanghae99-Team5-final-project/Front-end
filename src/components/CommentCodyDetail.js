import React from "react";

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";
import moment from "moment";
import CommentList from "./CommentList";
import { useHistory } from "react-router-dom";

const DetailCodyComment = (props) => {
  const history = useHistory();
  const is_login = useSelector((state) => state.user.is_login);
  const dispatch = useDispatch();
  const [commentContent, setCommentContent] = React.useState("");

  const commentUser = localStorage.commentUser;
  const createdAt = moment().format("YYYY-MM-DD hh:mm:ss");
  const cmtOnChange = (e) => {
    setCommentContent(e.target.value);
  };

  const writeComment = () => {
    if (!is_login) {
      window.alert("로그인 후 이용 가능합니다!");
      history.replace("/login");
      return;
    }
    if (!commentContent) {
      window.alert("댓글을 입력해주세요!");
      return;
    }
    console.log();

    dispatch(
      commentActions.addCommentCodyFB(
        commentUser,
        commentContent,
        props.codyId,
        createdAt
      )
    );
    setCommentContent("");
  };

  return (
    <React.Fragment>
      <Wrap>
        <Input
          placeholder=""
          onChange={cmtOnChange}
          value={commentContent}
          maxLength="100"
        />
        <Button onClick={writeComment}>등록하기</Button>
      </Wrap>
      <CommentList codyId={props.codyId} />
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
  background-color: black;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  width: 100px;
  margin: 0px 10px;
  cursor: pointer;
  height: 50px;
  :hover {
    opacity: 0.8;
  }
`;
export default DetailCodyComment;
