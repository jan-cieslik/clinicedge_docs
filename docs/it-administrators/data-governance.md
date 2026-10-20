---
title: Privacy, exports, and retention
description: Operate ClinicEdge educational attendance, encrypted identity handoff, research exports, and approved retention without conflating their purposes.
---

# Privacy, exports, and retention

Educational participation, study eligibility, identity receipts, and clinical learning history have different purposes. Institutional policy and approval determine their use; software checks do not confer ethical or legal approval.

## Choose the right export

| Need | Workflow | Important limit |
| --- | --- | --- |
| Educational progress, including never-logged-in registrations | Student attendance export | Not proof of physical presence, identity, or a certified grade |
| Evidence-backed study cohort | Study participant export | Not a list of users currently allowed to learn |
| Names associated with encrypted receipts | Controlled encrypted export, then offline join/decryption | No web administrator names/decryption view |
| Shared seminar records | Authorized supervision export | Contains private staff/learner records |

Use a restricted directory outside the checkout and a dedicated environment file. Example operator commands from the application repository:

```bash
ENV_FILE=/secure/operator.env ./run.sh student-attendance-export \
  --batch 22222222-2222-4222-8222-222222222222 \
  --output /secure/attendance.json

ENV_FILE=/secure/operator.env ./run.sh study-participants-export \
  --study 11111111-1111-4111-8111-111111111111 \
  --output /secure/participants.csv
```

Replace example UUIDs with the actual authorized scope. Attendance supports narrower signup, classroom, and event filters; narrow the request if limits are exceeded. Exports refuse unsafe/overwritten destinations rather than silently truncating records.

Do not sum overlapping schedule observations into a course total. Repeated events can observe the same cumulative progress. Uncertain historical attribution is not reconstructed as fact.

For the study participant export, pause enrollment, decisions, binding, and relevant policy/retention writes while collecting the paginated data. It is not a transactional database snapshot; concurrent withdrawal can otherwise make an extract inconsistent.

## Key custody

Generate study/registration identity keypairs offline. Register only the public key in the application. Private keys must never be installed in containers, the application environment, the checkout, or browser forms.

Transfer encrypted bundles to the approved offline custodian for the specific attendance/consent decryption workflow. Keep identity files owner-only and do not send them back to the web application. Encryption does not anonymize the remaining pseudonymous linkage.

## Retention is a deliberate operation

There is no universal automatic deletion job for accounts, bug reports, clinical history, seminar uploads, or study data.

For an archived study with an approved retention policy:

```bash
ENV_FILE=/secure/operator.env ./run.sh study-retention --dry-run \
  --study 11111111-1111-4111-8111-111111111111 \
  --output /secure/retention-review.json
```

Review the report and obtain independent approval before the separate `--apply` operation. This purges eligible identity receipts/consent evidence and changes participation state; it is **not** full study deletion or a complete erasure workflow. Do not apply under a legal hold.

If a connection fails after apply, inspect the durable audit before retrying: a missing local report does not prove the transaction failed.

Registration identity retention is separate from study evidence:

```bash
ENV_FILE=/secure/operator.env ./run.sh registration-retention --dry-run \
  --signup 33333333-3333-4333-8333-333333333333 \
  --output /secure/registration-retention-review.json
```

It requires the approved policy, no legal hold, and verified pinned retention dates. A separately approved apply removes due registration identity receipts, not study evidence or pseudonymous registrations. Do not substitute study-retention commands for this workflow.

Consult the application's detailed [attendance](https://github.com/jan-cieslik/clinicedge/blob/main/docs/student-attendance.md), [study retention](https://github.com/jan-cieslik/clinicedge/blob/main/docs/study-retention.md), and [consent operations](https://github.com/jan-cieslik/clinicedge/blob/main/docs/study-consent-security.md) contracts for exact filters and offline commands. Course administrators should start with the [study guide](../course-administrators/studies.md).
