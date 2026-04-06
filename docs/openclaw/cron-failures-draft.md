Title: OpenClaw - Cron/heartbeat failures (draft)

Sources:
- https://docs.openclaw.ai/help/troubleshooting

Summary:
Troubleshooting missed cron jobs or heartbeats. Check cron status and recent runs.

Triage:
1) `openclaw cron status`
2) `openclaw cron list`
3) `openclaw cron runs --id <jobId> --limit 20`
4) `openclaw logs --follow`

Common causes:
- Cron scheduler disabled
- Heartbeat outside active hours (quiet-hours)
- Delivery target account missing

Fixes:
- Re-enable cron scheduler
- Update schedule/timezone
- Fix delivery account or job config

