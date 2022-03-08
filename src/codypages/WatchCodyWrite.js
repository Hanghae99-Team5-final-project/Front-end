import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import StarRating from "../option/StarRating";

const WatchCodyWriteBlock = styled.div`
  .container {
  }
  .flex-box {
    display: flex;
    width: 80%;
    margin: auto;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
  .lb-text {
    display: flex;
    font-size: 35px;

    padding: 10px 30px;
    border-radius: 10px;
    background-color: rgb(233, 236, 239);
    margin-inline-end: auto;
  }
  .lb-button {
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #e0e0e0;
    width: 30%;
    height: 7vh;
    margin-top: 50px;
    cursor: pointer;
    :hover {
      opacity: 0.3;
      transition: all 500ms;
    }
  }
  .lb-star {
    display: flex;
    margin-inline-end: auto;
  }
`;
const WatchCodyWrite = (props) => {
  const [contents, setContents] = useState("");

  const changeContents = (e) => {
    setContents(e.target.value);

    console.log(e.target.value);
  };

  console.log(contents);
  return (
    <div>
      <WatchCodyWriteBlock>
        <div className="container">
          <div className="flex-box">
            <InputGroup className="mb-3" style={{ height: "50px" }}>
              <InputGroup.Text id="basic-addon1" style={{ width: "80px" }}>
                <span style={{ marginLeft: "11px" }}>제목</span>
              </InputGroup.Text>
              <FormControl
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3" style={{ height: "50px" }}>
              <InputGroup.Text id="basic-addon1" style={{ width: "80px" }}>
                <span style={{ marginLeft: "7px" }}>브랜드</span>
              </InputGroup.Text>
              <FormControl
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3" style={{ height: "50px" }}>
              <InputGroup.Text id="basic-addon1" style={{ width: "80px" }}>
                <span style={{ marginLeft: "11px" }}>모델</span>
              </InputGroup.Text>
              <FormControl
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3" style={{ height: "300px" }}>
              <FormControl
                placeholder="내용"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <Form.Group
              style={{ width: "100%" }}
              controlId="formFile"
              className="mb-3"
            >
              <Form.Control type="file" />
            </Form.Group>
            <div className="lb-star">
              <h5 className="lb-text">평점 </h5>
              <StarRating />
            </div>
            <Button className="lb-button" variant="light">
              등록하기
            </Button>
          </div>
        </div>
      </WatchCodyWriteBlock>
    </div>
  );
};

export default WatchCodyWrite;
