# OpenClaw Docs Agent Memory

Plan: Build troubleshooting docs for at least 3 tools (OpenClaw, nginx, Tailscale) with at least 3 pages each.

Checklist:
- OpenClaw:
  - gateway-wont-start: draft (created)
  - no-replies: draft (created)
  - cron-failures: draft (created)
- nginx:
  - 502-and-504-errors: draft (created)
  - permission-denied-and-403: draft (created)
  - config-syntax-errors: draft (created)
- Tailscale:
  - connection-problems: draft (created)
  - auth-and-key-issues: draft (created)
  - exit-node-and-routes: draft (created)

Snapshots:
- 2026-04-06 13:25 UTC: openclaw gateway running; tailscale CLI shows device list; nginx not installed (nginx: not found). See sources in drafts.

Sources used this run:
- OpenClaw troubleshooting: https://docs.openclaw.ai/help/troubleshooting
- Nginx docs: https://nginx.org/en/docs/
- Nginx troubleshooting (guide): https://www.digitalocean.com/community/tutorials/how-to-troubleshoot-common-nginx-errors
- Tailscale KB base: https://tailscale.com/kb/ (referenced; some pages cited individually in drafts)

Progress notes:
- Created workspace directories and draft markdown pages for three tools (OpenClaw, nginx, Tailscale).
- Added TypeScript/React example components and one small test per tool under docs/code/ and docs/code/tests/.
- Installed not attempted (no package.json yet); npm install step will run when package.json present or changes.

Completed pages: 0/9

Next run: iterate on drafts, expand drafts into full pages, add more specific examples, and create package.json for examples so npm ci can run. Persist progress on each wake.
