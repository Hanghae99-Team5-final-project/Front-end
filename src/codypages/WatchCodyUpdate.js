import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import StarRating from "../option/StarRating";
import { actionCreators as postActions } from "../redux/modules/post";
import { useHistory, useParams } from "react-router-dom";

import "../App.css";

const WatchCodyUpdate = (props) => {
  const codyId = useParams().id;
  const dispatch = useDispatch();

  const is_login = useSelector((state) => state.user.is_login);
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [content, setContent] = useState("");
  const [Value, setValue] = useState(0);
  const [images, setImages] = useState();
  const [imageURL, setImageURL] = useState([]);
  const formData = new FormData();

  const changetitle = (e) => {
    if (!is_login) {
      window.alert("로그인 후 이용 가능합니다!");
      history.replace("/login");
      return;
    }
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
      setImages(e.target.files[0]);
    }
  };

  return (
    <div className="wrap">
      <div className="center">
        <WatchCodyWriteWrap>
          <div className="input-wrap">
            <label className="input-title">제목</label>
            <input type="text" onChange={changetitle} value={title} />
          </div>
          <div className="input-wrap">
            <label className="input-title">시계 브랜드</label>
            <input type="text" onChange={changebrand} value={brand} />
          </div>
          <div className="input-wrap">
            <label className="input-title">시계 모델</label>
            <input type="text" onChange={changemodel} value={model} />
          </div>

          <textarea
            onChange={changeContent}
            value={content}
            placeholder="내용"
          />

          <div className="input-wrap">
            <label className="input-title file" htmlFor="img">
              이미지 첨부
            </label>
            <input
              type="file"
              id="img"
              className="file-input"
              onChange={onChange}
            />
            <span className="upload">123</span>
          </div>

          <div className="input-wrap">
            <label className="input-title fill">평점</label>
            <StarRating value={Value} changeValue={setValue} />
          </div>

          <div className="btn-wrap">
            <button type="button" className="short-btn" onClick={submitHandler}>
              수정하기
            </button>
          </div>
        </WatchCodyWriteWrap>
      </div>
    </div>
  );
};

const WatchCodyWriteWrap = styled.div`
  width: 100%;
  margin-top: 23rem;

  input {
    background: #f2f2f2;
  }

  .fill {
    background-color: #555c79;
    color: #fff;
    margin-bottom: 10rem;
  }

  .input-wrap {
    display: flex;
    align-items: center;
    height: 5rem;
    margin-bottom: 2.5rem;

    .input-title {
      width: 100%;
      max-width: 14rem;
      margin: 0;
      margin-right: 3rem;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .file {
      cursor: pointer;
      background: #555c79;
      color: #fff;
      font-weight: bold;
    }

    .file-input {
      display: none;
    }

    .upload {
      height: 5rem;
      background: #f2f2f2;
      width: 100%;
      display: flex;
      align-items: center;
    }
  }

  textarea {
    resize: none;
    width: 100%;
    height: 50rem;
    margin-top: 3rem;
    margin-bottom: 6rem;
    background-color: #f2f2f2;
  }

  .btn-wrap {
    text-align: center;
    margin-bottom: 17rem;
  }
`;

export default WatchCodyUpdate;
