import React from "react";
import "../App.css";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionsCreators as MainlistActions } from "../redux/modules/mainpage";
import MoreButton from "../components/button/MoreButton";
import ScrollTopButton from "../components/button/ScrollTopButton";
import CodyCard from "../components/CodyCard";
import WatchCard from "../components/WatchCard";
import { Link } from "react-router-dom";
import topBanner from "../images/topBanner.png";
import topBanner2 from "../images/topBanner2.jpeg";
import topBanner3 from "../images/topBanner3.jpeg";
import { Carousel } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MainPage() {
  React.useEffect(() => {
    dispatch(MainlistActions.getBestListFB());
  }, []);

  const dispatch = useDispatch();
  const { bestList, codyList, coupleList } = useSelector((state) => ({
    bestList: state.mainpage.bestList,
    codyList: state.mainpage.codyList,
    coupleList: state.mainpage.coupleList,
  }));
  console.log(bestList);
  console.log(codyList);
  console.log(coupleList);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="wrap">
      <Carousel fade interval={900}>
        <Carousel.Item>
          <img className="d-block w-100" src={topBanner} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={topBanner2} alt="Second slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={topBanner3} alt="Third slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="center">
        <WatchCardWrap>
          <div className="category">
            <label className="title">Best</label>
            <span className="description">이번 주 가장 인기있는 아이템</span>
          </div>
          {/* <Slider {...settings}>
            <div>
              <p>
                <div> */}
          <Card>
            {bestList &&
              bestList.slice(0, 4).map((data, i) => {
                return (
                  <Link to={`/watchdetail/${data.watchId}`} key={i}>
                    <WatchCard data={data} />
                  </Link>
                );
              })}
          </Card>
          {/* </div>
              </p>
            </div>
            <div></div>
          </Slider> */}
          <div className="btn-area"></div>
        </WatchCardWrap>

        <WatchCardWrap>
          <div className="category">
            <label className="title">Couple</label>
            <span className="description">커플아이템</span>
          </div>
          <Card>
            {coupleList &&
              coupleList.slice(0, 4).map((data, i) => {
                console.log(data);
                return (
                  <Link to={`/watchdetail/${data.watchId}`} key={i}>
                    <WatchCard data={data} />
                  </Link>
                );
              })}
          </Card>
          <div className="btn-area">
            <Link to="/watchpage">
              <MoreButton />
            </Link>
          </div>
        </WatchCardWrap>
        <WatchCardWrap>
          <div className="category">
            <label className="title">Cody</label>
            <span className="description">코디아이템</span>
          </div>
          <Card>
            {codyList &&
              codyList.slice(0, 5).map((data, i) => {
                console.log(data);
                return (
                  <Link to={`/watchcodydetail/${data.codyId}`} key={i}>
                    <CodyCard data={data} />
                  </Link>
                );
              })}
          </Card>
          <div className="btn-area">
            <Link to="/watchcodymainpage">
              <MoreButton />
            </Link>
          </div>
        </WatchCardWrap>
      </div>
    </div>
  );
}

const WatchCardWrap = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 10rem;
  margin-bottom: 5rem;

  .category {
    margin-bottom: 10rem;

    .title {
      font-weight: bold;
      font-size: 2rem;
      line-height: 2.9rem;
      margin-bottom: 2.3rem;
    }

    .description {
      font-size: 1.6rem;
    }

    .btn-area {
      margin-top: 8rem;
    }
  }
`;

const Card = styled.div`
  display: flex;
`;
