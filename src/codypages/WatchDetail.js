import React from "react";
import styled from "styled-components";
import Like from "../images/like.png";
import emptyLike from "../images/empty-like.png";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { actionCreators as postActions } from "../redux/modules/post";
import CommentDetail from "../components/CommentDetail";
import Paypal from "../option/Paypal";
import "../App.css";

function WatchDetail(props) {
  React.useEffect(() => {
    dispatch(postActions.getDetail(watchId));
    dispatch(postActions.getLike(watchId));
  }, []);
  const is_login = useSelector((state) => state.user.is_login);
  const history = useHistory();
  const watchId = useParams().id;
  const dispatch = useDispatch();
  const like_state = useSelector((state) => state.post.like);
  console.log(like_state);
  const likeId = useSelector((state) => state.post.likeId);
  const postData = useSelector((state) => state.post.postdetail);
  const WatchImage = useSelector((state) => state.post.postdetail.watchImage);
  const WatchBrand = useSelector((state) => state.post.postdetail.watchBrand);
  const LowestPrice = useSelector((state) => state.post.postdetail.lowestPrice);
  console.log(watchId);
  console.log(WatchImage);
  console.log("likeId" + likeId);

  React.useEffect(() => {
    dispatch(postActions.getPostFB(watchId));
  }, []);

  const sendLike = () => {
    if (!is_login) {
      window.alert("로그인 후 이용 가능합니다!");
      history.replace("/login");
      return;
    }
    dispatch(postActions.likePostFB(watchId));
    console.log("sendlike끝");
  };

  const deleteLike = () => {
    if (!is_login) {
      window.alert("로그인 후 이용 가능합니다!");
      history.replace("/login");
      return;
    }
    console.log(likeId);
    dispatch(postActions.deleteDB(likeId));
  };

  console.log(props);
  return (
    <div className="wrap">
      <div className="center">
        <DetailWrap>
          <div className="img-wrap">
            <img src={WatchImage} alt="시계 이미지" />
            <label className="description">{WatchBrand}</label>
            <span className="price">{LowestPrice}</span>

            <div className="btn-wrap">
              <button type="button" className="detail-btn like">
                <span>찜하기</span>
                {!like_state && (
                  <img
                    src={emptyLike}
                    alt="emptyLike"
                    onClick={() => {
                      sendLike();
                    }}
                  />
                )}
                {like_state && (
                  <img
                    src={Like}
                    alt="Like"
                    onClick={() => {
                      deleteLike();
                    }}
                  />
                )}
              </button>

              <Paypal />
            </div>
          </div>

          <div className="comment-wrap">
            <div className="review-wrap">
              <div className="review">리뷰작성</div>

              <CommentDetail watchId={watchId} />
            </div>
          </div>
        </DetailWrap>
      </div>
    </div>
  );
}

const DetailWrap = styled.div`
  .img-wrap {
    max-width: 56rem;
    text-align: center;
    margin: auto;
    margin-bottom: 12rem;

    img {
      width: 100%;
      height: 58rem;
    }

    .description {
      font-size: 2.4rem;
      font-weight: bold;
      margin-bottom: 2.7rem;
      letter-spacing: 1px;
      line-height: 30px;
    }

    .price {
      color: #ff0000;
      font-size: 2.6rem;
      font-weight: bold;
    }

    .btn-wrap {
      max-width: 44rem;
      margin: auto;
      margin-top: 8rem;
      display: flex;
      justify-content: space-between;

      .like {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 4rem;
          height: 4rem;
        }
      }

      .color {
        background-color: #020c25;
        color: #fff;
      }
    }
  }

  .comment-wrap {
    max-width: 106rem;
    margin: auto;
    position: relative;

    .all-review {
      text-align: right;
      font-size: 1.6rem;
      margin-bottom: 4rem;
    }

    .comment-area {
      display: flex;
      position: relative;
      padding-top: 1rem;
      padding-bottom: 1rem;
      padding-left: 3rem;
      border-bottom: 1px solid #bdbdbd;

      .info {
        width: 10rem;
        .user-name {
          font-size: 1.6rem;
          margin-bottom: 0.5rem;
        }

        .create-at {
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }

      .comment {
        font-size: 1.6rem;
      }

      .btn-wrap {
        position: absolute;
        top: 0.5rem;
        right: 0;
        display: flex;
        button {
          background-color: transparent;
          border: none;

          img {
            width: 3.5rem;
            height: 3.5rem;
            margin-right: 1rem;
          }
        }
      }
    }

    .review-wrap {
      padding-bottom: 7rem;
      margin-bottom: 30rem;
      .review {
        margin-top: 2rem;
        margin-bottom: 3rem;
        font-size: 1.8rem;
        font-weight: bold;
      }

      input {
        background-color: #f2f2f2;
      }

      .send-comment {
        width: 10rem;
        height: 3rem;
        font-size: 1.2rem;
        position: absolute;
        bottom: 0;
        right: 0;
        background: transparent;
      }
    }
  }
`;

export default WatchDetail;
