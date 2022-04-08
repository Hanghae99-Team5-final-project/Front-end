import styled from "styled-components";

export default function WatchCard(props) {
  const data = props.data;
  const {
    lowestPrice,
    watchBrand,

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
          <span className="price">{lowestPrice}</span>
        </div>
      </CardWrap>
    </>
  );
}

const CardWrap = styled.div`
  max-width: 30rem;
  text-align: left;

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
  }
`;
