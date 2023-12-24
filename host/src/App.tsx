import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import { Header } from './components/Header';
import { Home } from './components/Home';
import Loader from './components/Loader';
import NotFound from './components/NotFound';

import { MicrofrontendStatusProvider } from './context/MicrofrontendStatusContext';

import hostAppInstance from '../i18n';

import './index.scss';

const RemoteHarryPotterApp = React.lazy(
  () => import('harry_potter_mf/HarryPotterApp')
);
const RemoteRickAndMortyApp = React.lazy(
  () => import('rick_and_morty_mf/RickAndMortyApp')
);

const App = () => {
  return (
    <MicrofrontendStatusProvider>
      <I18nextProvider i18n={hostAppInstance}>
        <Header />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/harry-potter/*' element={<RemoteHarryPotterApp />} />
            <Route
              path='/rick-and-morty/*'
              element={<RemoteRickAndMortyApp />}
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </I18nextProvider>
    </MicrofrontendStatusProvider>
  );
};

export default App;
