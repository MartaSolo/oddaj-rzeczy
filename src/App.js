import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/atoms/Loader";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import "./scss/main.scss";

const Home = React.lazy(() => import("./components/pages/Home"));
const LogIn = React.lazy(() => import("./components/pages/LogIn"));
const Register = React.lazy(() => import("./components/pages/Register"));
const LogOut = React.lazy(() => import("./components/pages/LogOut"));
const GiveStuff = React.lazy(() => import("./components/pages/GiveStuff"));

function App() {
  return (
    <UserAuthContextProvider>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="login" element={<LogIn />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="logout" element={<LogOut />}></Route>
            <Route path="oddaj-rzeczy" element={<GiveStuff />}></Route>
            <Route path="*" element={<p>There's nothing here</p>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </UserAuthContextProvider>
  );
}

export default App;
