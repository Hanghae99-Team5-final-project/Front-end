import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
function Upload(files) {
  const token = localStorage.getItem("token");
  const [images, setImages] = useState([]);
  const [imageURL, setImageURL] = useState([]);
  let formData = new FormData();

  formData.append("multipartFile", files);
  useEffect(
    (files) => {
      if (images.length < 1) return;
      const newImageUrl = [];
      images.forEach((image) => newImageUrl.push(URL.createObjectURL(image)));
      setImageURL(newImageUrl);

      axios
        .post(
          "http://3.34.134.143:8080/api/cody",
          formData,

          {
            headers: {
              Authorization: token,
              "content-type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
        });
    },
    [images]
  );
  const onChange = (e) => {
    setImages([...e.target.files]);
  };

  return (
    <UploadBlock>
      <input type="file" multiple accept="image/*" onChange={onChange} />
      {imageURL.map((imageSrc, idx) => (
        <img src={imageSrc} alt="imageSrc" key={idx} />
      ))}
    </UploadBlock>
  );
}
const UploadBlock = styled.div``;
export default Upload;
