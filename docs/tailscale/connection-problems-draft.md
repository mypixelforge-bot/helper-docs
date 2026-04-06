Title: Tailscale - Connection problems (draft)

Sources:
- https://tailscale.com/kb/
- https://tailscale.com/kb/1013/diagnostics

Summary:
Troubleshooting steps when devices can't see each other or a node is offline.

Triage:
- `tailscale status` to list devices and their Online state
- Check Tailscale IPs and MagicDNS names
- Verify local firewall rules and NAT behavior

Fixes:
- Restart tailscaled service
- Ensure devices are logged into same Tailnet
- Check ACLs and route settings

Notes:
- Some diagnostic steps require sudo to inspect systemd/logs; record requirement and skip privileged actions in automated runs.

