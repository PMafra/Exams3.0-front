/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import {
  getSchools, getCategories, getSubjects, sendNewExam, getProfessors,
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
  const [isWrongUrl, setIsWrongUrl] = useState(false);
  const [isWrongTitle, setIsWrongTitle] = useState(false);

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
    getSubjects({ school: chosenSchool })
      .then((res) => {
        setSubjectsList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const requestProfessorsBySchoolAndSubject = () => {
    const filters = {
      school: chosenSchool,
      subject: chosenSubject,
    };
    getProfessors(filters)
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

  const validateUrl = () => {
    const extensions = ['doc', 'docx', 'html', 'htm', 'odt', 'pdf', 'xls', 'xlsx', 'ods', 'ppt', 'pptx', 'txt'];
    const urlArray = newExamUrl.split('.');
    if (urlArray[urlArray.length - 2].length > 0) {
      const extension = urlArray[urlArray.length - 1];
      for (let i = 0; i < extensions.length; i++) {
        if (extension === `${extensions[i]}`) {
          return true;
        }
      }
    }
    setIsWrongUrl(true);
    setTimeout(() => setIsWrongUrl(false), 3000);
    return false;
  };

  const validateTitle = () => {
    const titleArr = newExamTitle.split('-');
    const title = titleArr[1].trim();
    const yearAndPeriod = titleArr[0].trim();
    const year = yearAndPeriod.split('.')[0];
    const period = yearAndPeriod.split('.')[1];
    if (!Number(yearAndPeriod) || year.length !== 4 || period.length !== 1 || title.length === 0
    || Number(period) < 1 || Number(period) > 3 || Number(year) > new Date().getFullYear()) {
      setIsWrongTitle(true);
      setTimeout(() => setIsWrongTitle(false), 3000);
      return false;
    }
    return true;
  };

  const submitRequest = () => {
    const isValidUrl = validateUrl();
    const isValidTitle = validateTitle();
    if (!isValidUrl || !isValidTitle) {
      return false;
    }
    const newExam = {
      newExamTitle,
      newExamUrl,
      chosenCategory,
      chosenProfessor,
      chosenSubject,
      chosenSchool,
    };
    sendNewExam(newExam)
      .then(() => {
        setIsFinished(true);
      })
      .catch((err) => {
        console.log(err);
      });
    return true;
  };

  const submitWithEnter = (e) => {
    if (e.keyCode === 13) {
      submitRequest();
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
                <input
                  placeholder="School"
                  list="schools"
                  name="schools"
                  id="filters"
                  type="text"
                  onKeyDown={(e) => e.preventDefault()}
                  onSelect={(e) => setChosenSchool(e.target.value)}
                />
                <IoCloseCircleOutline
                  className="x-icon"
                  onClick={() => window.location.reload()}
                />
              </div>
              {chosenSchool ? (
                <>
                  <input
                    placeholder="Category"
                    list="categories"
                    name="categories"
                    id="filters"
                    type="text"
                    onKeyDown={(e) => e.preventDefault()}
                    onSelect={(e) => setChosenCategory(e.target.value)}
                  />
                  <input
                    placeholder="subject"
                    list="subjects"
                    name="subjects"
                    id="filters"
                    type="text"
                    onKeyDown={(e) => e.preventDefault()}
                    onSelect={(e) => setChosenSubject(e.target.value)}
                  />
                </>
              ) : ('')}
              {chosenSubject ? (
                <input
                  placeholder="Professor"
                  list="professors"
                  name="professors"
                  id="filters"
                  type="text"
                  onKeyDown={(e) => e.preventDefault()}
                  onSelect={(e) => setChosenProfessor(e.target.value)}
                />
              ) : ('')}
              {chosenProfessor ? (
                <>
                  <div className="input-with-message">
                    <input
                      placeholder="Exam url"
                      id="url"
                      type="text"
                      onChange={(e) => setNewExamUrl(e.target.value)}
                      required
                    />
                    <StyledDescriptionUrl isWrongUrl={isWrongUrl}>
                      * The url must be in one of the following formats:
                      doc, docx, html, htm, odt, pdf, xls,
                      xlsx, ods, ppt, pptx, txt
                    </StyledDescriptionUrl>
                  </div>
                  <div className="input-with-message">
                    <input
                      placeholder="Exam title"
                      id="title"
                      type="text"
                      onChange={(e) => setNewExamTitle(e.target.value)}
                      required
                    />
                    <StyledDescriptionTitle isWrongTitle={isWrongTitle}>
                      * The title must be in the following format:
                      <br />
                      classYear.classPeriod - classTitle
                      <br />
                      With classPeriod being number 1, 2 or 3
                      <br />
                      E.g.: 2021.2 - Introduction to Python
                    </StyledDescriptionTitle>
                  </div>
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
              <div
                role="button"
                tabIndex="0"
                className="submit-button"
                onClick={() => submitRequest()}
                onKeyDown={(e) => submitWithEnter(e)}
              >
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
                    colors={[['#ffffff']]}
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
const StyledDescriptionTitle = styled.p`
      line-height: 18px;
      opacity: 0.7;
      width: 350px;
      color: ${({ isWrongTitle }) => (isWrongTitle ? 'red' : '#ffffff')};
`;
const StyledDescriptionUrl = styled.p`
      line-height: 18px;
      opacity: 0.7;
      width: 350px;
      color: ${({ isWrongUrl }) => (isWrongUrl ? 'red' : '#ffffff')};
`;
