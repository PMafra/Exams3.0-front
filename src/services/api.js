/* eslint-disable no-console */
import axios from 'axios';

const API_URL = 'http://localhost:4000';

const getSchools = () => axios.get(`${API_URL}/filters/schools`);
const getCategories = () => axios.get(`${API_URL}/filters/categories`);
const getSubjectsByFilter = ({ school }) => axios.get(`${API_URL}/filters/subjects?school=${school}`);
const getProfessors = ({ school, subject }) => {
  let appendUrl = '';
  if (school) {
    if (appendUrl.length > 0) {
      appendUrl += '&';
    } else {
      appendUrl += '?';
    }
    appendUrl += `school=${school}`;
  }
  if (subject) {
    if (appendUrl.length > 0) {
      appendUrl += '&';
    } else {
      appendUrl += '?';
    }
    appendUrl += `subject=${subject}`;
  }
  console.log(`${API_URL}/filters/professors${appendUrl}`);
  return axios.get(`${API_URL}/filters/professors${appendUrl}`);
};

const getExams = (body) => axios.post(`${API_URL}/exams`, body);
const sendNewExam = (body) => axios.post(`${API_URL}/exams/add`, body);

export {
  getSchools,
  getCategories,
  getSubjectsByFilter,
  getExams,
  sendNewExam,
  getProfessors,
};
