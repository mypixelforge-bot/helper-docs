import React from 'react';
import { render } from '@testing-library/react';
import NginxExample from '../nginx/Example';

test('renders Nginx example heading', () => {
  const { getByText } = render(<NginxExample />);
  expect(getByText(/Nginx Troubleshooting Commands/)).toBeTruthy();
});
