---
title: Project teaching content safely
description: Choose between ClinicEdge test presentation, aggregate monitors, seminar content links, and the separate PIN/OTP display hub.
---

# Project teaching content safely

Choose the narrowest display for the teaching task. A staff workspace is not automatically suitable for a classroom projector.

| Surface | Displays | Access |
| --- | --- | --- |
| Individual inspection | One learner's attributed attempt | Authenticated staff; do not project |
| Test presentation | Questions and aggregate final responses | Classroom tool/administrator |
| Counts-only monitor | Restricted aggregate participation/activity | Expiring bearer grant or unlocked hub |
| Seminar content display | Selected released item and shared timer | Expiring bearer grant or unlocked hub |

## Seminar links

Create the expiring display link in the seminar workspace and select its language. It is pinned to that run. Anyone holding the URL can read the permitted content until it expires or is revoked.

Keep links private, avoid logging/copying them into slides or tickets, and revoke them when no longer needed. The default seminar-link lifetime is 120 minutes; the allowed range is 1-1440. Ending a seminar freezes its display but does not extend expiry or bypass revocation.

The display excludes rosters, supervisor identities, unreleased items, judgments and private clinical notes. Clinical images still need manual de-identification.

<img src="/img/guides/display-1280.webp" alt="Seminar projection showing only a shared clinical summary and the soft timer, with synthetic diagnoses and medication details" width="1280" height="900" loading="lazy" decoding="async" />

*Synthetic display example; this is not the staff's private clinical record.*

<details>
<summary>Display on a narrow screen</summary>

<img src="/img/guides/display-375.webp" alt="Mobile seminar display of the same safe shared clinical summary and timer" width="375" height="900" loading="lazy" />

</details>

## PIN/OTP display hub

For a shared display device, open `/seminar-display` on the **application's** hostname:

1. Enter the static display PIN configured by an application administrator in **Settings > Seminar display**.
2. Select the classroom.
3. Enter its current six-digit authenticator code.
4. Choose an available valid seminar display or counts-only monitor.

An assigned supervisor can choose **Set up OTP** in the classroom's **Display-Authenticator** section and scan the QR in an authenticator app. Setup is automatic on first authorized use; it is not a manual database task.

The classroom authenticator is shared among assigned supervisors and grants display-only access. Treat its QR as a secret. A successfully consumed code cannot unlock two displays simultaneously; wait for the next code on the second device.

Hub sessions last 30 minutes; classroom unlocks last 15 minutes, capped by the session. The administrator changing/disabling the static PIN invalidates hub sessions. Neither the PIN nor the classroom OTP grants staff or student account access.

## If nothing is listed

Check the classroom, unlock expiry, underlying display grant, and issuer's current staff access. Ordinary case previews/sandbox patients are not exposed by the hub. A hub login does not manufacture a new display permission.
