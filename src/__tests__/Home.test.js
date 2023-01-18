/* eslint-disable no-unused-expressions */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/pages/Home';

describe('test for Home Component', () => {
  it('should render home component', () => {
    expect(render(<Home />)).toMatchSnapshot();
  });

  it('should query text component', () => {
    render(<Home />);
    screen.debug();

    expect(screen.queryByText(/Welcome to our page!/)).not.toBeNull;
  });
});
