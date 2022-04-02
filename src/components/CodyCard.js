import styled from "styled-components";
import Img from "../images/footerLogo.png";

export default function WatchCard(props) {
  const data = props.data;
  const {
    likeCount,
    lowestPrice,
    watchBrand,
    watchCategory,
    watchId,
    watchImageUrl,
  } = {
    likeCount: data.likeCount,
    lowestPrice: data.lowestPrice,
    watchBrand: data.watchBrand,
    watchCategory: data.watchCategory,
    watchId: data.watchId,
    watchImageUrl: data.watchImageUrl,
  };

  return (
    <>
      <CardWrap>
        <div className="img-area">
          <img src={watchImageUrl} alt="watchImg" />
        </div>
        <div className="content-area">
          <label className="title">userName</label>
          <span className="price">comment</span>
        </div>
      </CardWrap>
    </>
  );
}

const CardWrap = styled.div`
  max-width: 26rem;
  text-align: left;
  margin-right: 3rem;

  .img-area {
    margin-top: 2rem;
    width: 100%;
    height: 24rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .content-area {
    padding-top: 3rem;
    padding-left: 1rem;

    .title {
    }

    .description {
      color: #767676;
      margin: 0.6rem 0;
    }

    .price {
      font-weight: bold;
      font-size: 1.8rem;
      line-height: 2.6rem;
      letter-spacing: 0.1em;
      margin-bottom: 6rem;
    }
  }
`;
