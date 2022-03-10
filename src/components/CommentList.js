import React, { useEffect } from "react";
import styled from "styled-components";
import CommentItem from "./CommentItem";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentList = (props) => {
  const dispatch = useDispatch();
  const commentData = useSelector((state) => state.comment.list);
  const { post_id } = props;

  useEffect(() => {
    if (!commentData[post_id]) {
      dispatch(commentActions.getCommentFB(post_id));
    }
  }, []);
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
