import "./App.css";
import Header from "./Header";
import SideBar from "./Sidebar";
import Main from "./Main";
import RightSideBar from "./RightSideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page2 from './Page2';
import Sales from './components/Sales';
import Funnel from './components/Funnel';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="app__body ">
                <SideBar />
                <Main />
                <RightSideBar />
              </div>
            }
          />
          <Route path="/page2" element={<Page2 />} />
        <Route path="/Sales" element={<Sales />} />
        <Route path="/Funnel" element={<Funnel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
