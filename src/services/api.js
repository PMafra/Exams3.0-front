import axios from 'axios';

const API_URL = 'http://localhost:4000';

const getSchools = () => axios.get(`${API_URL}/filters/schools`);
const getCategories = () => axios.get(`${API_URL}/filters/categories`);
const getProfessorsByFilter = (body) => axios.post(`${API_URL}/filters/professors`, body);
const getSubjectsByFilter = (body) => axios.post(`${API_URL}/filters/subjects`, body);
const getExams = (body) => axios.post(`${API_URL}/exams`, body);
const sendNewExam = (body) => axios.post(`${API_URL}/exams/add`, body);

export {
  getSchools,
  getCategories,
  getProfessorsByFilter,
  getSubjectsByFilter,
  getExams,
  sendNewExam,
};
