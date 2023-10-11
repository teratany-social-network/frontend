import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Home from "./components/Home";
import SignInAuth from "./views/Authentication/SignInAuth";
import RegisterAuth from "./views/Authentication/RegisterAuth";
const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        {/* // authentication routes */}
        <Routes>
          <Route path="/authentication">
            <Route path="signin" element={<SignInAuth />} />
            <Route path="register" element={<RegisterAuth />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <h1 className="text-3xl font-bold underline ">Teratany Application</h1>
    </div>
  );
};

export default App;
