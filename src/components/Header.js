// import React from "react";
// import { useHistory } from "react-router-dom";
// import styled from "styled-components";
// import { getCookie, deleteCookie, setCookie } from "../Cookie";
// import { Grid, Text, Button } from "../elements";
// import { actionCreators as userActions } from "../redux/modules/user";
// import { useSelector, useDispatch } from "react-redux";

// const Header = (props) => {
//   const dispatch = useDispatch();
//   const history = useHistory();

//   const is_session = sessionStorage.getItem("token") ? true : false;
//   const is_login = useSelector((state) => state.user.is_login);

//   if (is_login && is_session) {
//     return (
//       <HeaderWrap>
//         <Text
//           _onClick={() => {
//             history.replace("/");
//           }}
//           size="32px"
//           bold
//         >
//           스프링워치
//         </Text>
//         <ButtonWrap>
//           <button
//             text-size="16px"
//             _onClick={() => {
//               history.replace("/login");
//             }}
//           >
//             내정보
//           </button>

//           <button
//             text-size="16px"
//             _onClick={() => {
//               dispatch(userActions.logOut({}));
//             }}
//           >
//             로그아웃
//           </button>
//         </ButtonWrap>
//       </HeaderWrap>
//     );
//   }

//   return (
//     <HeaderWrap>
//       <Text
//         _onClick={() => {
//           history.replace("/");
//         }}
//         size="32px"
//         bold
//       >
//         스프링워치
//       </Text>
//       <ButtonWrap>
//         <button
//           text-size="16px"
//           _onClick={() => {
//             history.replace("/login");
//           }}
//         >
//           로그인/회원가입
//         </button>
//         <button
//           text-size="16px"
//           _onClick={() => {
//             history.replace("/signup");
//           }}
//         >
//           찜한 상품
//         </button>
//         <button
//           text-size="16px"
//           _onClick={() => {
//             history.replace("/signup");
//           }}
//         >
//           마이페이지
//         </button>
//       </ButtonWrap>
//     </HeaderWrap>
//   );
// };

// const HeaderWrap = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   height: 60px;
// `;

// const ButtonWrap = styled.div`
//   display: flex;
//   width: 300px;
//   justify-content: space-around;
// `;

// export default Header;
