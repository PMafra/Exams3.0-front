/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import styled from 'styled-components';
import {
  useEffect, useContext, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import FiltersContext from '../store/FiltersContext';
import { getExams } from '../services/api';
import { StyledPageContainer, StyledMainContent, StyledGenericContainer } from '../assets/styles/PageContainerStyle';
import { StyledButton, StyledPublicButtonsContainer } from '../assets/styles/ButtonStyle';
import Exam from '../components/Exam';
import BackButton from '../components/BackButton';

export default function Exams() {
  const [exams, setExams] = useState([]);
  const [periods, setPeriods] = useState([]);
  const [chosenPeriod, setChosenPeriod] = useState('');
  const { filters } = useContext(FiltersContext);
  const navigate = useNavigate();

  const definePeriods = (allExams) => {
    const newPeriods = [];
    allExams.forEach((exam) => {
      const newPeriod = exam.title.split('-')[0];
      newPeriods.push(newPeriod);
    });
    setPeriods(newPeriods);
  };

  const requestFilteredExams = () => {
    const body = {
      filters,
    };
    getExams(body)
      .then((res) => {
        setExams(res.data);
        definePeriods(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    requestFilteredExams();
  }, []);

  return (
    <StyledPageContainer>
      <StyledMainContent className="exams">
        <StyledGenericContainer className="main">
          <BackButton setChosenPeriod={setChosenPeriod} chosenPeriod={chosenPeriod} />
        </StyledGenericContainer>
        <StyledTitle>
          {filters.chosenProfessor ? (filters.chosenProfessor) : (filters.chosenSubject)}
        </StyledTitle>
        {!chosenPeriod ? (
          <StyledGenericContainer className="main">
            {periods.map((period) => (
              <StyledPeriod onClick={() => setChosenPeriod(period)}>
                {period}
              </StyledPeriod>
            ))}
          </StyledGenericContainer>
        ) : (
          <StyledGenericContainer className="exams">
            {exams.map(({ title, link }) => (
              title.split('-')[0] === chosenPeriod ? (
                <Exam title={title} link={link} />
              ) : ('')
            ))}
          </StyledGenericContainer>
        )}
        {exams.length === 0 ? (
          <StyledGenericContainer className="no-content">
            <p>
              {`We still dont have ${filters.chosenCategory} exams of ${filters.chosenProfessor ? (
                filters.chosenProfessor
              ) : (
                filters.chosenSubject
              )}`}
            </p>
            <StyledPublicButtonsContainer>
              <StyledButton className="main" onClick={() => navigate('/send')}>
                Send an exam
              </StyledButton>
            </StyledPublicButtonsContainer>
          </StyledGenericContainer>
        ) : ('')}
      </StyledMainContent>
    </StyledPageContainer>
  );
}

const StyledTitle = styled.h2`
  text-align: center;
  width: 100vw;
  font-size: 50px;
  color: #ffffff;
  margin-bottom: 3vh;
`;
const StyledPeriod = styled.span`
  color: #ffffff;
  font-size: 25px;
  cursor: pointer;
  :hover {
    color: green;
    text-decoration: underline;
    text-underline-offset: 5px;
  }
`;
