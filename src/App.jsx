import { Dashnoard } from "./page/Dashnoard"
import { Home } from "./page/Home"
import { Information } from "./page/Information"
import { Register } from "./page/Register"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
  )
}

export default App
