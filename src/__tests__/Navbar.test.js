import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/pages/Navbar';

describe('test for Navbar component', () => {
  it('should render Navbar component', () => {
    expect(render(<Navbar />, { wrapper: BrowserRouter })).toMatchSnapshot();
  });
});
