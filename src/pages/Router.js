import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "./MainPage";
import Login from "./Login";
import Signup from "./Signup";
import MyPage from "./MyPage";
import CartPage from "./CartPage";
import AdminPage from "./AdminPage";
import AdminSignup from "./AdminSignup";
////////////////////////
import MyWatchCodyWrite from "../codypages/MyWatchCodyWrite";
import WatchCodyDetail from "../codypages/WatchCodyDetail";
import WatchCodyMainPage from "../codypages/WatchCodyMainPage";
import WatchCodyWrite from "../codypages/WatchCodyWrite";
import WatchCodyUpdate from "../codypages/WatchCodyUpdate";
import WatchDetail from "../codypages/WatchDetail";
import WatchPage from "../codypages/WatchPage";
function App() {
  return (
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
      <Route path="/watchdetail" component={WatchPage} />
      <Route path="/" component={MainPage} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default App;
