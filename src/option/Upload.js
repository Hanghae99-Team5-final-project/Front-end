import React, { useState } from "react";
import Dropzone from "react-dropzone";
import styled from "styled-components";
import { FiUpload } from "react-icons/fi";
import axios from "axios";

const token = localStorage.getItem("token");
const Upload = (props) => {
  const [images, setImages] = useState([]);

  const dropHandler = (files) => {
    let formData = new FormData();

    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);

    axios
      .post(
        "http://13.124.237.131:8080/api/cody",
        formData,
        config,
        {},
        {
          headers: { Authorization: token },
        }
      )

      .then((res) => {
        if (res.data.success) {
          console.log(res.data);
          setImages([...images, res.data.filePath]);
          props.refreshFunction(...images, res.data.filePath);
        } else {
          alert("파일을 저장하는데 실패했습니다.");
        }
      });
  };

  const deleteHandler = (image) => {
    const currentIndex = images.indexOf(image);

    let newImages = [...images];
    newImages.splice(currentIndex, 1);
    setImages(newImages);
    props.refreshFunction(newImages);
  };

  return (
    <UploadBlock>
      <Dropzone onDrop={dropHandler}>
        {({ getRootProps, getInputProps }) => (
          <div className="Upload">
            <div {...getRootProps()}>
              <input {...getInputProps()} />

              <FiUpload />
            </div>
          </div>
        )}
      </Dropzone>

      {/* <div
        style={{
          display: "flex",
          width: "350px",
          height: "240px",
          overflow: "scroll",
        }}
      ></div> */}
      {images.map((image, index) => {
        <div onClick={() => deleteHandler(image)} key={index}>
          <img
            style={{ minWidth: "300px", width: "300px", height: "240px" }}
            src={`http://localhost:3000/${image}`}
          />
        </div>;
      })}
    </UploadBlock>
  );
};

const UploadBlock = styled.div`
  .Upload {
    width: 300px;
    height: 240px;
    border: 1px solid lightgray;
    margin: 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
  }
`;
export default Upload;
