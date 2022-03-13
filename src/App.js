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

function App() {
  return (
    <>
      {/* <Header /> */}
      <NavbarButton />
      <ContentWrap>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/mypage/:id" component={MyPage} />
          <Route path="/mypage" component={MyPage} />
          <Route path="/cartpage" component={CartPage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/adminsignup" component={AdminSignup} />
          {/* ///////////////////// */}
          <Route path="/mywatchcodywrite" component={MyWatchCodyWrite} />
          <Route path="/watchcodydetail/:id" component={WatchCodyDetail} />
          <Route path="/watchcodymainpage/:id" component={WatchCodyMainPage} />
          <Route path="/watchcodymainpage" component={WatchCodyMainPage} />
          <Route path="/watchcodyupdate/:id" component={WatchCodyUpdate} />
          <Route path="/watchcodywrite" component={WatchCodyWrite} />
          <Route path="/watchdetail/:id" component={WatchDetail} />
          <Route path="/watchpage" component={WatchPage} />
          <Route path="/" component={MainPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </ContentWrap>
    </>
  );
}

const ContentWrap = styled.div`
  /* margin: 0 auto; */
  box-sizing: border-box;
`;

export default App;
