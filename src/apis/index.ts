import axios from 'axios';

// TODO : baseURL 등록
const baseURL = `#`;

export const getResult = async () => {
  const res = await axios.get(`${baseURL}/buildings`);
  return res.data;
}