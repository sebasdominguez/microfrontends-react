import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';

type MicrofrontendStatusContextType = {
  isHarryPotterMFAlive: boolean | undefined;
  isRickAndMortyMFAlive: boolean | undefined;
  checkMicrofrontendStatus: () => void;
};

type MicrofrontendStatusProviderProps = {
  children: ReactNode;
};

export const MicrofrontendStatusContext =
  createContext<MicrofrontendStatusContextType>({
    isHarryPotterMFAlive: undefined,
    isRickAndMortyMFAlive: undefined,
    checkMicrofrontendStatus: () => {},
  });

export const MicrofrontendStatusProvider = ({
  children,
}: MicrofrontendStatusProviderProps) => {
  const [isHarryPotterMFAlive, setHarryPotterMFAlive] = useState<
    boolean | undefined
  >();
  const [isRickAndMortyMFAlive, setRickAndMortyMFAlive] = useState<
    boolean | undefined
  >();

  const checkMicrofrontendStatus = async () => {
    try {
      const responseHarry = await fetch(
        'http://localhost:9001/harry-potter-app.js'
      );
      setHarryPotterMFAlive(responseHarry.ok);
    } catch (error) {
      console.error({ error });
      setHarryPotterMFAlive(false);
    }

    try {
      const responseRick = await fetch(
        'http://localhost:9002/rick-and-morty-app.js'
      );
      setRickAndMortyMFAlive(responseRick.ok);
    } catch (error) {
      console.error({ error });
      setRickAndMortyMFAlive(false);
    }
  };

  useEffect(() => {
    checkMicrofrontendStatus();
  }, []);

  return (
    <MicrofrontendStatusContext.Provider
      value={{
        isHarryPotterMFAlive,
        isRickAndMortyMFAlive,
        checkMicrofrontendStatus,
      }}
    >
      {children}
    </MicrofrontendStatusContext.Provider>
  );
};
