
import Information from "../src/page/Information";
import Register from "../src/page/Register";
import Users from "../src/page/Users";       // Confirme o caminho
import UserInfo from "../src/page/UserInfo"; // Confirme o caminho
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Information />} />
        <Route path="/register" element={<Register />} />
        <Route path="/usuarios" element={<Users />} />
        <Route path="/usuarios/:id" element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;