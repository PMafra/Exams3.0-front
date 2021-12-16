/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-console */
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getSchools } from '../services/api';

export default function Visualize() {
  const [schoolsList, setSchoolsList] = useState([]);
  const [professorsList, setProfessorsList] = useState([]);
  const [disciplinesList, setDisciplinesList] = useState([]);
  const [typesList, setTypesList] = useState([]);
  const [semestersList, setSemestersList] = useState([]);

  const [chosenSchool, setChosenSchool] = useState(false);

  const requestSchools = () => {
    getSchools()
      .then((res) => {
        setSchoolsList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    requestSchools();
  }, []);

  const requestFilteredExams = (e) => {
    e.PreventDefault();
  };

  return (
    <StyledPageContainer>
      <StyledMainContent>
        <StyledFormContainer>
          <StyledForm onSubmit={(e) => requestFilteredExams(e)}>
            <label htmlFor="filters" className="inputs-container">
              <h2>Select the filters:</h2>
              <input list="schools" name="schools" id="filters" type="text" onKeyDown={(e) => e.preventDefault()} onSelect={(e) => setChosenSchool(e.target.value)} />
              {chosenSchool ? (
                <>
                  <input list="professors" name="professors" id="filters" type="text" onKeyDown={(e) => e.preventDefault()} />
                  <input list="types" name="types" id="filters" type="text" onKeyDown={(e) => e.preventDefault()} />
                  <input list="disciplines" name="disciplines" id="filters" type="text" onKeyDown={(e) => e.preventDefault()} />
                  <input list="semesters" name="semesters" id="filters" type="text" onKeyDown={(e) => e.preventDefault()} />
                </>
              ) : ('')}
            </label>
            <datalist id="schools">
              {schoolsList.map(({ school }) => (
                <option value={school} />
              ))}
            </datalist>
            <datalist id="professors">
              {professorsList.map((school) => (
                <option value={school} />
              ))}
            </datalist>
            <datalist id="disciplines">
              {disciplinesList.map((school) => (
                <option value={school} />
              ))}
            </datalist>
            <datalist id="types">
              {typesList.map((school) => (
                <option value={school} />
              ))}
            </datalist>
            <datalist id="semesters">
              {semestersList.map((school) => (
                <option value={school} />
              ))}
            </datalist>
            <input type="submit" className="submit" />
          </StyledForm>
        </StyledFormContainer>
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
const StyledFormContainer = styled.div`
  width: 100vw;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10vh;
  .inputs-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5vh;
    h2 {
      color: #ffffff;
      font-size: 30px;
      margin-bottom:2vh;
    }
    input {
      width: 350px;
      height: 40px;
      border-radius: 20px;
      border: none;
      padding: 0 15px;
      font-size: 20px;
      :focus {
        outline: none;
      }
    }
  }
  .submit {
    width: 200px;
    height:70px;
    border-radius: 60px;
    background-color: #bfbafc;
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    cursor: pointer;
    border: none;
    &:hover {
      opacity: 0.8;
    }
  }
`;
