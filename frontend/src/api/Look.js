import axios from "axios";

const url = "http://localhost:3003";
export const getData = async () => {
  const selectedYear = localStorage.getItem("selectedyear");
  console.log('selectedYear',selectedYear)
  let changeyear = +selectedYear
  console.log('test' ,changeyear,typeof(changeyear))
  try {
    console.log("called get-data");
    let response = await axios.get(`${url}/get-data`);

    return response.data;
  } catch (err) {
    console.log("Error fetching data:", err.message);
  }
};


export const centerVisualization = async () => {
  try {
    console.log("called center Visualization");
    let response = await axios.get(`${url}/get-data-center-visualization`);

    return response.data;
  } catch (err) {
    console.log("Error fetching data:", err.message);
  }
};
export const salesTrendZoneWise = async () => {
  try {
    console.log("called sales trend zone wise");
    let response = await axios.get(`${url}/get-data-sales-trend-zone-wise`);

    return response.data;
  } catch (err) {
    console.log("Error fetching data:", err.message);
  }
};

export const funnelData = async () => {
  try {
    console.log("called Funnel Data");
    let response = await axios.get(`${url}/get-data-funnel`);

    return response.data;
  } catch (err) {
    console.log("Error fetching data:", err.message);
  }
};

export const funnelEntityData = async () => {
  try {
    console.log("called Funnel Entity Data");
    let response = await axios.get(`${url}/get-data-funnel-entity`);

    return response.data;
  } catch (err) {
    console.log("Error fetching data:", err.message);
  }
};

export const entityPercentDifference = async () => {
  try {
    console.log("called Entity Percent Data");
    let response = await axios.get(`${url}/get-data-entity-percent-difference`);

    return response.data;
  } catch (err) {
    console.log("Error fetching data:", err.message);
  }
};
