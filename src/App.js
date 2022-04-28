// import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/main.scss";
import { Home } from "./components/Home/Home";
import { LogIn } from "./components/LogIn/LogIn";
import { Register } from "./components/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<LogIn />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="*" element={<p>There's nothing here</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
