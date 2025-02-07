import React from 'react';
import { render, screen } from '@testing-library/react';
import { SampleComponent } from './Sample.component';

test('renders learn react link', () => {
  render(<SampleComponent />);
  const linkElement = screen.getByText(/sample component/i);
  expect(linkElement).toBeInTheDocument();
});