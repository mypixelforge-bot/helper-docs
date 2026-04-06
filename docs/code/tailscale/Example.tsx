import React from 'react';

export default function TailscaleExample() {
  return (
    <div>
      <h1>Tailscale Diagnostics</h1>
      <pre>
{`# List devices
tailscale status
# JSON output for scripting
tailscale status --json
# Bring interface up with web auth
sudo tailscale up
`}
      </pre>
    </div>
  );
}
