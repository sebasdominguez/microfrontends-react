import { useContext } from 'react';
import { MicrofrontendStatusContext } from '../context/MicrofrontendStatusContext';

export const useMicrofrontendStatus = () =>
  useContext(MicrofrontendStatusContext);
