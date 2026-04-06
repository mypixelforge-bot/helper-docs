import React from 'react';

export default function OpenClawExample() {
  return (
    <div>
      <h1>OpenClaw CLI Triage Example</h1>
      <pre>
{`# Run these locally in your terminal (examples):
openclaw status
openclaw gateway status
openclaw logs --follow
openclaw doctor
`}
      </pre>
    </div>
  );
}
