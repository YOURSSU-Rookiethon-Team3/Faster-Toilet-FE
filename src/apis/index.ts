import axios from 'axios';

const baseURL = `https://yourssu-faster-toilet-api.hyuns.dev`;

export const getBuildingList = async () => {
  try {
    const response = await axios.get(`${baseURL}/buildings`);
    return response.data;
  } catch (error) {
    console.error('Error fetching building list:', error);
    throw error;
  }
};

export const postVisitor = async () => {
  try {
    const response = await axios.post(`${baseURL}/visitors`);
    return response.data;
  } catch (error) {
    console.error('Error post visitors: ', error);
    throw error;
  }
};

export const getVisitor = async () => {
  try {
    const response = await axios.get(`${baseURL}/visitors`);
    return response.data;
  } catch (error) {
    console.error('Error get visitors: ', error);
    throw error;
  }
};
