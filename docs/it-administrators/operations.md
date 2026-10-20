---
title: Updates, health, and troubleshooting
description: Update ClinicEdge without deleting data, verify schema and hooks, inspect health, and recover safely.
---

# Updates, health, and troubleshooting

Run these commands from the application checkout. Take and verify a [backup](./backups.md) before updates.

## Choose the correct operation

| Command | Meaning |
| --- | --- |
| `./run.sh start` | Start the configured stack |
| `./run.sh stop` | Stop services |
| `./run.sh shutdown` | Remove containers while retaining the database volume |
| `./run.sh reload` | Rebuild PocketBase/init/Next.js from the checked-out source and restart |
| `./run.sh update` | Pull updates and rebuild the stack |
| `./run.sh status` / `./run.sh health` | Inspect state and health |
| `./run.sh logs pocketbase-init` | Inspect schema initialization |

`reload` does not pull Git changes or rebuild nginx. Proxy, allowlist, and nginx-image changes need the appropriate nginx rebuild as well.

:::danger Not an update command
`./run.sh reset` deletes the PocketBase data volume. Never use it to resolve an ordinary update, schema, or health problem.
:::

## Verify after an update

1. Confirm the initializer exited with code 0.
2. Check `/api/health/live` and `/api/health/ready`; readiness includes PocketBase.
3. Verify sign-in, a synthetic case, course publication, and staff access.
4. For affected releases, also test consent, schedules, protected images, seminars/displays, and LMS completion.

Hooks/migrations are copied into the PocketBase image. A web-only restart does not deploy them. Keep the matching application and backend versions together.

## Troubleshoot without leaking data

Inspect bounded logs for the relevant service, for example:

```bash
docker compose --env-file deploy/.env logs --since=30m nextjs pocketbase pocketbase-init
```

Check origin/TLS configuration for same-origin or secure-cookie failures, SMTP diagnostics for email issues, and permissions/assignments for missing menus. Avoid raw request logging, secrets, and private URLs in shared diagnostics.

Docker restart policy handles process exits, not a process that remains running but unhealthy. The application repository provides an optional host health-check systemd timer; review its installation instructions and add independent uptime alerts.

## Rollback

Rebuild the previously tested source only when compatible with the current data. Database rollback needs a tested down migration or a verified pre-update backup. Some history-preserving migrations intentionally refuse rollback with dependent records. Do not delete history to force a rollback.
