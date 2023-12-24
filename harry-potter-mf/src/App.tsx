import { I18nextProvider } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';

import harryAppInstance from '../i18n';

import { HarryPotterMf } from './components/HarryPotterMf';

import './index.scss';

const App = () => {
  return (
    <div>
      <I18nextProvider i18n={harryAppInstance}>
        <Routes>
          <Route path='/' element={<HarryPotterMf />} />
        </Routes>
      </I18nextProvider>
    </div>
  );
};

export default App;
