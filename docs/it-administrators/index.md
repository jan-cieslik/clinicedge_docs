---
title: For IT Administrators
description: Install, integrate, secure, back up, and operate a ClinicEdge deployment with PocketBase and Docker.
slug: /it-administrators
---

# For IT Administrators

You operate the installation. Day-to-day case authoring, classroom setup, publication, and learner access should be delegated through the application, not implemented as database maintenance.

## First deployment checklist

1. Understand the [architecture and service boundaries](./architecture.md).
2. [Install the stack](./installation.md), configure HTTPS, and establish the first application administrator.
3. Set up [email and optional integrations](./configuration.md).
4. Review [account security and permissions](./accounts-security.md).
5. Test a [backup and restore](./backups.md) before enrolling learners.
6. If needed, configure [LTI](./lti.md) with the LMS administrator.

## Ongoing responsibilities

Use the supported [operations workflow](./operations.md) for updates and health checks. Agree with the institution on [data governance](./data-governance.md), key custody, exports, retention, and incident response.

The application administrator is not the PocketBase superuser. Avoid sharing deployment credentials with educators. A healthy service does not prove that teaching content, consent, or every integration is correctly configured.
