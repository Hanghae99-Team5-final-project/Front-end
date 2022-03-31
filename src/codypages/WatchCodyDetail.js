import React, { useState } from "react";
import styled from "styled-components";
import { setCookie } from "../Cookie";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { actionCreators as postActions } from "../redux/modules/post";
import { useDispatch, useSelector } from "react-redux";

import CommentDetail from "../components/CommentDetail";
const WatchCodyDetailBlock = styled.div`
  .lb-review {
  }
  .lb-icons {
    display: inline-flex;
    font-size: 40px;
    color: steelblue;
    cursor: pointer;
  }
`;
function WatchCodyDetail(props) {
  const dispatch = useDispatch();
  const history = useHistory();
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
    dispatch(postActions.getPostFB(codyId));
  }, []);

  return (
    <div>
      <WatchCodyDetailBlock>
        <div className="lb-icons">
          <div onClick={() => history.push(`/watchcodyupdate/${codyId}`)}>
            {codydetails.codyTitle}
            <img
              src={codydetails.imageUrl}
              alt={codydetails.imageUrl}
              height="400px"
              width="400px"
            />

            {codydetails.codyContent}

            <CommentDetail watchId={codyId} />
          </div>
        </div>
      </WatchCodyDetailBlock>
    </div>
  );
}

export default WatchCodyDetail;
