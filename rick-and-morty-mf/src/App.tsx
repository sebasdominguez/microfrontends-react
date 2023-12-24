import { I18nextProvider } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';

import rickAppInstance from '../i18n';

import { RickAndMortyMF } from './components/RickAndMortyMf';

import './index.scss';

const App = () => {
  return (
    <div>
      <I18nextProvider i18n={rickAppInstance}>
        <Routes>
          <Route path='/' element={<RickAndMortyMF />} />
        </Routes>
      </I18nextProvider>
    </div>
  );
};

export default App;
