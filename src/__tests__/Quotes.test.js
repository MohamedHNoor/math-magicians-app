import React from 'react';
import { render } from '@testing-library/react';
import Quotes from '../components/pages/Quotes';

describe('test for Quotes Component', () => {
  it('should render Quotes Component', () => {
    expect(render(<Quotes />)).toMatchSnapshot();
  });
});
