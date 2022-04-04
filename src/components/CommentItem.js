import React, { useState } from "react";
import styled from "styled-components";
import { Text, Input } from "../elements";
import { FaTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { actionCreators as commentActions } from "../redux/modules/comment";
import { useParams } from "react-router-dom";

const CommentItem = (props) => {
  const watchId = useParams().id;
  const dispatch = useDispatch();
  const { commentUser, commentContent, commentId, createdAt } = props;

  const [edit_comment, setEditComment] = useState("");
  const [open_edit, setOpenEdit] = useState(false);
  const [comment, setComment] = useState("");
  const changeEditComment = (e) => {
    setEditComment(e.target.value);
    console.log(e.target.value);
  };
  const clickEditComment = () => {
    console.log(edit_comment);
    dispatch(
      commentActions.editCommentDB(props.commentId, watchId, edit_comment)
    );
    setOpenEdit(false);
  };
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
        <Text size="16px" margin="5px 10px" padding="0">
          {commentId}
        </Text>

        <div mTop="8px">
          {open_edit && (
            <>
              <Input
                type="text"
                placeholder="댓글을 입력해주세요"
                _onChange={changeEditComment}
                value={edit_comment}
              />
              <FaPencilAlt role="button" onClick={clickEditComment}>
                수정
              </FaPencilAlt>
            </>
          )}

          <FaPencilAlt
            role="button"
            onClick={() => {
              setOpenEdit(true);
              setComment("");
            }}
          >
            취소
          </FaPencilAlt>
        </div>

        <DeleteBtn
          onClick={() => {
            dispatch(commentActions.deleteCommentFB(props.commentId));
          }}
        >
          <FaTrashAlt role="button" tabIndex="0" />
        </DeleteBtn>
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
  .title {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 3.5rem;
  }

  .btn-wrap {
    position: absolute;
    top: 0.5rem;
    right: 0;

    button {
      background-color: transparent;
      border: none;

      img {
        width: 2.5rem;
        height: 2.5rem;
        margin-right: 2rem;
      }
    }
  }

  .description-area {
    margin-top: 18rem;
    margin-bottom: 13.5rem;
    position: relative;

    .title {
      padding-top: 8rem;
    }

    img {
      width: 60rem;
      height: 50rem;
      margin-bottom: 4rem;
      border-radius: 1rem;
    }

    .brand {
      font-size: 1.4rem;
      font-weight: bold;
      margin-bottom: 0.6rem;
    }

    .model {
      font-size: 1.6rem;
      margin-bottom: 4.2rem;
    }

    .content {
      font-size: 1.6rem;
    }
  }

  .content-area {
    input {
      background: #f2f2f2;
      margin-bottom: 2.4rem;
    }

    .rating {
      display: flex;
      justify-content: space-between;
      margin-bottom: 3.5rem;

      .star {
        font-size: 1.6rem;
      }

      button {
        font-size: 1.4rem;
        opacity: 0.8;
        width: 8rem;
        height: 3rem;
      }
    }
  }

  .comment-wrap {
    max-width: 106rem;
    margin: auto;
    position: relative;
    margin-bottom: 26rem;

    .comment-area {
      display: flex;
      position: relative;
      padding-top: 1rem;
      padding-bottom: 1rem;
      padding-left: 3rem;
      border-bottom: 1px solid #bdbdbd;

      .info {
        width: 10rem;
        .user-name {
          font-size: 1.6rem;
          margin-bottom: 0.5rem;
        }

        .create-at {
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }

      .comment {
        font-size: 1.6rem;
      }
    }
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
