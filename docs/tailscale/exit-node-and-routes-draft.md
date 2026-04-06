Title: Tailscale - Exit node and subnet routes (draft)

Sources:
- https://tailscale.com/kb/
- https://tailscale.com/kb/1109/exit-nodes

Summary:
Troubleshooting exit node selection, subnet routes, and route advertisement.

Triage:
- `tailscale status` to see advertised routes and exit-node status
- Check `tailscale up --advertise-routes=` on the exit node

Fixes:
- Re-advertise routes on the node and accept routes in the admin console
- Ensure firewall allows forwarded traffic from the exit node

