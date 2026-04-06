Title: Nginx - Config syntax errors (draft)

Sources:
- https://nginx.org/en/docs/
- https://www.digitalocean.com/community/tutorials/how-to-troubleshoot-common-nginx-errors

Summary:
How to debug nginx config syntax errors using `nginx -t` and reading error messages.

Triage:
- Run `nginx -t` to test configuration (may require sudo depending on install)
- Inspect included config files for typos, stray characters, or unclosed blocks
- Validate upstream and server block entries

Fixes:
- Fix syntax per nginx -t output and reload `nginx -s reload`

