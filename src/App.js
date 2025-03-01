import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Userreg from "./components/Userreg";
import Web from "./components/Web";
import Books from "./components/Books";
import "./styles/home.css";
import "./styles/user.css";
import "./styles/web.css"
import "./styles/books.css"

function App() {
  const location = useLocation();

  const getPageStle = () => {
    switch (location.pathname) {
      case "/userreg":
        return "user";
      case "/web":
        return "web";
      case "/books":
        return "books";
      default:
        return "home";
    }
  };
  console.log("Current Class:", getPageStle());
  return (
    <div className={getPageStle()}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userreg" element={<Userreg />} />
        <Route path="/web" element={<Web />} />
        <Route path="/book" element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;
