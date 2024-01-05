const axios = require("axios");
const AxiosAuthentication = require("./axiosAuthenticate.service");

exports.getData = async (year = '2022') => {
  try {
    const token = await AxiosAuthentication.authenticate();
    if (!token) {
      return false;
    }

    const response = await axios.get(
      "https://lookerforniveus.cloud.looker.com/api/4.0/looks/143",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status !== 200) {
      return false;
    }

    const query = response.data.query;
    const body = {
      model: "mahindra_afs",
      view: query.view,
      fields: query.fields,
      /*filters: {

        "all_data_iter_4.date_year": year,
      }*/
    };
    console.log("Query Body:", body);

    const queryResult = await axios.post(
      "https://lookerforniveus.cloud.looker.com/api/4.0/queries/run/json",
      body,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!queryResult?.data) {
      return false;
    }

    console.log("Query Result:", queryResult.data);
    return queryResult.data;
  } catch (error) {
    throw error;
  }
};
