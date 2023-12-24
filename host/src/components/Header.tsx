import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

import {
  Header_Container,
  Header_Content,
  FlexContainer,
  Header_TitleLink,
  Header_NavLinkContainer,
  Header_NavLink,
} from './styles';
import { useMicrofrontendStatus } from '../hooks/useMicrofrontendStatus';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const { isHarryPotterMFAlive, isRickAndMortyMFAlive } =
    useMicrofrontendStatus();

  return (
    <Header_Container>
      <Header_Content>
        <FlexContainer>
          <Header_TitleLink to='/'>
            <h1> {t('title')} </h1>
          </Header_TitleLink>
          <Header_NavLinkContainer>
            {isHarryPotterMFAlive && (
              <Header_NavLink to='/harry-potter'>Harry Potter</Header_NavLink>
            )}
            {isRickAndMortyMFAlive && (
              <Header_NavLink to='/rick-and-morty'>
                Rick and Morty
              </Header_NavLink>
            )}
          </Header_NavLinkContainer>
          <LanguageSwitcher />
        </FlexContainer>
      </Header_Content>
    </Header_Container>
  );
};
