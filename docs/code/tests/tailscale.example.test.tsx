import React from 'react';
import { render } from '@testing-library/react';
import TailscaleExample from '../tailscale/Example';

test('renders Tailscale example heading', () => {
  const { getByText } = render(<TailscaleExample />);
  expect(getByText(/Tailscale Diagnostics/)).toBeTruthy();
});
