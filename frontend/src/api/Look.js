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
