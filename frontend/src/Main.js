import React, { useState } from "react";
import "./Main.css";
import styled from "styled-components";
import Doughnut from "./Doughnut";
const MainLogo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 56px;
    height: 55px;
    margin-top: 10px;
  }
  margin-top: 20px;
  margin-left: 20px;
`;

const Main = () => {
  const [selectedData, setSelectedData] = useState("2021");

  const selectyearhandler = (event) => {
    setSelectedData(event.target.value);
  };
  localStorage.setItem("selectedyear", selectedData);
  return (
    <>
      <div className="main">
        <div className="circle">
          <div className="circle-2">
            <div class="timeline2">
              <div class="outers">
                <div class="cards">
                  <div class="info1">
                    <p class="title" style={{ whiteSpace: "nowrap" }}>
                      Total sale
                    </p>
                    <h3 style={{ whiteSpace: "nowrap" }}>121,987 Cr</h3>
                  </div>
                </div>
                <div class="cards">
                  <div class="info1">
                    <p class="title" style={{ whiteSpace: "nowrap" }}>
                      vehicle Qty
                    </p>
                    <h3 style={{ whiteSpace: "nowrap" }}>120,350</h3>
                  </div>
                </div>
                <div class="cards">
                  <div class="info1">
                    <p class="title" style={{ whiteSpace: "nowrap" }}>
                      North Zone
                    </p>
                    <h3 style={{ whiteSpace: "nowrap" }}>4,282 Cr</h3>
                  </div>
                </div>
                <div class="cards">
                  <div class="info1">
                    <p class="title" style={{ whiteSpace: "nowrap" }}>
                      Central Zone
                    </p>
                    <h3 style={{ whiteSpace: "nowrap" }}>7,445 Cr</h3>
                  </div>
                </div>
                <div class="cards">
                  <div class="info1">
                    <p class="title" style={{ whiteSpace: "nowrap" }}>
                      Western Zone
                    </p>
                    <h3 style={{ whiteSpace: "nowrap" }}>445.97 Cr</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="circle-3">
            <Doughnut />
          </div>

          <div className="circle-4">
            <div class="timeline">
              <div class="card">
                <div class="info">
                  <p style={{ whiteSpace: "nowrap" }}>Maruthi Motors</p>
                  <h3>7,445.97 Cr </h3>
                </div>
              </div>

              <div class="card">
                <div class="info">
                  <p style={{ whiteSpace: "nowrap" }}>Maruthi Motors</p>
                  <h3>7,445.97 Cr </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="circle-5">
            <MainLogo>
              <img src="/mm-logo.png" alt="logo" />
            </MainLogo>
          </div>
        </div>

        <div className="copyright">
          <p style={{ whiteSpace: "nowrap" }}>
            Copyright @ 2023 mahindra rise. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
