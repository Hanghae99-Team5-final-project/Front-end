import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

function Upload(props) {
  const [images, setImages] = useState([]);
  const [imageURL, setImageURL] = useState([]);

  useEffect(
    (files) => {
      if (images.length < 1) return;
      const newImageUrl = [];
      images.forEach((image) => newImageUrl.push(URL.createObjectURL(image)));
      setImageURL(newImageUrl);
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
