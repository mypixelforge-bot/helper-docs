Title: Tailscale - Auth and key issues (draft)

Sources:
- https://tailscale.com/kb/
- https://tailscale.com/kb/1153/troubleshooting-authentication

Summary:
Covers expired node keys, missing auth keys, and device login problems.

Triage:
- `tailscale status --json` to inspect keys and expiry
- Re-authenticate devices via `tailscale up` and web auth flow

Fixes:
- Rotate keys or re-run auth flow
- Use admin console to remove and re-add devices

