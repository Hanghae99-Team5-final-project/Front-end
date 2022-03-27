import styled from "styled-components";
import Img from "../images/footerLogo.png";

export default function WatchCard() {
  return (
    <>
      <CardWrap>
        <div className="img-area">
          <img src={Img} alt="watchImg" />
        </div>
        <div className="content-area">
          <label className="title">지샥 G-shock</label>
          <span className="description">
            DW-5610SU-3 <br />
            쿼츠 남성 우레탄시계 37.9x34.7mm
          </span>
          <span className="price">85,900</span>
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
