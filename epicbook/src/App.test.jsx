import React from 'react';

import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanup);
// Es. 1
import Welcome from './components/Welcome';

test('il componente Welcome viene montato correttamente', () => {
  const { getByText } = render(<Welcome />);
  const welcomeElement = getByText(/Welcome to EpicBook/i);
  expect(welcomeElement).toBeInTheDocument();
});

