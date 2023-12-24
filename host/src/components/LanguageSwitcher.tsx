import useSwitchLanguage from '../../src/hooks/useSwitchLanguage';
import { LanguageSwitcher_Button, LanguageSwitcher_Container } from './styles';

export const LanguageSwitcher = () => {
  const { switchAllLanguages } = useSwitchLanguage();
  const handleLanguageSwitch = (lng: string) => switchAllLanguages(lng);

  return (
    <LanguageSwitcher_Container>
      <LanguageSwitcher_Button onClick={() => handleLanguageSwitch('en')}>
        English
      </LanguageSwitcher_Button>
      <LanguageSwitcher_Button onClick={() => handleLanguageSwitch('es')}>
        Español
      </LanguageSwitcher_Button>
    </LanguageSwitcher_Container>
  );
};
