import styled from "styled-components";
import Img from "../images/footerLogo.png";

export default function WatchCard(props) {
  console.log(props);
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
          <label className="title">{watchBrand}</label>
          <span className="description">{watchCategory}</span>
          <span className="price">{lowestPrice}</span>
          <div className="bottom">
            <div className="star">(4.5)</div>
            <span className="sold">21,000개 구매</span>
          </div>
        </div>
      </CardWrap>
    </>
  );
}

const CardWrap = styled.div`
  width: 30rem;

  .img-area {
    margin-top: 2rem;
    width: 100%;
    height: 30rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .content-area {
    padding: 4rem 4.3rem;

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
    }

    .bottom {
      margin-top: 1.2rem;
      color: #767676;
      font-size: 1.3rem;
      display: flex;

      .star {
        margin-right: 4rem;
      }

      .sold {
      }
    }
  }
`;
