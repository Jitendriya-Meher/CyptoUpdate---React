 import { Route, Routes } from "react-router-dom";
import "./App.css";
import Coin from "./Pages/Coin";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="">

      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/coin/:id" element={<Coin></Coin>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
