import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import { setCookie } from "../Cookie";
// import logo_design from "../design/스프링워치-로고1.png";
import { useDispatch, useSelector } from "react-redux";
import { actionsCreators as MainlistActions } from "../redux/modules/mainpage";

const MainPageBlock = styled.div`
  .Carousel.Item,
  img {
    height: 350px;
  }
  .position_logo {
    margin-right: 100px;
    z-index: 0;
  }
  .flex-item {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 60vh;
    margin-top: 50px;
    align-items: center;

    line-height: 5;
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
    dispatch(MainlistActions.getBestListFB);
  }, []);
  const [List, setList] = useState([
    {
      watchId: 1,
      watchImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCRrMkXn0CxbzQ6vx8JgcLMjsFv_XEiuXb2A&usqp=CAU",
      watchBrand: "문페이즈",
      watchModel: "G-shock250",
      lowestPrice: "16억",
      category: "digital",
    },
    {
      watchId: 1,
      watchImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCRrMkXn0CxbzQ6vx8JgcLMjsFv_XEiuXb2A&usqp=CAU",
      watchBrand: "문페이즈",
      watchModel: "G-shock250",
      lowestPrice: "16억",
      category: "digital",
    },
    {
      watchId: 1,
      watchImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCRrMkXn0CxbzQ6vx8JgcLMjsFv_XEiuXb2A&usqp=CAU",
      watchBrand: "문페이즈",
      watchModel: "G-shock250",
      lowestPrice: "16억",
      category: "digital",
    },
  ]);
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

      <Logo className="position_logo">
        <div className="flex-item">
          {List.map((list, idx) => {
            return (
              <div className="flex_box" key={idx}>
                <div className="box_hover">
                  <img size="15%" src={list.watchImage} />
                </div>
                <p className="artist_name">{list.watchBrand}</p>
                <p className="artist_name">{list.watchModel}</p>
                <p className="artist_name">{list.lowestPrice}</p>
                <p className="artist_name">{list.category}</p>
              </div>
            );
          })}
        </div>
      </Logo>
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
      <button>
        <Link to="/watchcodydetail/:id">시계 코디페이지 디테일</Link>
      </button>
    </MainPageBlock>
  );
}

export default MainPage;
