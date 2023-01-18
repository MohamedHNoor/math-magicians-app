import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Calculator from '../components/Calculator';

describe('test for Calculator Component', () => {
  it('should render Calculator Component', () => {
    expect(render(<Calculator />)).toMatchSnapshot();
  });

  it('should return  Calculator Component', () => {
    render(<Calculator />);

    expect(screen.getByText('Let`s do some maths!')).not.toBeNull();

    // eslint-disable-next-line no-unused-expressions
    expect(screen.queryByText('5')).toBeInTheDocument;
  });
});
