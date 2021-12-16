import axios from 'axios';

const API_URL = 'http://localhost:4000';

// const createHeaders = (token) => ({
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });

const getFiltersInfo = () => axios.get(`${API_URL}/filters`);

export {
  getFiltersInfo,
};
