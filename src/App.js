import "./App.css";
import styled from "styled-components";
import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configStore";
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
import WatchDetail from "./codypages/WatchDetail";
import WatchPage from "./codypages/WatchPage";
import Header from "./components/Header";
import NavbarButton from "./option/NavbarButton";
function App() {
  return (
    <>
      <AppWrap>
        <Header />
        <NavbarButton />
      </AppWrap>
      <ContentWrap>
        <ConnectedRouter history={history}>
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
            <Route
              path="/watchcodydetail/:id"
              exact
              component={WatchCodyDetail}
            />
            <Route
              path="/watchcodymainpage/:id"
              exact
              component={WatchCodyMainPage}
            />
            <Route path="/watchcodymainpage" component={WatchCodyMainPage} />

            <Route path="/watchcodywrite" component={WatchCodyWrite} />
            <Route path="/watchdetail/:id" component={WatchDetail} />
            <Route path="/watchpage" exact component={WatchPage} />
            <Route path="/" exact component={MainPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </ConnectedRouter>
      </ContentWrap>
    </>
  );
}

const AppWrap = styled.div`
  margin: 0 auto;
  margin-bottom: 12px;
  padding: 0px 40px;
  max-width: 1100px;
  box-sizing: border-box;
`;

const ContentWrap = styled.div`
  margin: 0 auto;
  padding: 0px 40px;
  max-width: 1100px;
  box-sizing: border-box;
`;
export default App;
