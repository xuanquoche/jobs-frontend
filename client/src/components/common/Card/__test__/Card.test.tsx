import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import Image from '../../../../assets/images/bird.png';
import { Card } from '../index';


test('Card text rendering', () => {
  const { getByText } = render(<Card title="Submit" image={Image} rating={5} price={100} />);
  expect(getByText('Submit')).toBeInTheDocument();
});
