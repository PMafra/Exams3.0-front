/* eslint-disable react/prop-types */
import styled from 'styled-components';

export default function Exam({ title, link }) {
  return (
    <StyledExamBox>
      <StyledExam>
        <h3>
          {title}
        </h3>
      </StyledExam>
      <StyledExam>
        <a href={link} target="_blanck">
          {link}
        </a>
      </StyledExam>
    </StyledExamBox>
  );
}

const StyledExamBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vh;
    text-align: left;
`;
const StyledExam = styled.span`
    color: #ffffff;
    max-width: 850px;
    h3 {
        font-size: 25px;
    }
    a {
        color: #ffffff;
        font-size: 20px;
        :hover {
            color: green;
        }
    }
`;
