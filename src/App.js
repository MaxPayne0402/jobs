import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import "./style/bundle.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/home" exact element={<Home/>} />
          <Route path="/signin" exact element={<Signin/>} />
          <Route path="/signup" exact element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
