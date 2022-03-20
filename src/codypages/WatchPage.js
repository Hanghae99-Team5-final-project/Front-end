import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { actionsCreators as CategorylistActions } from "../redux/modules/category";
import { Link, useParams } from "react-router-dom";
import { history } from "../redux/configStore";
const WatchPage = () => {
  const dispatch = useDispatch();
  const CategoryList = useSelector(({ category }) => category.categoryList);

  React.useEffect(() => {
    dispatch(CategorylistActions.getCategoryListFB());
  }, []);

  return (
    <CartPageBlock>
      <div className="flex-item">
        {CategoryList?.coupleList?.map((menu, idx) => {
          console.log(menu);
          return (
            <div
              className="flex_box"
              onClick={() => {
                console.log(menu.watchId);
              }}
              key={idx}
            >
              <div onClick={() => history.push(`/watchdetail/${menu.watchId}`)}>
                <img size="15%" src={menu.watchImageUrl} />
              </div>
              <div className="box_name">
                {/* <p style={{}}>{menu.watchBrand}</p> */}
                <p style={{}}>{menu.category}</p>
                <p style={{ color: "red" }}>{menu.lowestPrice}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex-item">
        {CategoryList?.digitalList?.map((menu, idx) => {
          return (
            <div className="flex_box" key={idx}>
              <Link to={`/watchdetail/${menu.watchId}`}>
                <img size="15%" src={menu.watchImageUrl} />
              </Link>
              <div className="box_name">
                {/* <p style={{}}>{menu.watchBrand}</p> */}
                <p style={{}}>{menu.category}</p>
                <p style={{ color: "red" }}>{menu.lowestPrice}</p>
              </div>
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
    line-height: 5;
  }
  img,
  svg {
    vertical-align: middle;
    width: 350px;
    height: 300px;
    padding: 20px;
    margin-left: 210px;
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
  }
  .box_name {
    margin-left: 230px;
    letter-spacing: 5px;
    line-height: 10px;
  }
`;
export default WatchPage;
