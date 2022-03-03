import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <button>
        <Link to="/signup">회원가입 페이지</Link>
      </button>
    </div>
  );
}

export default Login;
