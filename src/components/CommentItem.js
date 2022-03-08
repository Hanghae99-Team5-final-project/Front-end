import React from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Text } from "../elements";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentItem = (props) => {
  const dispatch = useDispatch();
  const { commentUser, commentContent, commentId, createdAt } = props;
  const IdName = localStorage.getItem("commentUser");

  return (
    <React.Fragment>
      <Box>
        <span>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/jaemagazine-45854.appspot.com/o/image%2FJULhtsuBmabuNrbQ5Vv6ZLivSUB3_1644407428385?alt=media&token=5cd591a8-4369-4c15-8865-2a5dc67e17cc"
            alt="프로필"
          />
        </span>
        <Text size="16px" margin="5px" padding="0" bold>
          {commentUser}
        </Text>
        <Text size="16px" margin="5px 10px" padding="0">
          {commentContent}
        </Text>
        <Text size="16px" margin="5px 10px" padding="0">
          {createdAt}
        </Text>
        {commentUser === IdName && (
          <DeleteBtn
            onClick={() => {
              dispatch(commentActions.deleteCommentFB(commentId));
            }}
          >
            <FaTrashAlt role="button" tabIndex="0" />
          </DeleteBtn>
        )}
      </Box>
    </React.Fragment>
  );
};

const Box = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;

  span {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-top: 9px;
    border-radius: 100%;
    overflow: hidden;

    & + p {
      flex-shrink: 0;
    }
  }
  img {
    object-position: 50% 10%;
  }
`;
const DeleteBtn = styled.button`
  flex-shrink: 0;
  width: 25px;
  height: 25px;
  margin-top: 5px;
  margin-left: auto;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default CommentItem;
