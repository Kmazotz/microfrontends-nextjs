import { render } from '@testing-library/react';
import { LoadingButton } from '../';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
        <LoadingButton 
            type='button' 
            text='Test button' 
            className='py-4 px-4 rounded-lg bg-blue-500 text-white'
            onClick={async() => { return await new Promise(resolve => setTimeout(resolve, 3000)) }}
        />);
    expect(baseElement).toBeTruthy();
  });
});