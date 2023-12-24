import harryAppInstance from '../../i18n';

const useSwitchLanguage = (language: string) => {
  harryAppInstance.changeLanguage(language);
};

export default useSwitchLanguage;
