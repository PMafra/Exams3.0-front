/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import styled from 'styled-components';
import { useEffect, useContext, useState } from 'react';
import FiltersContext from '../store/FiltersContext';
import { getExams } from '../services/api';

export default function Exams() {
  const [exams, setExams] = useState([]);
  const [periods, setPeriods] = useState([]);
  const [chosenPeriod, setChosenPeriod] = useState('');
  const { filters } = useContext(FiltersContext);

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

  console.log(exams);
  return (
    <StyledPageContainer>
      <StyledMainContent>
        <StyledTitle>
          {filters.chosenProfessor ? (
            filters.chosenProfessor
          ) : (filters.chosenSubject)}
        </StyledTitle>
        {!chosenPeriod ? (
          <StyledPeriodsContainer>
            {periods.map((period) => (
              <StyledPeriod onClick={() => setChosenPeriod(period)}>
                {period}
              </StyledPeriod>
            ))}
          </StyledPeriodsContainer>
        ) : (
          <StyledExamsContainer>
            {exams.map((exam) => (
              exam.title.split('-')[0] === chosenPeriod ? (
                <StyledExamBox>
                  <StyledExam><h3>{exam.title}</h3></StyledExam>
                  <StyledExam><span>{exam.link}</span></StyledExam>
                </StyledExamBox>
              ) : ('')
            ))}
          </StyledExamsContainer>
        )}
      </StyledMainContent>
    </StyledPageContainer>
  );
}

const StyledPageContainer = styled.div`
  background: rgb(62,56,130); 
  background: linear-gradient(127deg, rgba(62,56,130,1) 0%, rgba(73,67,142,1) 0%, rgba(104,98,176,1) 7%, rgba(62,56,130,1) 39%, rgba(32,21,47,1) 100%);
  width: 100vw;
  height: 100vh;
`;
const StyledMainContent = styled.div`
  position: absolute;
  top: 150px;
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5vh;
`;
const StyledTitle = styled.h2`
    text-align: center;
    width: 100vw;
    font-size: 50px;
    color: #ffffff;
    margin-bottom: 3vh;
`;
const StyledPeriodsContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3vh;
`;
const StyledExamsContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5vh;
    text-align: left;
`;
const StyledExamBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vh;
    text-align: left;
`;
const StyledExam = styled.span`
    color: #ffffff;
    h3 {
        font-size: 25px;
    }
    span {
        font-size: 20px;
    }
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
