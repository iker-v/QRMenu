import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {HomePage} from "./pages/HomePage"; 
import EditMenu from "./pages/EditMenu";
import PublicMenu from "./pages/PublicMenu";
import {PageError} from "./pages/PageError";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="edit/:edittoken" element={<EditMenu />} />
        <Route path="public/:publictoken" element={<PublicMenu />} />
        <Route path="*" element={<PageError/>} />
      </Routes>
    </Router>
  );
}

export default App;
