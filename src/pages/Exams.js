/* eslint-disable no-console */
import styled from 'styled-components';
import { useEffect, useContext } from 'react';
import FiltersContext from '../store/FiltersContext';

export default function Exams() {
  const { filters } = useContext(FiltersContext);
  console.log(filters);
  const requestFilteredExams = () => {

  };

  useEffect(() => {
    requestFilteredExams();
  }, []);
  return (
    <StyledPageContainer>
      <StyledMainContent>
        oi
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
