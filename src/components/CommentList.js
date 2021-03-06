import React, { useEffect } from "react";
import styled from "styled-components";
import CommentItem from "./CommentItem";
import { useSelector } from "react-redux";

const CommentList = () => {
  const commentData = useSelector((state) => state.comment.list);

  return (
    <React.Fragment>
      <Wrap>
        {commentData?.map((p, i) => {
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
