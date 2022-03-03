import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <>
      <button style={{ margin: "50px 50px" }}>
        <Link to="/login">로그인 페이지</Link>
      </button>

      <button>
        <Link to="/signup">회원가입 페이지</Link>
      </button>
    </>
  );
}

export default MainPage;
