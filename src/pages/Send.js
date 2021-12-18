/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import {
  getSchools, getCategories, getProfessorsByFilter, getSubjectsByFilter, sendNewExam,
} from '../services/api';
import { StyledPageContainer, StyledMainContent } from '../assets/styles/PageContainerStyle';
import { StyledFormContainer, StyledForm } from '../assets/styles/FormsStyle';

export default function Send() {
  const [schoolsList, setSchoolsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [subjectsList, setSubjectsList] = useState([]);
  const [professorsList, setProfessorsList] = useState([]);

  const [chosenSchool, setChosenSchool] = useState('');
  const [chosenProfessor, setChosenProfessor] = useState('');
  const [chosenCategory, setChosenCategory] = useState('');
  const [chosenSubject, setChosenSubject] = useState('');

  const [newExamTitle, setNewExamTitle] = useState('');
  const [newExamUrl, setNewExamUrl] = useState('');

  const [isSubmit, setIsSubmit] = useState(false);

  const [isFinished, setIsFinished] = useState(false);

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

  const requestProfessorsBySchoolAndSubject = () => {
    const body = {
      chosenSchool,
      chosenSubject,
    };
    getProfessorsByFilter(body)
      .then((res) => {
        setProfessorsList(res.data);
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
    requestSubjectsBySchool();
  }, [chosenSchool]);

  useEffect(() => {
    requestProfessorsBySchoolAndSubject();
  }, [chosenSubject]);

  const validateUrlExtension = () => {
    const extensions = ['doc', 'docx', 'html', 'htm', 'odt', 'pdf', 'xls', 'xlsx', 'ods', 'ppt', 'pptx', 'txt'];
    const urlArray = newExamUrl.split('.');
    const extension = urlArray[urlArray.length - 1];
    for (let i = 0; i < extensions.length; i++) {
      if (extension === `${extensions[i]}`) {
        return true;
      }
    }
    return false;
  };

  const validateTitle = () => {
    if (newExamTitle.split('-').length === 2) {
      return true;
    }
    return false;
  };

  const submitRequest = () => {
    const isValidUrl = validateUrlExtension();
    const isValidTitle = validateTitle();
    if (isValidUrl && isValidTitle) {
      console.log('finalizou');

      const newExam = {
        newExamTitle,
        newExamUrl,
        chosenCategory,
        chosenProfessor,
        chosenSubject,
        chosenSchool,
      };

      sendNewExam(newExam)
        .then((res) => {
          console.log(res.data);
          setIsFinished(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  if (chosenProfessor && chosenCategory && chosenSubject && !isSubmit) {
    setIsSubmit(true);
  }

  return (
    <StyledPageContainer>
      <StyledMainContent className="main">
        <StyledFormContainer>
          <StyledForm>
            <label htmlFor="filters" className="inputs-container">
              <h2>Select the options:</h2>
              <div className="input-box">
                <input placeholder="School" list="schools" name="schools" id="filters" type="text" onKeyDown={(e) => e.preventDefault()} onSelect={(e) => setChosenSchool(e.target.value)} />
                <IoCloseCircleOutline className="x-icon" onClick={() => window.location.reload()} />
              </div>
              {chosenSchool ? (
                <>
                  <input placeholder="Category" list="categories" name="categories" id="filters" type="text" onKeyDown={(e) => e.preventDefault()} onSelect={(e) => setChosenCategory(e.target.value)} />
                  <input placeholder="subject" list="subjects" name="subjects" id="filters" type="text" onKeyDown={(e) => e.preventDefault()} onSelect={(e) => setChosenSubject(e.target.value)} />
                </>
              ) : ('')}
              {chosenSubject ? (
                <input placeholder="Professor" list="professors" name="professors" id="filters" type="text" onKeyDown={(e) => e.preventDefault()} onSelect={(e) => setChosenProfessor(e.target.value)} />
              ) : ('')}
              {chosenProfessor ? (
                <>
                  <input placeholder="Exam url" id="url" type="text" onChange={(e) => setNewExamUrl(e.target.value)} required />
                  <input placeholder="Exam title" id="title" type="text" onChange={(e) => setNewExamTitle(e.target.value)} required />
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
            {isSubmit && !isFinished ? (
              <div className="submit-button" onClick={() => submitRequest()}>
                Submit
              </div>
            ) : ('')}
            {isFinished ? (
              <StyledFinishedMessage>
                <p>
                  Exam added Successfully!
                </p>
                <div className="timer-wrapper">
                  <CountdownCircleTimer
                    isPlaying
                    duration={5}
                    colors={[
                      ['#ffffff'],
                    ]}
                    size={70}
                    trailColor="#271D42"
                    strokeWidth={4}
                    onComplete={() => window.location.reload()}
                  >
                    {({ remainingTime }) => remainingTime}
                  </CountdownCircleTimer>
                </div>
              </StyledFinishedMessage>
            ) : ('')}
          </StyledForm>
        </StyledFormContainer>
      </StyledMainContent>
    </StyledPageContainer>
  );
}

const StyledFinishedMessage = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  font-size: 25px;
  p {
    color: green;
  }
`;
