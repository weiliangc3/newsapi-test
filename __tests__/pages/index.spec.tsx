/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import '@testing-library/jest-dom';
import { useRouter } from 'next/router';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Page from '../../pages/index';

const mockRouterPush = jest.fn();
jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    push: mockRouterPush,
  })),
}));

describe('index page', () => {
  it('renders correctly', () => {
    const tree = render(<Page />);
    expect(tree.container).toMatchSnapshot();
  });

  it('takes a search term and can be used to search', () => {
    render(<Page />);
    userEvent.type(screen.getByTestId('search-box'), 'joji');
    userEvent.click(screen.getByText('Get yer noose here'));
    expect(mockRouterPush).toHaveBeenCalledWith('/news?rope=joji');
  });
});
