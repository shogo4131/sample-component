import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from './index';

describe('button component test', () => {
  it('should children render test', () => {
    render(<Button>test button</Button>);
    expect(screen.getByText('test button')).toBeInTheDocument();
  });
});
