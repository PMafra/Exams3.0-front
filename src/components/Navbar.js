import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <StyledTopLogoContainer>
        EXAMS 3.0
      </StyledTopLogoContainer>
      <StyledTopBarContainer>
        <StyledOption>About</StyledOption>
        <StyledOption>Profile</StyledOption>
        <StyledOption onClick={() => navigate('/')}>
          Home
        </StyledOption>
      </StyledTopBarContainer>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  position: fixed;
`;
const StyledTopLogoContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  font-size: 50px;
  color: #ffffff;
  font-style: italic;
`;
const StyledTopBarContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  gap: 2vw;
`;
const StyledOption = styled.div`
  color: #ffffff;
  font-size: 18px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  cursor: pointer;
  &:hover {
    background-color: #bfbafc;
    border-radius: 60px;
  }
`;
