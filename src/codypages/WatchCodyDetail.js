import React from "react";
import styled from "styled-components";

import { useParams } from "react-router-dom";
import { actionCreators as postActions } from "../redux/modules/post";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configStore";
import CommentCodyDetail from "../components/CommentCodyDetail";
import Trash from "../images/Trash.png";
import Edit from "../images/Edit.png";
import "../App.css";

function WatchCodyDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const codyId = id;
  console.log(id);
  const codydetails = useSelector((state) => state.post.codyDetail);
  console.log(codydetails);

  React.useEffect(() => {
    dispatch(postActions.getCodyDetailFB(codyId));
  }, []);

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
    <div className="warp">
      <div className="center">
        <WatchCodyDetailWrap>
          <div className="description-area">
            <label className="title">{codydetails?.codyTitle}</label>
            <img src={codydetails?.imageUrl} alt="시계 이미지" />
            <label className="brand">{codydetails?.watchBrand}</label>
            <span className="model">{codydetails?.watchModel}</span>
            <div className="content">{codydetails?.codyContent}</div>
            <div className="content"></div>

            <div className="btn-wrap">
              <button
                type="button"
                onClick={() => history.push(`/watchcodyupdate/${codyId}`)}
              >
                <img src={Edit} alt="edit" />
              </button>
              <button
                type="button"
                onClick={() => {
                  dispatch(postActions.deletePostDB(codyId));
                }}
              >
                <img src={Trash} alt="trash" />
              </button>
            </div>
          </div>
          <div className="content-area">
            <label className="title">댓글 작성</label>
            <CommentCodyDetail codyId={codyId} />
            <div className="rating">
              <div className="star">평점 {codydetails?.star}</div>
              <button type="button">등록하기</button>
            </div>
          </div>
          <div className="comment-wrap">
            <label className="title">댓글 10개</label>
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
          </div>
        </WatchCodyDetailWrap>
      </div>
    </div>
  );
}

const WatchCodyDetailWrap = styled.div`
  max-width: 60rem;
  margin: auto;
  .title {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 3.5rem;
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

  .description-area {
    margin-top: 18rem;
    margin-bottom: 13.5rem;
    position: relative;

    .title {
      padding-top: 8rem;
    }

    img {
      width: 60rem;
      height: 50rem;
      margin-bottom: 4rem;
      border-radius: 1rem;
    }

    .brand {
      font-size: 1.4rem;
      font-weight: bold;
      margin-bottom: 0.6rem;
    }

    .model {
      font-size: 1.6rem;
      margin-bottom: 4.2rem;
    }

    .content {
      font-size: 1.6rem;
    }
  }

  .content-area {
    input {
      background: #f2f2f2;
      margin-bottom: 2.4rem;
    }

    .rating {
      display: flex;
      justify-content: space-between;
      margin-bottom: 3.5rem;

      .star {
        font-size: 1.6rem;
      }

      button {
        font-size: 1.4rem;
        opacity: 0.8;
        width: 8rem;
        height: 3rem;
      }
    }
  }

  .comment-wrap {
    max-width: 106rem;
    margin: auto;
    position: relative;
    margin-bottom: 26rem;

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
    }
  }
`;

export default WatchCodyDetail;
