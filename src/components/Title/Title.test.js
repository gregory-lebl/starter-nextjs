import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from './Title';

it('Should display Nextjs Starter!', () => {
  render(<Title />);
  screen.getAllByText('Nextjs Starter!');
});
