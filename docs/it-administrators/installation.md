---
title: Install ClinicEdge
description: Deploy ClinicEdge using Docker Compose, configure HTTPS and PocketBase, and provision the first application administrator safely.
---

# Install ClinicEdge

Use a Linux host with Docker Engine and Docker Compose, `bash`, `curl`, and `openssl`. Configure DNS, allow public ports 80/443, and arrange a separate backup destination.

The commands below run in the **application checkout**, not the documentation repository.

## 1. Prepare the checkout

```bash
git clone https://github.com/jan-cieslik/clinicedge.git
cd clinicedge
./run.sh install
```

The interactive installer writes a restricted `deploy/.env`, asks for the public hostname/origin and PocketBase superuser credentials, generates application secrets, builds images, and starts the stack. Review [configuration](./configuration.md) before using real accounts. Do not replace an existing environment file or regenerate existing secrets casually.

For a controlled manual setup, copy `deploy/.env.example` to `deploy/.env`, restrict it to mode `600`, fill the required values, then use Docker Compose. Never commit the runtime file.

## 2. Configure public access

Set `APP_URL` to the public origin with no trailing slash. For local TLS, supply both `deploy/tls/tls.crt` and `deploy/tls/tls.key`; certificate issuance and renewal are external responsibilities.

If HTTPS terminates at a trusted upstream proxy, configure `NGINX_REDIRECT_HTTP_TO_HTTPS=true` with the HTTPS `APP_URL`. Restrict direct origin access and trust forwarded headers only from that proxy.

The PocketBase dashboard at `/pb/_/` is denied remotely by default. Add trusted VPN/public CIDRs to `docker/nginx/pb-admin-allowlist.conf` and rebuild nginx when changing it. Do not publish application port 3000 or PocketBase port 8090.

## 3. Verify services and initial content

```bash
./run.sh status
./run.sh health
./run.sh logs pocketbase-init
```

Expect `pocketbase-init` to exit successfully. The Compose initializer provisions schema; it does **not** import a medical-content bundle. Arrange a controlled import of approved content before testing learner cases. The application setup tool supports `--import` and `--skip-import`; review its target and [backup guidance](./backups.md) before using it.

## 4. Establish the application administrator

1. Configure working SMTP and register a native local account through the application.
2. Complete email verification.
3. As a trusted PocketBase superuser, locate that account in `ce_users` using its verified email and stable `ce_uid`.
4. Set `is_admin` to true on that exact user record. Sign in again and verify access to Moderation and Administration.
5. Grant other users only the required [delegated permissions](../course-administrators/permissions.md).

This narrowly scoped bootstrap is an operator exception, not the normal course-management workflow. PocketBase superuser credentials alone do not create an application login or administrator. Matching the superuser email does not automatically promote a local account.

## Before enrolling students

Test a complete case and course publication, sign-in/recovery, staff assignment, and backup restoration. Publish institution-reviewed legal text through **Administration > Settings**. Do not use a real student cohort as an installation test.
