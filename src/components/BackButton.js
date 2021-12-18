/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoArrowBackCircleSharp } from 'react-icons/io5';

export default function BackButton({ chosenPeriod, setChosenPeriod }) {
  const navigate = useNavigate();

  const backScreen = () => {
    if (chosenPeriod) {
      setChosenPeriod('');
    } else {
      navigate(-1);
    }
  };
  return (
    <StyledBackButton>
      <StyledBackIcon onClick={() => backScreen()}>
        Back
      </StyledBackIcon>
    </StyledBackButton>
  );
}

const StyledBackButton = styled.div`
    width: 100vw;
    max-width: 600px;
    height: 50px;
`;
const StyledBackIcon = styled(IoArrowBackCircleSharp)`
    font-size: 50px;
    cursor: pointer;
`;
