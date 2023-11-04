import "./App.css";
import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Home from "./views/Home";
import SignInAuth from "./views/Authentication/SignInAuth";
import RegisterAuth from "./views/Authentication/RegisterAuth";
import { Provider } from "react-redux";
import { store, persistor } from "store/store";
import { PersistGate } from "redux-persist/integration/react";
import ToastNotification from "components/common/ToastNotification";
import AddPublication from "./components/Publication/AddPublication";
import Map from "./views/Map/Map";
import EditUserMenu from "./views/User/EditProfileMenu";
import ProfileGeneral from "./views/User/ProfileGeneral";
import ProfilePassword from "./views/User/ProfilePassword";
import ProfilePicture from "./views/User/ProfilePicture";
import ProfileLocation from "./views/User/ProfileLocation";
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
import ProfileCategory from "./views/User/ProfileCategory";

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

                <Route path="/pages" element={<PageList />} />
                {/*CHAT*/}
                <Route path="/chat/list" element={<HomeChat />} />

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
                <Route path="/profile/edit/menu" element={<EditUserMenu />} />
                <Route
                  path="/profile/edit/general"
                  element={<ProfileGeneral />}
                />
                <Route
                  path="/profile/edit/password"
                  element={<ProfilePassword />}
                />
                <Route
                  path="/profile/edit/picture"
                  element={<ProfilePicture />}
                />
                <Route
                  path="/profile/edit/location"
                  element={<ProfileLocation />}
                />
                <Route
                  path="/profile/edit/category"
                  element={<ProfileCategory />}
                />

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
