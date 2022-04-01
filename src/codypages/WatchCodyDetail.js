import React, { useState } from "react";
import styled from "styled-components";
import { setCookie } from "../Cookie";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { actionCreators as postActions } from "../redux/modules/post";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configStore";
import CommentCodyDetail from "../components/CommentCodyDetail";
const WatchCodyDetailBlock = styled.div`
  .lb-review {
  }
  .lb-icons {
    display: inline-flex;
    font-size: 40px;
    color: steelblue;
    cursor: pointer;
  }
  .cody-box {
    width: 100%;
    height: 100px;
  }
`;
function WatchCodyDetail(props) {
  const dispatch = useDispatch();

  const { id } = useParams();
  const codyId = id;
  console.log(id);

  const token = localStorage.getItem("token");
  const _codydetails = useSelector((state) => state.codydetail.codyDetail);
  const codydetails = _codydetails?.find((a) => a.codyId === +codyId);
  console.log(codydetails);

  React.useEffect(() => {
    console.log("되라 제발");

    console.log("에러에러에러");
    dispatch(postActions.getCodyPostFB(codyId));
  }, []);

  return (
    <div>
      <WatchCodyDetailBlock>
        <div className="lb-icons">
          <div className="cody-box">{codydetails?.codyTitle}</div>
          <div onClick={() => history.push(`/watchcodyupdate/${codyId}`)}>
            <img
              src={codydetails?.imageUrl}
              alt={codydetails?.imageUrl}
              height="300px"
              width="300px"
            />
          </div>
          <div className="cody-box"> {codydetails?.codyContent}</div>
        </div>
        <CommentCodyDetail codyId={codyId} />
      </WatchCodyDetailBlock>
    </div>
  );
}

export default WatchCodyDetail;
