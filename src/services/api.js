import axios from 'axios';

const API_URL = 'http://localhost:4000';

const getSchools = () => axios.get(`${API_URL}/filters/schools`);
const getCategories = () => axios.get(`${API_URL}/filters/categories`);
const getSubjectsByFilter = (school) => axios.get(`${API_URL}/filters/subjects?school=${school}`);
const getProfessorsByFilter = (school) => axios.get(`${API_URL}/filters/professors?school=${school}`);
const getProfessorsByTwoFilters = ({ school, subject }) => axios.get(`${API_URL}/filters/professors?school=${school}&subject=${subject}`);

const getExams = (body) => axios.post(`${API_URL}/exams`, body);
const sendNewExam = (body) => axios.post(`${API_URL}/exams/add`, body);

export {
  getSchools,
  getCategories,
  getProfessorsByFilter,
  getSubjectsByFilter,
  getExams,
  sendNewExam,
  getProfessorsByTwoFilters,
};
