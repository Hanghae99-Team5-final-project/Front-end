import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Like from "../images/like.png";
import emptyLike from "../images/empty-like.png";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionCreators as postActions } from "../redux/modules/post";
import CommentDetail from "../components/CommentDetail";
import likeImg from "../images/likeimg.png";
import Trash from "../images/Trash.png";
import Edit from "../images/Edit.png";
import "../App.css";

function WatchDetail(props) {
  React.useEffect(() => {
    dispatch(postActions.getDetail(watchId));
    dispatch(postActions.getLike(watchId));
  }, []);

  const watchId = useParams().id;
  const dispatch = useDispatch();
  const like_state = useSelector((state) => state.post.like);
  console.log(like_state);
  const likeId = useSelector((state) => state.post.likeId);
  const postData = useSelector((state) => state.post.postdetail);
  const WatchImage = useSelector((state) => state.post.postdetail.watchImage);
  const WatchBrand = useSelector((state) => state.post.postdetail.watchBrand);
  const LowestPrice = useSelector((state) => state.post.postdetail.lowestPrice);

  console.log(WatchImage);
  console.log("likeId" + likeId);

  React.useEffect(() => {
    console.log("되라 제발");
    console.log(postData);

    console.log("에러에러에러");
    dispatch(postActions.getPostFB(watchId));
  }, []);

  const sendLike = () => {
    dispatch(postActions.likePostFB(watchId));
    console.log("sendlike끝");
  };

  const deleteLike = () => {
    console.log(likeId);
    dispatch(postActions.deleteDB(likeId));
  };

  console.log(props);

  const num = [
    {
      name: "홍길동",
      createdAt: "1시간전",
      comment: "안녕하세요",
    },
    {
      name: "김길동",
      createdAt: "5시간전",
      comment: "잘봤습니다.",
    },
    {
      name: "임길동",
      createdAt: "하루전",
      comment: "잘봤습니다.",
    },
  ];

  return (
    <div className="wrap">
      <div className="center">
        <DetailWrap>
          <div className="img-wrap">
            <img src="" alt="detailImg" />
            <label className="description">
              세이코 SSB065J1 / 크로노그래프 남성 메탈시계
            </label>
            <span className="price">10,000원</span>

            <div className="btn-wrap">
              <button type="button" className="detail-btn like">
                <span>찜하기</span>
                <img src={likeImg} alt="좋아요" />
              </button>
              <button type="button" className="detail-btn color">
                구매하기
              </button>
            </div>
          </div>

          <div className="comment-wrap">
            <div className="all-review">전체 리뷰 보기 &gt </div>
            {num.map((item, i) => {
              return (
                <div className="comment-area">
                  <div className="info">
                    <span className="user-name">{item.name}</span>
                    <span className="create-at">{item.createdAt}</span>
                  </div>
                  <div className="comment">{item.comment}</div>
                  <div className="btn-wrap">
                    <button type="button">
                      <img src={Edit} alt="edit" />
                    </button>
                    <button type="button">
                      <img src={Trash} alt="trash" />
                    </button>
                  </div>
                </div>
              );
            })}

            <div className="review-wrap">
              <div className="review">리뷰작성</div>

              <input type="text" />
              <button type="button" className="send-comment">
                등록하기
              </button>
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

        button {
          background-color: transparent;
          border: none;

          img {
            width: 2.5rem;
            height: 2.5rem;
            margin-right: 2rem;
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
