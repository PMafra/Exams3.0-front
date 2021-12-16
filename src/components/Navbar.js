import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Navbar() {
  return (
    <StyledHeader>
      <StyledTopLogoContainer>
        EXAMS 3.0
      </StyledTopLogoContainer>
      <StyledTopBarContainer>
        <Link to="/visualize">
          <StyledOption>About</StyledOption>
        </Link>
        <StyledOption>Profile</StyledOption>
        <StyledOption>Contacts</StyledOption>
        <StyledOption>Home</StyledOption>
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
