// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import StarRating from "../option/StarRating";
// import { actionCreators as postActions } from "../redux/modules/post";
// import Upload from "../option/Upload";
// import { useHistory } from "react-router-dom";
// const WatchCodyWrite = (props) => {
//   const token = localStorage.getItem("token");
//   const history = useHistory();
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState("");
//   const [brand, setBrand] = useState("");
//   const [model, setModel] = useState("");
//   const [content, setContent] = useState("");
//   const [files, setImages] = useState([]);
//   const [Value, setValue] = useState(0);

//   const formData = new FormData();

//   const changetitle = (e) => {
//     setTitle(e.target.value);
//     console.log(e.target.value);
//   };

//   const changebrand = (e) => {
//     setBrand(e.target.value);
//     console.log(e.target.value);
//   };

//   const changemodel = (e) => {
//     setModel(e.target.value);
//     console.log(e.target.value);
//   };

//   const changeContent = (e) => {
//     setContent(e.target.value);
//     console.log(e.target.value);
//   };

//   const updateImages = (newImages) => {
//     setImages(newImages);
//   };

//   const changeValue = () => {
//     setValue("");
//   };
//   const submitHandler = (e) => {
//     e.preventDefault();

//     if (!title || !brand || !model || !content || !files || !Value) {
//       return alert("모든 값을 넣어주셔야 합니다.");
//     }

//     formData.append("title", title);
//     formData.append("brand", brand);
//     formData.append("model", model);
//     formData.append("content", content);
//     formData.append("multipartFile", files);
//     formData.append("Value", Value);

//     console.log(Value);
//     dispatch(postActions.addPostFB(title, brand, model, content, files, Value));
//   };
//   return (
//     <div>
//       <WatchCodyWriteBlock>
//         <div className="container">
//           <div className="flex-box">
//             <Upload />

//             <InputGroup className="mb-3" style={{ height: "50px" }}>
//               <InputGroup.Text id="basic-addon1" style={{ width: "80px" }}>
//                 <span style={{ marginLeft: "11px" }}>제목</span>
//               </InputGroup.Text>
//               <FormControl
//                 onChange={changetitle}
//                 value={title}
//                 aria-label="Username"
//                 aria-describedby="basic-addon1"
//               />
//             </InputGroup>

//             <InputGroup className="mb-3" style={{ height: "50px" }}>
//               <InputGroup.Text id="basic-addon1" style={{ width: "80px" }}>
//                 <span style={{ marginLeft: "7px" }}>브랜드</span>
//               </InputGroup.Text>
//               <FormControl
//                 onChange={changebrand}
//                 value={brand}
//                 aria-label="Username"
//                 aria-describedby="basic-addon1"
//               />
//             </InputGroup>

//             <InputGroup className="mb-3" style={{ height: "50px" }}>
//               <InputGroup.Text id="basic-addon1" style={{ width: "80px" }}>
//                 <span style={{ marginLeft: "11px" }}>모델</span>
//               </InputGroup.Text>
//               <FormControl
//                 onChange={changemodel}
//                 value={model}
//                 aria-label="Username"
//                 aria-describedby="basic-addon1"
//               />
//             </InputGroup>

//             <InputGroup className="mb-3" style={{ height: "300px" }}>
//               <FormControl
//                 onChange={changeContent}
//                 value={content}
//                 placeholder="내용"
//                 aria-label="Username"
//                 aria-describedby="basic-addon1"
//               />
//             </InputGroup>

//             <div className="lb-star">
//               <h5 className="lb-text">평점</h5>
//               <StarRating value={Value} changeValue={setValue} />
//             </div>
//             <Button
//               onClick={submitHandler}
//               className="lb-button"
//               variant="light"
//             >
//               등록하기
//             </Button>
//           </div>
//         </div>
//         <div className="container-test">
//           <div className="flex-box-test">
//             <input type="text" />
//             <input type="text" />
//             <input type="text" />
//             <input type="text" />
//             <input type="text" />
//             <input type="text" />
//           </div>
//           <button type="text">등록하기</button>
//         </div>
//       </WatchCodyWriteBlock>
//     </div>
//   );
// };

// const WatchCodyWriteBlock = styled.div`
//   .container {
//   }
//   .flex-box {
//     display: flex;
//     width: 80%;
//     margin: auto;
//     flex-direction: column;
//     height: 100vh;
//     align-items: center;
//     justify-content: center;
//   }
//   .lb-text {
//     display: flex;
//     font-size: 35px;

//     padding: 10px 30px;
//     border-radius: 10px;
//     background-color: rgb(233, 236, 239);
//     margin-inline-end: auto;
//   }
//   .lb-button {
//     padding: 10px 20px;
//     border-radius: 10px;
//     background-color: #e0e0e0;
//     width: 30%;
//     height: 7vh;
//     margin-top: 50px;
//     cursor: pointer;
//     :hover {
//       opacity: 0.3;
//       transition: all 500ms;
//     }
//   }
//   .lb-star {
//     display: flex;
//     margin-inline-end: auto;
//   }
//   .container-test {
//     display: flex;
//     flex-direction: column;
//     width: 500px;
//     height: 300px;
//     margin: auto;
//   }
//   .flex-box {
//     width: 300px;
//     height: 200px;
//   }
// `;
// export default WatchCodyWrite;
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
function WatchCodyWrite() {
  const [imgFile, setImgFile] = useState("");

  const handleChangeFile = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    // reader 가 성공적으로 파일을 읽었을때 , 트리거되는 이벤트핸들러
    // 내부에 이미지 프리뷰 로직
    return new Promise((resolve) => {
      reader.onload = () => {
        setImgFile(reader.result);
        resolve();
      };
    });
  };

  const [a, setA] = useState();
  const [b, setB] = useState();
  const [c, setC] = useState();
  const [d, setD] = useState();
  const [e, setE] = useState();

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
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                handleChangeFile(e.target.flies[0]);
              }}
              style={{ marginTop: "30px" }}
            />
            <div className="flex-box-test">
              <div> {imgFile && <img src={imgFile} alt="preview-img" />}</div>
            </div>
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

const WatchCodyWriteBlock = styled.div`
  .flex-box-test {
    background-color: grey;
    width: 150px;
    height: 150px;
  }
`;
export default WatchCodyWrite;
