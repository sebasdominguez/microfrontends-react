import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { RickAndMortyMF } from '../components/RickAndMortyMf';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('<RickAndMortyMf />', () => {
  test('should render characters after fetching', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        results: [
          { id: 1, name: 'Rick Sanchez', image: 'http://example.com/rick.jpg' },
          { id: 2, name: 'Morty Smith', image: 'http://example.com/morty.jpg' },
        ],
      },
    });

    render(<RickAndMortyMF />);

    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(1));
    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByText('Morty Smith')).toBeInTheDocument();
  });
});
