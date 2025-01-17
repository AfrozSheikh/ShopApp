import { Route } from "react-router-dom";
import Navbar  from "./components/Navbar";
import  Cart  from "./pages/Cart";
import Home from "./pages/Home";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <div>
    <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </div>
  );
}

export default App;
