import React, { useState } from "react";
import styled from "styled-components";
import { setCookie } from "../Cookie";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { actionCreators as postActions } from "../redux/modules/post";
import { useDispatch } from "react-redux";

import CommentDetail from "../components/CommentDetail";
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

  const { id } = useParams();
  const codyId = id;
  console.log(id);

  const token = localStorage.getItem("token");

  React.useEffect(() => {
    console.log("되라 제발");

    console.log("에러에러에러");
    dispatch(postActions.getPostFB(codyId));
  }, []);

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

        <CommentDetail watchId={codyId} />
      </WatchCodyDetailBlock>
    </div>
  );
}

export default WatchCodyDetail;
