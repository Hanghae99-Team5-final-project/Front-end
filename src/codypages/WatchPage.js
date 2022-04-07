import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { actionsCreators as CategorylistActions } from "../redux/modules/category";
import { Link } from "react-router-dom";
import WatchCard from "../components/WatchCard";
import "../App.css";

const WatchPage = () => {
  React.useEffect(() => {
    dispatch(CategorylistActions.getCategoryListFB());
  }, []);

  const dispatch = useDispatch();
  const CategoryList = useSelector(({ category }) => category.categoryList);

  return (
    <div className="wrap">
      <div className="center">
        <WatchPageWrap>
          <Card>
            {CategoryList &&
              CategoryList.coupleList.map((data, i) => {
                return (
                  <a href={`/watchdetail/${data.watchId}`} key={i}>
                    <WatchCard data={data} />
                  </a>
                );
              })}
            {CategoryList &&
              CategoryList.digitalList.map((data, i) => {
                return (
                  <Link to={`/watchdetail/${data.watchId}`} key={i}>
                    <WatchCard data={data} />
                  </Link>
                );
              })}
          </Card>
        </WatchPageWrap>
      </div>
    </div>
  );
};

const WatchPageWrap = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 10rem;
  margin-bottom: 5rem;
`;

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
`;

export default WatchPage;
