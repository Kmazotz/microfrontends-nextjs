import { render } from '@testing-library/react';
import { DynamicIcon } from '../';

describe('Icons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DynamicIcon name="PiFinnTheHumanLight" />);
    expect(baseElement).toBeTruthy();
  });
});