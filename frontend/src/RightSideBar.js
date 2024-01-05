import "./RightSideBar.css";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "2020",
    Mahindra: 3000,
    Maruthi: 3000,
    Tata: 3000,
  },
  {
    name: "2021",
    Mahindra: 3600,
    Maruthi: 3200,
    Tata: 3900,
  },
  {
    name: "2022",
    Mahindra: 4400,
    Maruthi: 3800,
    Tata: 4200,
  },
  {
    name: "2023",
    Mahindra: 4500,
    Maruthi: 3700,
    Tata: 4200,
  },
  {
    name: "2024",
    Mahindra: 4000,
    Maruthi: 4800,
    Tata: 4300,
  },
  {
    name: "2025",
    Mahindra: 4300,
    Maruthi: 4600,
    Tata: 3900,
  },
  {
    name: "2026",
    Mahindra: 4000,
    Maruthi: 4000,
    Tata: 4000,
  },
];
const RightSideBar = () => {
  const [opacity, setOpacity] = useState({
    Mahindra: 1,
    Maruthi: 1,
    Tata: 1,
  });

  return (
    <>
      <div className="rightsidebar">
        <div className="rightbar__topcontainer">
          <div className="rightbar__top">
            <p>Competitors analysis</p>
            <div className="topicons">
              <FileDownloadOutlinedIcon />
              <MoreVertOutlinedIcon />
            </div>
          </div>
          <div className="rightbar__options">
            <div className="optionscontainer">
              <select name="vehiles" id="vehicle">
                <option value="allvehicles">All vehicles</option>
                <option value="diesel">Diesel</option>
                <option value="petrol">Petrol</option>
              </select>
            </div>
            
          </div>
          <div className="radiobutton">
            <div className="first-line">
              <input
                type="radio"
                id="mahindra"
                name="brand_name"
                value="Mahindra"
              />
              <label htmlFor="html">Mahindra</label>
              <input
                type="radio"
                id="tata"
                name="brand_name"
                value="Tata Motors"
              />
              <label htmlFor="css">Tata Motors</label>
            </div>
            <div className="second-line">
              <input
                type="radio"
                id="maruthi"
                name="brand_name"
                value="Maruthi"
              />
              <label htmlFor="Maruthi">Maruthi</label>
             
            </div>
          </div>
          <hr></hr>
          <div className="rightbarbottomcontainer">
            <div className="brandname">
              <p>Mahindra & Mahindra</p>
            </div>

            <div className="rightbarbottom__options">
              <div className="options1container">
                <select name="vehiles" id="vehicle">
                  <option value="allvehicles">Petrol</option>
                  <option value="diesel">Diesel</option>
                  <option value="Electric">Electric</option>
                </select>
              </div>
              <div>
                <div className="options2container">
                  <select name="duration" id="duration">
                    <option value="Yearly">Yearly</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                </div>
              </div>

              <div className="options3container">
                <select name="region" id="region">
                  <option value="region">Region</option>
                  <option value="north">Northern </option>
                  <option value="central">Central</option>
                  <option value="South">Southern</option>
                  <option value="east">Eastern</option>
                  <option value="northeast">NorthEast</option>
                  <option value="west">Western</option>
                </select>
              </div>
            </div>
            <div className="data">
              <div className="datafirst-line">
                <p>Total Sale</p>
                <p>Sales Target</p>
              </div>
              <div className="datasecond-line">
                <h5>121,987 Cr</h5>
                <h5>621,987 Cr</h5>
              </div>
              <div className="datafirst-line">
                <p>Total revenue</p>
                <p>Contribution</p>
              </div>
              <div className="datasecond-line">
                <h5>521,987 Cr</h5>
                <h5>18%</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="competitorgraph" style={{ width: "100%" }}>
          <p>Competitors analysis</p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 20,
                left: 20,
                bottom: 0,
              }}
              fill="transparent"
            >
              <Tooltip />
              <Line
                type="monotone"
                dataKey="Mahindra"
                strokeOpacity={opacity.Mahindra}
                stroke="#FA5775"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="Tata"
                strokeOpacity={opacity.Maruthi}
                stroke="#6DCAFE"
              />
              <Line
                type="monotone"
                dataKey="Maruthi"
                strokeOpacity={opacity.Maruthi}
                stroke="#BB79E2"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p style={{ whiteSpace: "nowrap" }}>
          <span className="year">2020 </span>
          <span className="year">2021 </span>
          <span className="year">2022 </span>
          <span className="year">2023 </span>
        </p>
      </div>
    </>
  );
};
export default RightSideBar;