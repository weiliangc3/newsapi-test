import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Page from '../../pages/index';

describe('index page', () => {
  it('renders correctly', () => {
    const tree = render(<Page />);
    expect(tree.container).toMatchSnapshot();
  });
});
