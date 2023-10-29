import "./App.css";
import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Home from "./views/Home";
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
import AddPublication from "./components/Publication/AddPublication";
import Map from "./views/Map/Map";
import EditUserMenu from "./views/User/EditUserMenu";
import EditGeneralUser from "./views/User/UserGeneral";
import EditUserPassword from "./views/User/UserPassword";
import EditUserPicture from "./views/User/UserPicture";
import EditUserLocation from "./views/User/UserLocation";
import Search from "./views/Search/Search";
import AddPageStep1 from "./views/Page/AddPageStep1";
import SearchResult from "./views/Search/SearchResultPage";
import Notification from "./views/Notification/Notification";
import SearchFilterResult from "./views/Search/SearchFilterResult";
import PageList from "./views/Page/PageList";
import AddPageStep2 from "./views/Page/AddPageStep2";
import AddPageStep3 from "./views/Page/AddPageStep3";

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
                <Route path="/add-page" element={<AddPageStep1 />} />
                <Route path="/add-page/step-2" element={<AddPageStep2 />} />
                <Route path="/add-page/step-3" element={<AddPageStep3 />} />
              </Route>
              <Route element={<WithNav />}>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<PageProfile />} />

                {/* // publication */}
                <Route path="/publication" element={<AddPublication />} />
                {/* // Map */}
                <Route path="/map" element={<Map />} />
                {/* PAGE */}
                <Route path="/page" element={<PageProfile />} />
                <Route path="/edit-menu" element={<EditPageMenu />} />
                <Route path="/page-general" element={<EditGeneralPage />} />
                <Route path="/page-picture" element={<EditPagePicture />} />
                <Route path="/page-location" element={<EditPageLocation />} />
                <Route path="/pages" element={<PageList />} />

                {/* USER */}
                <Route path="/user" element={<UserProfile />} />
                <Route path="/edit-user" element={<EditUserMenu />} />
                <Route path="/user-general" element={<EditGeneralUser />} />
                <Route path="/user-password" element={<EditUserPassword />} />
                <Route path="/user-picture" element={<EditUserPicture />} />
                <Route path="/user-location" element={<EditUserLocation />} />
                {/* SEARCH */}
                <Route path="/search" element={<Search />} />
                <Route path="/search/result" element={<SearchResult />} />
                {/* Notifications */}
                <Route path="/notifications" element={<Notification />} />
                <Route
                  path="/search/result/publication"
                  element={<SearchFilterResult />}
                />
                <Route
                  path="/search/result/user"
                  element={<SearchFilterResult />}
                />
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
