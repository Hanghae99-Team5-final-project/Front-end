import "./App.css";
import styled from "styled-components";
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyPage from "./pages/MyPage";
import CartPage from "./pages/CartPage";
import AdminPage from "./pages/AdminPage";
import AdminSignup from "./pages/AdminSignup";
////////////////////////
import MyWatchCodyWrite from "./codypages/MyWatchCodyWrite";
import WatchCodyDetail from "./codypages/WatchCodyDetail";
import WatchCodyMainPage from "./codypages/WatchCodyMainPage";
import WatchCodyWrite from "./codypages/WatchCodyWrite";
import WatchCodyUpdate from "./codypages/WatchCodyUpdate";
import WatchDetail from "./codypages/WatchDetail";
import WatchPage from "./codypages/WatchPage";
import Header from "./components/Header";
import NavbarButton from "./option/NavbarButton";
import Footer from "./option/Footer";
import Logo from "./option/Logo";
function App() {
  return (
    <>
      {/* <Header /> */}
      <Logo />
      <NavbarButton />
      <ContentWrap>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/mypage/:id" exact component={MyPage} />
        <Route path="/mypage" exact component={MyPage} />
        <Route path="/cartpage" exact component={CartPage} />
        <Route path="/admin" exact component={AdminPage} />
        <Route path="/adminsignup" exact component={AdminSignup} />
        {/* ///////////////////// */}
        <Route path="/mywatchcodywrite" exact component={MyWatchCodyWrite} />

        <Route path="/watchcodydetail/:id" exact component={WatchCodyDetail} />
        <Route
          path="/watchcodymainpage/:id"
          exact
          component={WatchCodyMainPage}
        />
        <Route path="/watchcodymainpage" exact component={WatchCodyMainPage} />
        <Route path="/watchcodyupdate/:id" exact component={WatchCodyUpdate} />
        <Route path="/watchcodywrite" exact component={WatchCodyWrite} />
        <Route path="/watchdetail" exact component={WatchDetail} />
        <Route path="/watchdetail/:id" exact component={WatchDetail} />
        <Route path="/watchpage" exact component={WatchPage} />
        <Route path="/" exact component={MainPage} />
        <Redirect from="*" to="/" />
      </ContentWrap>
      <Footer />
    </>
  );
}

const ContentWrap = styled.div`
  /* margin: 0 auto; */
  box-sizing: border-box;
`;

export default App;
