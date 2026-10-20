---
title: Backup, restore, and content transfer
description: Protect ClinicEdge database records, files, and encryption secrets, and distinguish full recovery from portable medical-content exports.
---

# Backup, restore, and content transfer

**Responsibility:** trusted operators. Agree on backup frequency, off-host storage, access restrictions, retention, and restoration tests before using real learning records.

## Full recovery

A recoverable installation needs:

- The complete PocketBase database and uploaded files, including protected clinical/seminar media and consent documents.
- Protected runtime configuration, especially the stable session and access-code encryption secrets.
- The tested application revision and compatible image/configuration information.

Store secrets separately from ordinary backups with a controlled recovery procedure. Study/registration **private decryption keys belong to the offline custodian**, not in application backups.

```bash
./run.sh backup
```

The runner stops services before archiving the volume for SQLite consistency. Schedule downtime accordingly. PocketBase's supported built-in backup facility is another option; use a dedicated protected destination and test the exact restoration process.

## Restore safely

1. Verify the source backup, compatible software, and required secrets.
2. Restore first into an isolated environment with outbound email and other side effects controlled.
3. Check sign-in, content, learner history, protected media, and relevant consent/display functionality.
4. Approve the production restore and communicate the recovery point.

The runner's `restore` operation is destructive and requires explicit confirmation. Review `./run.sh help` and the current runner before executing it. Never use `docker compose down -v` as routine maintenance: it deletes the data volume.

## Portable medical content

From the application checkout with its approved environment:

```bash
npm run db:export-content
```

The versioned bundle contains reusable symptoms, case/finding templates, diagnosis/medication references, and medical catalogs. It excludes users, patients, classroom activity, sessions, LTI and other operational records.

The setup tool can provision schema and import a selected content bundle. Confirm the target, compatibility, and stable-ID update behavior before importing. Do not treat an import as a merge tool for live course history.

**A content export cannot restore a course, account, conversation, consent record, or seminar run.** Keep it separate from the full-backup strategy.
