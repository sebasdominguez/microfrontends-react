import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { HarryPotterMf } from '../components/HarryPotterMf';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('<HarryPotterMf />', () => {
  test('should render characters after fetching', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: [
        { id: 1, name: 'Harry Potter', image: 'http://example.com/harry.jpg' },
      ],
    });

    render(<HarryPotterMf />);

    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(1));
    expect(screen.getByText('Harry Potter')).toBeInTheDocument();
  });
});
