import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNav from "./Components/MyNav";
import CardContainer from "./Components/CardContainer.jsx";
import CardDetails from "./Components/CardDetails.jsx";
import Search from "./Components/Search.jsx";
import NotFound from "./Components/NotFound.jsx";
import MyFooter from "./Components/MyFooter.jsx";

function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <div className="d-flex flex-column h-100 ">
          <MyNav />
          <Search />
          <div className="flex-grow-1">
            <Routes>
              <Route element={<CardContainer />} path="/" />
              <Route element={<CardDetails />} path="card-details/:cardid" />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
          <MyFooter />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
