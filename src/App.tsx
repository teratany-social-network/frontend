import "./App.css";
import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Home from "./components/Home";
import SignInAuth from "./views/Authentication/SignInAuth";
import RegisterAuth from "./views/Authentication/RegisterAuth";
import PageProfile from "./views/Page/PageProfile";
import EditPageMenu from "./views/Page/EditPageMenu";
import EditGeneralPage from "./views/Page/EditGeneralPage";
import EditPagePicture from "./views/Page/EditPagePicture";
import EditPageLocation from "./views/Page/EditLocationPage";
import UserProfile from "./views/User/UserProfile";
import { Provider } from "react-redux";
import { store, persistor } from "store/store";
import { PersistGate } from "redux-persist/integration/react";
import ToastNotification from "components/common/ToastNotification";
import EditUserMenu from "./views/User/EditUserMenu";
import EditGeneralUser from "./views/User/UserGeneral";
import EditUserPassword from "./views/User/UserPassword";
import EditUserPicture from "./views/User/UserPicture";
import EditUserLocation from "./views/User/UserLocation";

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ToastNotification />
          <BrowserRouter>
            <Routes>
              <Route element={<WithoutNav />}>
                {/* // authentication routes */}
                <Route path="/signin" element={<SignInAuth />} />
                <Route path="/register" element={<RegisterAuth />} />
              </Route>
              <Route element={<WithNav />}>
                <Route path="/" element={<Home />} />
                {/* PAGE */}
                <Route path="/page" element={<PageProfile />} />
                <Route path="/edit-menu" element={<EditPageMenu />} />
                <Route path="/page-general" element={<EditGeneralPage />} />
                <Route path="/page-picture" element={<EditPagePicture />} />
                <Route path="/page-location" element={<EditPageLocation />} />
                {/* USER */}
                <Route path="/user" element={<UserProfile />} />
                <Route path="/edit-user" element={<EditUserMenu />} />
                <Route path="/user-general" element={<EditGeneralUser />} />
                <Route path="/user-password" element={<EditUserPassword />} />
                <Route path="/user-picture" element={<EditUserPicture />} />
                <Route path="/user-location" element={<EditUserLocation />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
};

const WithNav = () => {
  return (
    <>
      <div className="w-full mb-14">
        <Outlet />
      </div>
      <NavBar />
    </>
  );
};
const WithoutNav = () => {
  return <Outlet />;
};

export default App;
