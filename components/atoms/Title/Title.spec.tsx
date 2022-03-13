import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Title from './Title';

// test written as starter
describe('Title', () => {
  it('renders correctly', () => {
    const tree = render(<Title>A Title</Title>);
    expect(tree.container).toMatchSnapshot();
  });
});
