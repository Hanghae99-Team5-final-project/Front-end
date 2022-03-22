import React, { useEffect } from "react";
import styled from "styled-components";
import CommentItem from "./CommentItem";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { actionCreators as postActions } from "../redux/modules/post";
const CommentList = (props) => {
  const dispatch = useDispatch();
  const commentData = useSelector((state) => state.comment.list);
  const { watchId } = props;

  return (
    <React.Fragment>
      <Wrap>
        {commentData.map((p, i) => {
          return <CommentItem key={i} {...p}></CommentItem>;
        })}
      </Wrap>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export default CommentList;
