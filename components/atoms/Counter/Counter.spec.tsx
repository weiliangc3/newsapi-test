import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Counter from './Counter';

// Sample test
describe('Counter', () => {
  it('renders correctly', () => {
    const tree = render(<Counter />);
    expect(tree.container).toMatchSnapshot();
  });

  it('takes a default value', () => {
    const tree = render(<Counter initialCount={10} />);
    expect(tree.container).toMatchSnapshot();
  });

  it('increments when the button is clicked', () => {
    render(<Counter />);
    expect(screen.getByTestId('count')).toContainHTML('0');
    userEvent.click(screen.getByText('Increment'));
    expect(screen.getByTestId('count')).toContainHTML('1');

    // alternatively:
    // expect(screen.getByText('1')).toBeInTheDocument();
  });
});
