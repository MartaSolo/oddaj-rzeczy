import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import LogIn from "./components/pages/LogIn";
import Register from "./components/pages/Register";
import LogOut from "./components/pages/LogOut";
import GiveStuff from "./components/pages/GiveStuff";
import "./scss/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<LogIn />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="logout" element={<LogOut />}></Route>
        <Route path="oddaj-rzeczy" element={<GiveStuff />}></Route>
        <Route path="*" element={<p>There's nothing here</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
