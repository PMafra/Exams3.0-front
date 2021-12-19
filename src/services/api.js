/* eslint-disable no-console */
import axios from 'axios';

const API_URL = 'http://localhost:4000';

const getSchools = () => axios.get(`${API_URL}/filters/schools`);
const getCategories = () => axios.get(`${API_URL}/filters/categories`);
const getSubjects = ({ school }) => axios.get(`${API_URL}/filters/subjects?school=${school}`);
const getProfessors = ({
  school, subject,
}) => axios.get(`${API_URL}/filters/professors?school=${school}&subject=${subject}`);
const getExams = ({
  school, category, professor, subject,
}) => axios.get(`${API_URL}/exams?school=${school}&category=${category}&professor=${professor}&subject=${subject}`);
const sendNewExam = (body) => axios.post(`${API_URL}/exams`, body);

export {
  getSchools,
  getCategories,
  getSubjects,
  getExams,
  sendNewExam,
  getProfessors,
};
