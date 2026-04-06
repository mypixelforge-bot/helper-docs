Title: OpenClaw - No replies (draft)

Sources:
- https://docs.openclaw.ai/help/troubleshooting

Summary:
Why OpenClaw appears to accept messages but not reply. Common causes include pairing/allowlist, mention gating, and channel permission scopes.

Triage:
1) `openclaw status`
2) `openclaw channels status --probe`
3) `openclaw logs --follow`
4) Check pairing: `openclaw pairing list --channel <channel>`

Fixes:
- Approve pairing or update allowlist
- Ensure bot has required scopes (send messages) and is not missing permissions
- Verify mention gating settings for group channels

