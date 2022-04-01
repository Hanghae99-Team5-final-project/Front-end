import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "./MainPage";
import Login from "./Login";
import Signup from "./Signup";

import CartPage from "./CartPage";

////////////////////////

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

      <Route path="/cartpage" component={CartPage} />

      {/* ///////////////////// */}

      <Route path="/watchcodydetail/:id" component={WatchCodyDetail} />
      <Route path="/watchcodymainpage" component={WatchCodyMainPage} />
      <Route path="/watchcodyupdate/:id" component={WatchCodyUpdate} />
      <Route path="/watchcodywrite" component={WatchCodyWrite} />
      <Route path="/watchdetail" component={WatchDetail} />
      <Route path="/watchdetail/:id" component={WatchDetail} />
      <Route path="/watchpage" component={WatchPage} />
      <Route path="/" component={MainPage} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default App;
