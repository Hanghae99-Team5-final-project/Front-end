import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import StarRating from "../option/StarRating";
import { actionCreators as postActions } from "../redux/modules/post";

import { useHistory, useParams } from "react-router-dom";
const WatchCodyUpdate = (props) => {
  const codyId = useParams().id;
  const token = localStorage.getItem("token");
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [content, setContent] = useState("");
  // const [files, setImages] = useState([]);
  const [Value, setValue] = useState(0);
  const [images, setImages] = useState();
  const [imageURL, setImageURL] = useState([]);
  const formData = new FormData();

  const changetitle = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const changebrand = (e) => {
    setBrand(e.target.value);
    console.log(e.target.value);
  };

  const changemodel = (e) => {
    setModel(e.target.value);
    console.log(e.target.value);
  };

  const changeContent = (e) => {
    setContent(e.target.value);
    console.log(e.target.value);
  };

  const changeValue = () => {
    setValue("");
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (!title || !brand || !model || !content || !images || !Value) {
      return alert("모든 값을 넣어주셔야 합니다.");
    }

    formData.append("title", title);
    formData.append("brand", brand);
    formData.append("model", model);
    formData.append("content", content);
    formData.append("multipartFile", images);
    formData.append("Value", Value);

    console.log(Value);
    dispatch(
      postActions.editPostDB(
        title,
        brand,
        model,
        content,
        images,
        Value,
        codyId
      )
    );
  };

  const onChange = (e) => {
    if (e.target.files) {
      // useEffect(
      //   (files) => {
      //     if (images.length < 1) return;
      //     const newImageUrl = [];
      //     images.forEach((image) =>
      //       newImageUrl.push(URL.createObjectURL(image))
      //     );
      //     setImageURL(newImageUrl);
      //   },
      //   [images]
      // );

      setImages(e.target.files[0]);
    }
  };

  return (
    <div>
      <WatchCodyWriteBlock>
        <div className="container">
          <div className="flex-box">
            <input type="file" multiple accept="image/*" onChange={onChange} />
            {imageURL.map((imageSrc, idx) => (
              <img src={imageSrc} alt="imageSrc" key={idx} />
            ))}

            <InputGroup className="mb-3" style={{ height: "50px" }}>
              <InputGroup.Text id="basic-addon1" style={{ width: "80px" }}>
                <span style={{ marginLeft: "11px" }}>제목</span>
              </InputGroup.Text>
              <FormControl
                onChange={changetitle}
                value={title}
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3" style={{ height: "50px" }}>
              <InputGroup.Text id="basic-addon1" style={{ width: "80px" }}>
                <span style={{ marginLeft: "7px" }}>브랜드</span>
              </InputGroup.Text>
              <FormControl
                onChange={changebrand}
                value={brand}
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3" style={{ height: "50px" }}>
              <InputGroup.Text id="basic-addon1" style={{ width: "80px" }}>
                <span style={{ marginLeft: "11px" }}>모델</span>
              </InputGroup.Text>
              <FormControl
                onChange={changemodel}
                value={model}
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3" style={{ height: "300px" }}>
              <FormControl
                onChange={changeContent}
                value={content}
                placeholder="내용"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <div className="lb-star">
              <h5 className="lb-text">평점</h5>
              <StarRating value={Value} changeValue={setValue} />
            </div>
            <Button
              onClick={submitHandler}
              className="lb-button"
              variant="light"
            >
              수정하기
            </Button>
          
          </div>
        </div>
      </WatchCodyWriteBlock>
    </div>
  );
};

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
export default WatchCodyUpdate;
