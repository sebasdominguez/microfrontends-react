import rickAppInstance from '../../i18n';

const useSwitchLanguage = (language: string) => {
  rickAppInstance.changeLanguage(language);
};

export default useSwitchLanguage;
