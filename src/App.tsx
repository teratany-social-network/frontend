import "./App.css";
import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Home from "./components/Home";
import SignInAuth from "./views/Authentication/SignInAuth";
import RegisterAuth from "./views/Authentication/RegisterAuth";
import PageProfile from "./views/Page/PageProfile";
import EditPage from "./views/Page/EditPage";
import EditProfile from "./views/Page/EditProfile";
import EditPicture from "./views/Page/EditPicture";
import EditPassword from "./views/Page/EditPassword";
import EditLocation from "./views/Page/EditLocation";
import { Provider } from "react-redux";
import { store, persistor } from "store/store";
import { PersistGate } from "redux-persist/integration/react";
import ToastNotification from "components/common/ToastNotification";

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
                <Route path="/profile" element={<PageProfile />} />
                <Route path="/edit-page" element={<EditPage />} />
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/edit-picture" element={<EditPicture />} />
                <Route path="/edit-password" element={<EditPassword />} />
                <Route path="/edit-location" element={<EditLocation />} />
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
