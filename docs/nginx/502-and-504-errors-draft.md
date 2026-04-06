Title: Nginx - 502 / 504 gateway errors (draft)

Sources:
- https://nginx.org/en/docs/
- https://www.digitalocean.com/community/tutorials/how-to-troubleshoot-common-nginx-errors

Summary:
Covers common causes for 502/504 errors: upstream backend down, timeouts, misconfigured proxy_pass, or fastcgi issues.

Triage:
- Check nginx error log (usually /var/log/nginx/error.log) — may require sudo
- Test backend health directly (curl localhost:8080)
- Verify proxy_pass and upstream configuration
- Check timeouts: proxy_read_timeout, proxy_connect_timeout

Fixes:
- Ensure backend is running
- Adjust timeouts and buffering
- Fix upstream server definitions

