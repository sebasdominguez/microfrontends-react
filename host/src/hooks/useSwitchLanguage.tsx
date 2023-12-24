import hostAppInstance from '../../i18n';

let switchHarryAppLanguageHook: any;
let switchRickAppLanguageHook: any;

try {
  switchHarryAppLanguageHook =
    require('harry_potter_mf/hooks/useSwitchHarryAppLanguage').default;
} catch {
  switchHarryAppLanguageHook = null;
}

try {
  switchRickAppLanguageHook =
    require('rick_and_morty_mf/hooks/useSwitchRickAppLanguage').default;
} catch {
  switchRickAppLanguageHook = null;
}

const useSwitchLanguage = () => {
  const switchHostAppLanguage = (language: string) =>
    hostAppInstance.changeLanguage(language);

  const switchHarryAppLanguage = (language: string) => {
    if (switchHarryAppLanguageHook) {
      switchHarryAppLanguageHook(language);
    }
  };

  const switchRickAppLanguage = (language: string) => {
    if (switchRickAppLanguageHook) {
      switchRickAppLanguageHook(language);
    }
  };

  const switchAllLanguages = (language: string) => {
    switchHostAppLanguage(language);
    switchHarryAppLanguage(language);
    switchRickAppLanguage(language);
  };

  return {
    switchHostAppLanguage,
    switchHarryAppLanguage,
    switchRickAppLanguage,
    switchAllLanguages,
  };
};

export default useSwitchLanguage;
