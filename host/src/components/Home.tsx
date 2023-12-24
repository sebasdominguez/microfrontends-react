import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import harryCharacters from '../assets/images/harry-chars.jpeg';
import rickCharacters from '../assets/images/rick-chars.jpg';

import {
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
  theme,
} from './styles';
import { useMicrofrontendStatus } from '../hooks/useMicrofrontendStatus';

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const { isHarryPotterMFAlive, isRickAndMortyMFAlive } =
    useMicrofrontendStatus();

  return (
    <HomePage>
      {isHarryPotterMFAlive && (
        <HomePage_Content>
          <HomePage_Section>
            <HomePage_Title>Harry Potter</HomePage_Title>
            {t('harry_about')}
            <HomePage_ButtonContainer>
              <Link to='/harry-potter'>
                <HomePage_Button theme={{ colors: theme.colors }}>
                  <HomePage_ButtonText__primary
                    theme={{ colors: theme.colors }}
                  >
                    {t('home_button')}
                  </HomePage_ButtonText__primary>
                  <svg
                    className='dark:text-gray-900'
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6.66663 16H25.3333'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M20 21.3333L25.3333 16'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M20 10.6667L25.3333 16'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </HomePage_Button>
              </Link>
            </HomePage_ButtonContainer>
          </HomePage_Section>

          <HomePage_ImagesContainer>
            <Link to='/harry-potter'>
              <HomePage_Image src={harryCharacters} alt='harry-potter' />
            </Link>
          </HomePage_ImagesContainer>
        </HomePage_Content>
      )}
      {isRickAndMortyMFAlive && (
        <HomePage_Content>
          <HomePage_Section>
            <HomePage_Title>Rick and Morty</HomePage_Title>
            {t('rick_about')}
            <HomePage_ButtonContainer>
              <Link to='/rick-and-morty'>
                <HomePage_Button theme={{ colors: theme.colors }}>
                  <HomePage_ButtonText__secondary
                    theme={{ colors: theme.colors }}
                  >
                    {t('home_button')}
                  </HomePage_ButtonText__secondary>
                  <svg
                    className='dark:text-gray-900'
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6.66663 16H25.3333'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M20 21.3333L25.3333 16'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M20 10.6667L25.3333 16'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </HomePage_Button>
              </Link>
            </HomePage_ButtonContainer>
          </HomePage_Section>
          <HomePage_ImagesContainer>
            <Link to='/rick-and-morty'>
              <HomePage_Image src={rickCharacters} alt='rick-and-morty' />
            </Link>
          </HomePage_ImagesContainer>
        </HomePage_Content>
      )}
    </HomePage>
  );
};
