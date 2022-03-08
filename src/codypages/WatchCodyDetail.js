import React, { useState } from "react";
import styled from "styled-components";
import { setCookie } from "../Cookie";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useDispatch } from "react-redux";
import CommentItem from "../components/CommentItem";
import moment from "moment";
const WatchCodyDetailBlock = styled.div`
  .lb-review {
  }
  .lb-icons {
    display: inline-flex;
    font-size: 40px;
    color: steelblue;
    cursor: pointer;
  }
`;
function WatchCodyDetail(props) {
  const dispatch = useDispatch();
  const [commentContent, setCommentContent] = useState("");

  const Params = useParams();
  const commentId = Params.commentId;
  const commentUser = localStorage.commentUser;
  const createdAt = moment().format("YYYY-MM-DD hh:mm:ss");

  const changeComment = (e) => {
    setCommentContent(e.target.value);
    console.log(e.target.value);
  };
  const writeComment = () => {
    dispatch(
      commentActions.addCommentFB(
        commentUser,
        commentContent,
        commentId,
        createdAt
      )
    );
    setCommentContent("");
  };
  return (
    <div>
      <WatchCodyDetailBlock>
        <div className="lb-icons">
          <Link to="/watchcodyupdate/:id"></Link>
        </div>
        <InputGroup className="mb-3" style={{ height: "50px" }}>
          <FormControl
            placeholder="1.제목"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3" style={{ height: "200px" }}>
          <FormControl
            placeholder="1.시계 코디 이미지"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3" style={{ height: "160px" }}>
          <FormControl
            placeholder="1.코디 내용"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3" style={{ height: "50px" }}>
          <FormControl
            variant="outlined"
            placeholder="댓글 내용"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={changeComment}
            value={commentContent}
          />
          <Button onClick={writeComment} variant="primary">
            좀 되라
          </Button>
        </InputGroup>
        <CommentItem />
      </WatchCodyDetailBlock>
    </div>
  );
}

export default WatchCodyDetail;
