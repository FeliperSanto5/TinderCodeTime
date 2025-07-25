import  Dashnoard  from "../src/page/Dashnoard";
import  Home  from "../src/page/Home";
import  Information  from "../src/page/Information";
import  Register  from "../src/page/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Information />} />
          <Route path="/home" exact element={<Home />}/>
    <Route path="/register" exact element={<Register />}/>
    <Route path="/dashboard" exact element={<Dashnoard />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
