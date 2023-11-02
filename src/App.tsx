import "./App.css";
import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Home from "./views/Home";
import SignInAuth from "./views/Authentication/SignInAuth";
import RegisterAuth from "./views/Authentication/RegisterAuth";
import EditPageMenu from "./views/Page/EditPageMenu";
import EditGeneralPage from "./views/Page/EditGeneralPage";
import EditPagePicture from "./views/Page/EditPagePicture";
import EditPageLocation from "./views/Page/EditLocationPage";
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
import { HomeChat } from "./views/chat/HomeChat";
import { OneChat } from "./views/chat/OneChat";
import Profile from "./views/Profile/Profile";

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
                <Route path="/page/add/step-1" element={<AddPageStep1 />} />
                <Route path="/page/add/step-2" element={<AddPageStep2 />} />
                <Route path="/page/add/step-3" element={<AddPageStep3 />} />
                <Route path="/chat/one" element={<OneChat />} />
              </Route>
              <Route element={<WithNav />}>
                <Route path="/" element={<Home />} />

                {/* // publication */}
                <Route path="/publication" element={<AddPublication />} />
                {/* // Map */}
                <Route path="/map" element={<Map />} />
                {/* PAGE */}
                <Route path="/page/edit/menu" element={<EditPageMenu />} />
                <Route
                  path="/page/edit/general"
                  element={<EditGeneralPage />}
                />
                <Route
                  path="/page/edit/picture"
                  element={<EditPagePicture />}
                />
                <Route
                  path="/page/edit/location"
                  element={<EditPageLocation />}
                />
                <Route path="/pages" element={<PageList />} />
                {/*CHAT*/}
                <Route path="/chat/list" element={<HomeChat />} />

                {/* USER */}
                <Route path="/user/edit/menu" element={<EditUserMenu />} />
                <Route
                  path="/user/edit/general"
                  element={<EditGeneralUser />}
                />
                <Route
                  path="/user/edit/password"
                  element={<EditUserPassword />}
                />
                <Route
                  path="/user/edit/picture"
                  element={<EditUserPicture />}
                />
                <Route
                  path="/user/edit/location"
                  element={<EditUserLocation />}
                />
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

                {/* PROFILE */}

                <Route path="/profile/:id" element={<Profile />} />
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
