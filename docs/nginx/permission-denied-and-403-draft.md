Title: Nginx - Permission denied / 403 (draft)

Sources:
- https://nginx.org/en/docs/
- https://www.digitalocean.com/community/tutorials/how-to-troubleshoot-common-nginx-errors

Summary:
403 or permission denied commonly caused by filesystem permissions, SELinux, or incorrect root directives.

Triage:
- Check nginx error log for 'permission denied' entries
- Verify file ownership and permissions for web root
- On SELinux-enabled systems, check `audit.log` and use `restorecon` or boolean settings

Fixes:
- Correct file permissions/ownership
- Adjust SELinux policies or disable for testing (note: requires sudo)
- Ensure correct 'root' and 'index' directives in server block

