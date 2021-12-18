/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-console */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import {
  getSchools, getCategories, getProfessorsByFilter, getSubjectsByFilter,
} from '../services/api';
import FiltersContext from '../store/FiltersContext';
import { StyledPageContainer, StyledMainContent } from '../assets/styles/PageContainerStyle';

export default function Filters() {
  const [schoolsList, setSchoolsList] = useState([]);
  const [professorsList, setProfessorsList] = useState([]);
  const [subjectsList, setSubjectsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);

  const [chosenSchool, setChosenSchool] = useState('');
  const [chosenProfessor, setChosenProfessor] = useState('');
  const [chosenCategory, setChosenCategory] = useState('');
  const [chosenSubject, setChosenSubject] = useState('');

  const [isProfessorFilter, setIsProfessorFilter] = useState(true);
  const [isSubjectFilter, setIsSubjectFilter] = useState(false);

  const [isSubmit, setIsSubmit] = useState(false);

  const { setFilters } = useContext(FiltersContext);

  console.log({ chosenProfessor, chosenCategory, chosenSubject });

  const requestSchools = () => {
    getSchools()
      .then((res) => {
        setSchoolsList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const requestCategories = () => {
    getCategories()
      .then((res) => {
        setCategoriesList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const requestProfessorsBySchool = () => {
    const body = {
      chosenSchool,
    };
    getProfessorsByFilter(body)
      .then((res) => {
        setProfessorsList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const requestSubjectsBySchool = () => {
    const body = {
      chosenSchool,
    };
    getSubjectsByFilter(body)
      .then((res) => {
        setSubjectsList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    requestSchools();
    requestCategories();
  }, []);

  useEffect(() => {
    requestProfessorsBySchool();
    requestSubjectsBySchool();
  }, [chosenSchool]);

  const defineFilter = () => {
    setIsProfessorFilter(!isProfessorFilter);
    setIsSubjectFilter(!isSubjectFilter);
    setChosenSubject('');
    setChosenCategory('');
    setChosenProfessor('');
    setIsSubmit(false);
  };

  if ((chosenProfessor && chosenCategory && !isSubmit)
    || (chosenSubject && chosenCategory && !isSubmit)) {
    setIsSubmit(true);
  }

  const submitRequest = () => {
    setFilters({
      chosenSchool,
      chosenCategory,
      chosenProfessor,
      chosenSubject,
    });
  };

  return (
    <StyledPageContainer>
      <StyledMainContent className="main">
        <StyledFormContainer>
          <StyledForm>
            <label htmlFor="filters" className="inputs-container">
              <h2>Select the filters:</h2>
              <div className="input-box">
                <input placeholder="School" list="schools" name="schools" id="filters" type="text" onKeyDown={(e) => e.preventDefault()} onSelect={(e) => setChosenSchool(e.target.value)} />
                <IoCloseCircleOutline className="x-icon" onClick={() => window.location.reload()} />
              </div>
              {chosenSchool !== '' ? (
                <>
                  <StyledPublicButtonsContainer
                    isSubjectFilter={isSubjectFilter}
                    isProfessorFilter={isProfessorFilter}
                  >
                    <StyledButton
                      className="professor"
                      onClick={() => defineFilter()}
                    >
                      Filter by professor
                    </StyledButton>
                    <StyledButton
                      className="subject"
                      onClick={() => defineFilter()}
                    >
                      Filter by subject
                    </StyledButton>
                  </StyledPublicButtonsContainer>
                  {isProfessorFilter ? (
                    <>
                      <input placeholder="Professor" list="professors" name="professors" id="filters" type="text" onKeyDown={(e) => e.preventDefault()} onSelect={(e) => setChosenProfessor(e.target.value)} />
                      <input placeholder="Category" list="categories" name="categories" id="filters" type="text" onKeyDown={(e) => e.preventDefault()} onSelect={(e) => setChosenCategory(e.target.value)} />
                    </>
                  ) : ('')}
                  {isSubjectFilter ? (
                    <>
                      <input placeholder="subject" list="subjects" name="subjects" id="filters" type="text" onKeyDown={(e) => e.preventDefault()} onSelect={(e) => setChosenSubject(e.target.value)} />
                      <input placeholder="Category" list="categories" name="categories" id="filters" type="text" onKeyDown={(e) => e.preventDefault()} onSelect={(e) => setChosenCategory(e.target.value)} />
                    </>
                  ) : ('')}
                </>
              ) : ('')}
            </label>
            <datalist id="schools">
              {schoolsList.map(({ school }) => (
                <option value={school} />
              ))}
            </datalist>
            <datalist id="professors">
              {professorsList.map(({ professor }) => (
                <option value={professor} />
              ))}
            </datalist>
            <datalist id="subjects">
              {subjectsList.map(({ subject }) => (
                <option value={subject} />
              ))}
            </datalist>
            <datalist id="categories">
              {categoriesList.map(({ category }) => (
                <option value={category} />
              ))}
            </datalist>
            {isSubmit ? (
              <Link to="/visualize/exams" onClick={() => submitRequest()}>
                <input type="submit" className="submit" />
              </Link>
            ) : ('')}
          </StyledForm>
        </StyledFormContainer>
      </StyledMainContent>
    </StyledPageContainer>
  );
}

const StyledFormContainer = styled.div`
  width: 100vw;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7vh;
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
    .input-box {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    .x-icon {
      font-size: 45px;
      color: red;
      cursor: pointer;
    }
    }
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
const StyledPublicButtonsContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  gap: 18vw;
  .login {
    color: #434871;
  }
  .professor {
    background-color: ${({ isProfessorFilter }) => (isProfessorFilter ? ('#bfbafc') : ('#878787'))};
  }
  .subject {
    background-color: ${({ isSubjectFilter }) => (isSubjectFilter ? ('#bfbafc') : ('#878787'))};
  }
`;
const StyledButton = styled.div`
  padding: 0 20px;
  width: 200px;
  height:70px;
  border-radius: 60px;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
  &:hover {
    opacity: 0.8;
  }
`;
