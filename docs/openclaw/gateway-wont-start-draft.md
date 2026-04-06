Title: OpenClaw - Gateway won't start (draft)

Sources:
- https://docs.openclaw.ai/help/troubleshooting
- https://docs.openclaw.ai/gateway/troubleshooting

Summary:
This draft covers common reasons the OpenClaw gateway service fails to start and step-by-step triage commands.

Symptoms:
- openclaw gateway status shows service not running or Runtime: stopped
- Logs show EADDRINUSE, permission errors, or missing config

Triage steps:
1) Check gateway status: `openclaw gateway status`
2) Inspect service logs: `openclaw logs --follow` or check the file shown in gateway status
3) Look for port conflicts: `lsof -i :18789` or `ss -ltnp | grep 18789`
4) Validate config: `cat ~/.openclaw/openclaw.json` (do not include secrets)
5) Run `openclaw doctor` to surface config/service issues

Common fixes:
- Change gateway port if EADDRINUSE or stop the conflicting service
- Ensure service unit uses a stable Node path (avoid version managers in systemd service file)
- If bind errors mention auth, set proper gateway auth or use loopback bind

Caveats:
- Some steps may require sudo (inspecting system services); document notes and skip running privileged commands.

