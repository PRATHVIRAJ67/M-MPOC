const axios = require("axios").default;
const AxiosAuthentication = require("./axiosAuthenticate.service");
const AxiosWrapper = require('../util/axiosBodyWrapper');
const config = require('../config/index');

exports.getData = async (year = '2022') => {
  try {
    const token = await AxiosAuthentication.authenticate();
    if (!token) {
      throw new Error('Token not generated...!');
    }

    const response = await axios.get(`${config.lookerURL}/looks/143`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (response.status !== 200) {
      return false;
    }

    const query = response.data.query;
    const filters = { "all_data_iter_4.date_year": year };

    const body = AxiosWrapper.createBody("mahindra_afs", query.view, query.fields, filters);
    console.log("Query Body:", body);

    const queryResult = await axios.post(`${config.lookerURL}/queries/run/json`, body, {
      headers: { Authorization: `Bearer ${token}`, },
    });

    if (!queryResult || !queryResult?.data) {
      return false;
    }

    console.log("Query Result:", queryResult.data);
    return queryResult.data;
  } catch (error) {
    console.log("catch error==", error);
    throw error;
  }
};

exports.centerVisualization = async (year = '2022') => {
  try {
    const token = await AxiosAuthentication.authenticate();
    if (!token) {
      throw new Error('Token not generated...!');
    }

    const response = await axios.get(`${config.lookerURL}/looks/137`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (response.status !== 200) {
      return false;
    }

    const query = response.data.query;
    const filters = {};

    const body = AxiosWrapper.createBody("mahindra_afs", query.view, query.fields, filters);
    console.log("Query Body:", body);

    const queryResult = await axios.post(`${config.lookerURL}/queries/run/json`, body, {
      headers: { Authorization: `Bearer ${token}`, },
    });

    if (!queryResult || !queryResult?.data) {
      return false;
    }

    console.log("Query Result:", queryResult.data);
    return queryResult.data;
  } catch (error) {
    console.log("catch error==", error);
    throw error;
  }
};
