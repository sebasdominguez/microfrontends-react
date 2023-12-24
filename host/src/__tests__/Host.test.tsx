import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Header } from '../components/Header';

const mockContext = {
  isHarryPotterMFAlive: true,
  isRickAndMortyMFAlive: true,
  checkMicrofrontendStatus: jest.fn(),
};

jest.mock('react', () => {
  const ActualReact = jest.requireActual('react');
  return {
    ...ActualReact,
    useContext: () => mockContext,
  };
});

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: '',
    search: '',
    hash: '',
    state: null,
    key: '5nvxpbdafa',
  }),
  Link: jest
    .fn()
    .mockImplementation(({ to, children }) => <a href={to}>{children}</a>),
}));

describe('<Header />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the header with Harry Potter and Rick and Morty links', () => {
    render(<Header />);
    expect(screen.getByText('Movie CHARS')).toBeInTheDocument();
    expect(screen.getByText('Harry Potter')).toBeInTheDocument();
    expect(screen.getByText('Rick and Morty')).toBeInTheDocument();
    expect(screen.getByTestId('language-switcher')).toBeInTheDocument();
  });
});
