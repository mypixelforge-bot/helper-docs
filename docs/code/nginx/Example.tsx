import React from 'react';

export default function NginxExample() {
  return (
    <div>
      <h1>Nginx Troubleshooting Commands</h1>
      <pre>
{`# Test config
nginx -t
# Check error log (path may vary)
tail -n 200 /var/log/nginx/error.log
# Reload
nginx -s reload
`}
      </pre>
    </div>
  );
}
