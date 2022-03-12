import React, { useState } from "react";

import styled from "styled-components";

const CartPage = () => {
  const [Cart, setCart] = useState([
    {
      watchId: 1,
      watchImage:
        "https://img.khan.co.kr/news/2016/02/21/l_2016022101002518300196013.jpg",
      watchBrand: "문페이즈",
      watchModel: "G-shock250",
      lowestPrice: "16억",
    },
    {
      watchId: 1,
      watchImage:
        "https://img.khan.co.kr/news/2016/02/21/l_2016022101002518300196013.jpg",
      watchBrand: "문페이즈",
      watchModel: "G-shock250",
      lowestPrice: "16억",
    },
    {
      watchId: 1,
      watchImage:
        "https://img.khan.co.kr/news/2016/02/21/l_2016022101002518300196013.jpg",
      watchBrand: "문페이즈",
      watchModel: "G-shock250",
      lowestPrice: "16억",
    },
    {
      watchId: 1,
      watchImage:
        "https://img.khan.co.kr/news/2016/02/21/l_2016022101002518300196013.jpg",
      watchBrand: "문페이즈",
      watchModel: "G-shock250",
      lowestPrice: "16억",
    },
    {
      watchId: 1,
      watchImage:
        "https://img.khan.co.kr/news/2016/02/21/l_2016022101002518300196013.jpg",
      watchBrand: "문페이즈",
      watchModel: "G-shock250",
      lowestPrice: "16억",
    },
    {
      watchId: 1,
      watchImage:
        "https://img.khan.co.kr/news/2016/02/21/l_2016022101002518300196013.jpg",
      watchBrand: "문페이즈",
      watchModel: "G-shock250",
      lowestPrice: "16억",
    },
    {
      watchId: 1,
      watchImage:
        "https://img.khan.co.kr/news/2016/02/21/l_2016022101002518300196013.jpg",
      watchBrand: "문페이즈",
      watchModel: "G-shock250",
      lowestPrice: "16억",
    },
    {
      watchId: 1,
      watchImage:
        "https://img.khan.co.kr/news/2016/02/21/l_2016022101002518300196013.jpg",
      watchBrand: "문페이즈",
      watchModel: "G-shock250",
      lowestPrice: "16억",
    },
    {
      watchId: 1,
      watchImage:
        "https://img.khan.co.kr/news/2016/02/21/l_2016022101002518300196013.jpg",
      watchBrand: "문페이즈",
      watchModel: "G-shock250",
      lowestPrice: "16억",
    },
  ]);
  return (
    <CartPageBlock>
      <div className="flex-item">
        {Cart.map((menu, idx) => {
          return (
            <div className="flex_box" key={idx}>
              <div className="box_hover">
                <img size="15%" src={menu.watchImage} />
              </div>
              <p className="artist_name">{menu.codyContent}</p>
            </div>
          );
        })}
      </div>
    </CartPageBlock>
  );
};
const CartPageBlock = styled.div`
  .flex-item {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 60vh;
    margin-top: 100px;
    align-items: center;
    justify-content: space-around;
    line-height: 5;
  }
`;
export default CartPage;
