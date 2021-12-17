import axios from 'axios';

const API_URL = 'http://localhost:4000';

// const createHeaders = (token) => ({
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });

const getSchools = () => axios.get(`${API_URL}/filters/schools`);
const getCategories = () => axios.get(`${API_URL}/filters/categories`);
const getProfessorsBySchool = (body) => axios.post(`${API_URL}/filters/professors`, body);
const getSubjectsBySchool = (body) => axios.post(`${API_URL}/filters/subjects`, body);
const getExams = (body) => axios.post(`${API_URL}/exams`, body);

export {
  getSchools,
  getCategories,
  getProfessorsBySchool,
  getSubjectsBySchool,
  getExams,
};
