import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
function WatchCodyWrite() {
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [c, setC] = useState();
  const [d, setD] = useState();
  const [e, setE] = useState();
  const [myImage, setMyImage] = useState([]);

  let list;
  const addImage = (e) => {
    list = e.target.files;

    const URLlist = [...myImage];
    for (let i = 0; i < list.length; i += 1) {
      const showImage = URL.createObjectURL(list[i]);

      URLlist.push(showImage);
      list.push({ list });
    }
    setMyImage(URLlist);
  };
  const onButton = (e) => {
    setA(e.target.value);
  };
  const onButton2 = (e) => {
    setB(e.target.value);
  };
  const onButton3 = (e) => {
    setC(e.target.value);
  };
  const onButton4 = (e) => {
    setD(e.target.value);
  };
  const onButton5 = (e) => {
    setE(e.target.value);
  };

  const subMit = (e) => {
    e.preventDefault();
    console.log(list);
    console.log(a, b, c, d, e);
  };

  // const formData = new FormData();

  // formData.append("codyTitle");

  // axios.post("http://13.124.217.167:8080/api/cody", formData, {}, {}.then());

  return (
    <>
      <WatchCodyWriteBlock>
        <div className="container-test">
          <div className="flex-box-test">
            <label htmlFor="input-file" onChange={addImage}>
              <input
                style={{ marginTop: "20px" }}
                type="file"
                accept="image/*"
                multiple="multiple"
                id="input-file"
              />
            </label>
            {/* 특정 미디어 유형의 모든 파일을 사용할 수 있도록 하려면 accept="image/*" */}
            <input type="text" value={a} onChange={onButton} />
            <input type="text" value={b} onChange={onButton2} />
            <input type="text" value={c} onChange={onButton3} />
            <input type="text" value={d} onChange={onButton4} />
            <input type="text" value={e} onChange={onButton5} />
          </div>
          <button type="submit" onClick={subMit}>
            등록하기
          </button>
        </div>
      </WatchCodyWriteBlock>
    </>
  );
}

const WatchCodyWriteBlock = styled.div``;
export default WatchCodyWrite;
