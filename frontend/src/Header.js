import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Avatar from "@mui/material/Avatar";
import Sales from './components/Sales';
import Funnel from './components/Funnel';


const Header = () => {
  const navigate = useNavigate();
  // const handleNavClick = (event) => {
  //   const navLinks = document.querySelectorAll(".navbar a");
  //   navLinks.forEach((link) => {
  //     link.classList.remove("selected");
  //   });
  //   event.target.classList.add("selected");
  // };

  const handleSales = () => {
    console.log("Sales")
    navigate('./Sales');
  }

  const handleFunnel = () => {
    console.log("Funnel")
    navigate('./Funnel');
  }

  const handleCompetitors = () => {
    console.log("Competitors")
    navigate('/');
  }

  const handleChatbot = () => {
    console.log("Chatbot")
    navigate('./chatbot');
  }
  return (
    <>
      <div className="header">
        <div className="header__left">
          <p>
            <span>mahindra</span>
            <sup>Rise</sup>
          </p>
          <nav className="navbar">
            <a href={Sales} onClick={handleSales}>
              Sales overview
            </a>
            <a href={Funnel} onClick={handleFunnel}>
              Funnel analysis
            </a>
            <a onClick={handleCompetitors}>
              Competitor analysis
            </a>
            <a onClick={handleChatbot}>
              BigQuery Chatbot
            </a>
          </nav>
        </div>

        <div className="header__right">
          <div className="header__search">
            <input type="text"></input>
            <SearchIcon />
          </div>
          <div className="icons">
            <NotificationsNoneOutlinedIcon
              style={{ marginRight: "10px", marginLeft: "10px" }}
            />
            <Avatar
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              style={{ marginRight: "10px", height: "35px" }}
            />
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;
