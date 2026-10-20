---
title: Student access, registration, and schedules
description: Issue ClinicEdge ID/PIN cohorts, configure private signup links, and manage one-time or longitudinal classroom schedules.
---

# Student access, registration, and schedules

**Access:** `access_codes` tool. Open **Administration > ID & PIN**. Local account registration policy and LMS integration are separate administrator settings.

## Choose the access model

| Model | Use | Time behavior |
| --- | --- | --- |
| One-time ID/PIN | A bounded session/course window | Duration normally begins on first successful credential login |
| Longitudinal ID/PIN | Repeated teaching events | Scheduled classroom windows, not a single account-wide countdown |
| Native local account | Ongoing email/password access | Registration policy and assigned classroom access |
| LMS launch | Learning through an existing platform | Restricted to the configured placement |

New ID/PIN issuance defaults to one-time access, 24 hours, and public-classroom access enabled. Choose explicit settings for the course rather than relying on defaults.

## Issue a cohort

Select the account type, classrooms, public-room option, and one-time duration where applicable. If research is involved, select only an approved active study and the appropriate consent policy. Generate the cohort and distribute credentials through a private institutional channel.

Treat IDs/PINs and exported credential documents as secrets. Cohort labels are not unique identifiers; use the actual cohort/batch when editing schedules.

## Private signup links

Use the signup-link section to configure the cohort, access model, classrooms, validity/cap, privacy/contact details, identity options, and no/optional/mandatory study policy.

Identified signup requires the approved public encryption key; the private key stays offline. Students receive their credentials and must confirm they have saved them. Receipt issuance/download is not the first login and does not start the one-time clock.

Optional study offers must remain a real choice; do not describe registration identity collection as research consent. See [study setup](./studies.md).

## Longitudinal schedules

1. Select the actual cohort and add its shared classroom events.
2. Enter start/end in the editor's displayed browser-local timezone.
3. Choose a display timezone for saved event listings.
4. Use per-code add/replace/suppress overrides only where necessary.
5. Review the effective schedule for affected learners and save.

Changing the display timezone alone does not change the stored instant. Same-room effective overlaps are rejected. On a version conflict, preserve your notes, reload, and reopen the event; do not repeatedly overwrite a stale draft.

Archive/restore preserves history. Reopening the same room reuses existing pinned progress; it does not reset attempts. After a window ends, retained work can be read-only. Upcoming event metadata is not permission to read future course content.

Public/default classroom access is independent when enabled; disabling it does not remove an explicit scheduled authorization. Account disablement still blocks access.

## Verify before distribution

Use synthetic accounts to test the active window, future waiting state, end-of-window archive, public-room choice, credential acknowledgement, and any consent gate. For problems, check the effective schedule and account status before changing membership.
