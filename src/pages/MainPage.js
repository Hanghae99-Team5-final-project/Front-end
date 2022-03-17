import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import { setCookie } from "../Cookie";
// import logo_design from "../design/스프링워치-로고1.png";
import { useDispatch, useSelector } from "react-redux";
import { actionsCreators as MainlistActions } from "../redux/modules/mainpage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainPageBlock = styled.div`
  /* .Carousel.Item,
  img {
    height: 350px;
  } */
  .title1 {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
  .title2 {
    display: flex;
    justify-content: center;
  }
  .title3 {
    display: flex;
    justify-content: center;
  }
  .position_logo {
    margin-right: 100px;
    z-index: 0;
  }
  .flex-item {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    height: 60vh;
    margin-top: 50px;
    align-items: center;
    justify-content: space-around;
    line-height: 1;
    margin: auto;
  }
`;

const Logo = styled.div`
  background-size: cover;
  border-radius: 10px;

  width: 300px;
  height: 250px;
`;

function MainPage() {
  const dispatch = useDispatch();
  const MainList = useSelector(({ mainpage }) => mainpage.bestList);

  React.useEffect(() => {
    dispatch(MainlistActions.getBestListFB());
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <MainPageBlock>
      <Carousel fade>
        <Carousel.Item className="slide">
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8VZmJdXyTaI07iT54o65wD5HBJ0rWEtjzA&usqp=CAU"
            size="150px"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS1Xi7Kx557AO08VDIJg583D6SnAovlkAj6Q&usqp=CAU"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1HxQuKGawlxROpDKeR6ngYSmcT-tIlzWHKg&usqp=CAU"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* <Logo className="position_logo"> */}

      <h1 className="title1">인기 상품</h1>
      <div className="flex-item">
        {MainList?.bestList?.map((list, idx) => {
          return (
            <div className="flex_box" key={idx}>
              <img size="15%" src={list.watchImageUrl} />

              {/* <p className="artist_name">{list.watchBrand}</p> */}
              <p className="artist_name">{list.watchModel}</p>
              <p className="artist_name">{list.lowestPrice}</p>
              <p className="artist_name">{list.category}</p>
            </div>
          );
        })}
      </div>

      <h1 className="title2"> 커플 </h1>
      <div className="flex-item">
        {MainList?.coupleList?.map((list, idx) => {
          return (
            <div className="flex_box" key={idx}>
              <img size="15%" src={list.watchImageUrl} />

              {/* <p className="artist_name">{list.watchBrand}</p> */}
              <p className="artist_name">{list.watchModel}</p>
              <p className="artist_name">{list.lowestPrice}</p>
              <p className="artist_name">{list.category}</p>
            </div>
          );
        })}
      </div>

      <h1 className="title3">시계 코디</h1>
      <div className="flex-item">
        {MainList?.codyList?.map((list, idx) => {
          return (
            <div className="flex_box" key={idx}>
              <img size="15%" src={list.watchImageUrl} />

              {/* <p className="artist_name">{list.watchBrand}</p> */}
              <p className="artist_name">{list.watchModel}</p>
              <p className="artist_name">{list.lowestPrice}</p>
              <p className="artist_name">{list.category}</p>
            </div>
          );
        })}
      </div>
      {/* </Logo> */}
      <button style={{ margin: "50px 50px" }}>
        <Link to="/login">로그인 페이지</Link>
      </button>

      <button style={{ margin: "50px 50px" }}>
        <Link to="/signup">회원가입 페이지</Link>
      </button>

      <button style={{ margin: "50px 50px" }}>
        <Link to="/watchcodymainpage">시계 코디 메인 페이지</Link>
      </button>

      <button style={{ margin: "50px 50px" }}>
        <Link to="/watchcodywrite">시계 코디 글쓰기</Link>
      </button>
      <button style={{ margin: "50px 50px" }}>
        <Link to="/watchpage">시계 페이지 (카테고리)</Link>
      </button>
      <button style={{ margin: "50px 50px" }}>
        <Link to="/watchcodydetail/:id">시계 코디페이지 디테일</Link>
      </button>
      <button style={{ margin: "50px 50px" }}>
        <Link to="/mypage">마이 페이지</Link>
      </button>
      <button>
        <Link to="/watchdetail">시계 상세페이지</Link>
      </button>
    </MainPageBlock>
  );
}

export default MainPage;
