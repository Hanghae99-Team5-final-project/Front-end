import React, { useState } from "react";
import styled from "styled-components";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function MyPage() {
  const [update, setUpdate] = useState("");
  const is_token = localStorage.getItem("username");
  const changeUpdate = (e) => {
    setUpdate(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <MyPageBlock>
        <InputGroup className="container" size="lg">
          <InputGroup.Text style={{ width: "150px" }} id="inputGroup-sizing-lg">
            아이디
          </InputGroup.Text>
          <InputGroup.Text style={{ width: "400px" }} id="inputGroup-sizing-lg">
            {is_token}
          </InputGroup.Text>
        </InputGroup>
        <InputGroup className="container" size="lg">
          <InputGroup.Text style={{ width: "150px" }} id="inputGroup-sizing-lg">
            비밀번호
          </InputGroup.Text>
          <InputGroup.Text style={{ width: "400px" }} id="inputGroup-sizing-lg">
            ***********
          </InputGroup.Text>
        </InputGroup>
        <InputGroup className="container" size="lg">
          <InputGroup.Text style={{ width: "150px" }} id="inputGroup-sizing-lg">
            이메일
          </InputGroup.Text>
          <input onChange={changeUpdate} value={update} className="lm-size" />
        </InputGroup>
        <Button className="lm-button" variant="primary">
          수정하기
        </Button>
      </MyPageBlock>
    </div>
  );
}

const MyPageBlock = styled.div`
  .container {
    display: flex;
    margin-top: 100px;
    justify-content: center;
  }
  .lm-size {
    width: 400px;
    border: 1px solid silver;
    border-radius: 5px;
  }
  .lm-button {
    display: block;
    width: 100px;
    margin: 100px auto;
  }
`;
export default MyPage;
