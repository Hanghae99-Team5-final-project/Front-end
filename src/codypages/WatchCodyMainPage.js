import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as codyDetailActions } from "../redux/modules/post";
import "../App.css";
import CodyCard from "../components/CodyCard";

const WatchCodyMainPage = () => {
  const dispatch = useDispatch();
  const codyMains = useSelector((state) => state.post.codyMain);
  React.useEffect(() => {
    dispatch(codyDetailActions.getCodyMainFB());
  }, []);

  return (
    <div className="wrap">
      <div className="center">
        <WatchPageWrap>
          <div className="go-post">
            <Link to="/watchcodywrite">내 코디 글 쓰러가기</Link>
          </div>
          <Card>
            {codyMains?.map((menu, idx) => {
              return (
                <Link to={`/watchcodydetail/${menu.codyId}`} key={idx}>
                  <CodyCard data={menu} />
                </Link>
              );
            })}
          </Card>
          <div className="btn-wrap"></div>
        </WatchPageWrap>
      </div>
    </div>
  );
};

const WatchPageWrap = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 10rem;
  margin-bottom: 5rem;

  .go-post {
    text-align: right;
    padding-right: 8%;

    a {
      text-decoration: underline;
      font-size: 1.6rem;
    }
  }
`;

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
`;

export default WatchCodyMainPage;
