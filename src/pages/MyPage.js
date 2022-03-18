import React, { useState } from "react";
import styled from "styled-components";
import { InputGroup, FormControl, Button } from "react-bootstrap";
// import { actionsCreators as editEmailActions } from "../redux/modules/user";
import { useDispatch, useSelector } from "react-redux";

function MyPage(props) {
  const dispatch = useDispatch();
  const [is_first, setIsFirst] = useState(true);
  const [update, setUpdate] = useState("");
  const [is_edit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState("");
  const editEmail = useSelector(({ user }) => user.user);
  const changeUpdate = (e) => {
    setUpdate(e.target.value);
    console.log(e.target.value);
  };

  const edEmail = () => {
    if (!editValue) {
      window.alert("댓글을 입력해주세요!");
      return;
    }
    // dispatch(editEmailActions.editEmailFB(props.email, editValue));
    setEditValue("");
    setIsEdit(false);
  };
  const editChange = () => {
    setIsFirst(false);
    setIsEdit(true);
  };
  if (is_edit) {
    return (
      <div>
        <input
          onChange={(e) => {
            setEditValue(e.target.value);
          }}
          value={editValue}
        />
        <Button width="80px" _onClick={edEmail}>
          수정
        </Button>
      </div>
    );
  }

  return (
    <div>
      <MyPageBlock>
        <InputGroup className="container" size="lg">
          <InputGroup.Text style={{ width: "150px" }} id="inputGroup-sizing-lg">
            아이디
          </InputGroup.Text>
          <InputGroup.Text style={{ width: "400px" }} id="inputGroup-sizing-lg">
            아이디 고정
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
        <Button onClick={editChange} className="lm-button" variant="primary">
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
