import React from 'react';
import { render } from '@testing-library/react';
import OpenClawExample from '../openclaw/Example';

test('renders OpenClaw example heading', () => {
  const { getByText } = render(<OpenClawExample />);
  expect(getByText(/OpenClaw CLI Triage Example/)).toBeTruthy();
});
