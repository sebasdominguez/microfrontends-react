import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const theme = {
  colors: {
    primary: '#68D391',
    secondary: '#FC8181',
  },
};

type NotFoundDescriptionProps = {
  isSubText?: boolean;
};

/** HEADER */
const Header_Container = styled.div`
  background: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
`;

const Header_Content = styled.div`
  max-width: 7xl;
  margin: auto;
  padding: 1rem 1rem;
  @media (min-width: 640px) {
    padding: 1.5rem 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 2rem 2rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header_TitleLink = styled(Link)`
  font-weight: bold;
  color: #4a5568;
  font-size: 2xl;
`;

const Header_NavLinkContainer = styled.div`
  display: none;
  margin-left: 2rem;
  gap: 0.75rem;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const Header_NavLink = styled(Link)`
  padding: 0.5rem 0.5rem;
  border-radius: 0.5rem;
  color: #a0aec0;
  &:hover {
    background: #f7fafc;
    color: #718096;
  }
`;
/** END HEADER */

/** HOME */
const HomePage = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
`;

const HomePage_Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const HomePage_Section = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

const HomePage_Title = styled.p`
  text-align: center;
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 1.25;
  color: #1a202c;
`;

const HomePage_ButtonContainer = styled.div`
  margin-top: 2rem;
`;

const HomePage_Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  border-radius: 0.375rem;
  padding: 0.25rem;
  color: white;
`;

const HomePage_ButtonText__primary = styled.p`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0.75rem 1.25rem;
  border-radius: 0.375rem;
  font-size: 1.25rem;
  font-weight: 500;
  cursor: pointer;
`;

const HomePage_ButtonText__secondary = styled.p`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0.75rem 1.25rem;
  border-radius: 0.375rem;
  font-size: 1.25rem;
  font-weight: 500;
  cursor: pointer;
`;

const HomePage_ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const HomePage_Image = styled.img`
  width: 20rem;
  border-radius: 0.5rem;

  @media (min-width: 1024px) {
    max-width: 40rem;
  }
`;
/** END HOME */

/** LANGUAGE SWITCHER */

const LanguageSwitcher_Container = styled.div`
  display: flex;
  margin-left: 150px;
`;

const LanguageSwitcher_Button = styled.button`
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;
/** END LANGUAGE SWITCHER */

/** LOADER */
const FullScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  height: 100vh;
  border: 4px solid;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  animation: ${spin} 1s linear infinite;
`;

const LoadingTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem; 
  font-size: 0.875rem; 
  color: #4a5568; ind color
`;

const LoadingText = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;
/** END LOADER */

/** NOT FOUND */
const NotFound_Section = styled.section`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 4rem;
  background-color: #1a202c;
  color: #f7fafc;
`;

const NotFound_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  margin: auto;
`;

const NotFound_Content = styled.div`
  max-width: 40rem;
  text-align: center;
`;

const NotFound_Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 9rem;
  font-weight: 800;
  color: #718096;

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;

const NotFound_Description = styled.p<NotFoundDescriptionProps>`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1rem;
  color: ${({ isSubText }) => (isSubText ? '#a0aec0' : 'inherit')};
`;

const BackToHomeButton = styled(Link)`
  padding: 0.75rem 2rem;
  font-weight: 600;
  border-radius: 0.375rem;
  background-color: #68d391;
  color: #1a202c;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.25);
  }
`;
/** END NOT FOUND */

export {
  theme,
  Header_NavLink,
  Header_NavLinkContainer,
  Link,
  Header_Content,
  FlexContainer,
  Header_TitleLink,
  Header_Container,
  HomePage,
  HomePage_Content,
  HomePage_Section,
  HomePage_Title,
  HomePage_ButtonContainer,
  HomePage_Button,
  HomePage_ButtonText__primary,
  HomePage_ButtonText__secondary,
  HomePage_ImagesContainer,
  HomePage_Image,
  LanguageSwitcher_Container,
  LanguageSwitcher_Button,
  LoadingText,
  LoadingTextContainer,
  Spinner,
  FullScreenContainer,
  NotFound_Section,
  NotFound_Container,
  NotFound_Content,
  NotFound_Title,
  NotFound_Description,
  BackToHomeButton,
};
