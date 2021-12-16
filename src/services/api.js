import axios from 'axios';

const API_URL = 'http://localhost:4000';

// const createHeaders = (token) => ({
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });

const getSchools = () => axios.get(`${API_URL}/filters/schools`);

export {
  getSchools,
};
