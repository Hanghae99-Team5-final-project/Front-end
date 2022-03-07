import React from "react";
import styled from "styled-components";
import { setCookie } from "../Cookie";
import { InputGroup, FormControl } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
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
function WatchCodyDetail() {
  return (
    <div>
      <WatchCodyDetailBlock>
        <div className="lb-icons">
          <Link to="/watchcodyupdate/:id">
            <FaPencilAlt role="button" tabIndex="0" />
          </Link>
          <FaTrashAlt role="button" tabIndex="0" />
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

        <InputGroup className="mb-3" style={{ height: "200px" }}>
          <FormControl
            placeholder="댓글 내용"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <div className="lb-review">
          <InputGroup className="mb-3" style={{ height: "60px", width: "60%" }}>
            <FormControl
              placeholder="댓글"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <div className="lb-icons">
              <FaPencilAlt role="button" tabIndex="0" />
              <FaTrashAlt role="button" tabIndex="0" />
            </div>
          </InputGroup>

          <InputGroup className="mb-3" style={{ height: "60px", width: "60%" }}>
            <FormControl
              placeholder="댓글"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <div className="lb-icons">
              <FaPencilAlt role="button" tabIndex="0" />
              <FaTrashAlt role="button" tabIndex="0" />
            </div>
          </InputGroup>
        </div>
      </WatchCodyDetailBlock>
    </div>
  );
}

export default WatchCodyDetail;
