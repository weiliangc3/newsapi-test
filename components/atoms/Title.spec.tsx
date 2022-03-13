import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Title from './Title';

// test written as starter
it('renders correctly', () => {
  const tree = render(<Title>A Title</Title>);
  expect(tree.container).toMatchSnapshot();
});
