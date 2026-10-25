---
title: Build and publish course sequences
description: Order ClinicEdge activities, publish immutable revisions, configure case timers, and understand pinned learner progression.
---

# Build and publish course sequences

**Access:** `classrooms` management permission, or application administrator. Open **Moderation > Classrooms**, save the classroom in **Sequence** mode, then open its **Sequence** tab. Classroom viewing permission permits read-only settings, previews, revision history, and results/downloads, not authoring or publication.

## Author a course

1. In **Sequence**, select an activity type and source, then choose **Add** (plus icon). Available types are cases, published survey/test templates, saved learning classes, and group seminars. A text/image-only seminar needs no source case.
2. Give activities useful public titles and reorder them.
3. Configure timers for cases, surveys, and tests where needed; configure case feedback separately. Seminars have their own soft teaching timer.
4. **Save draft** to preserve authoring without affecting learners.
5. Preview the course and **Publish new revision**.

A publication needs at least one activity and supports up to 200. Reusing the same template in two positions creates distinct occurrences, not a retake of one occurrence.

The **Sequence**, **Assessment templates**, **Event catalog**, **Revisions**, and **Results** tabs serve different purposes. **Assessment templates** can preview questionnaires; creating/editing them additionally requires the independent `questionnaires` management permission. Learning-class templates use `classrooms` management permission.

<img src="/img/guides/sequence-publication.webp" alt="Synthetic Revisions tab showing a published sequence version and its ordered seminar occurrences" width="782" height="117" loading="lazy" decoding="async" />

*Check **Revisions** after publication. The screenshot uses synthetic seminar steps, not real course data.*

When converting a classroom, the editor can prefill an absent draft from existing case assignments. Prefill is not publication and does not credit earlier case completions.

## Plan a teacher-led session

A typical sequence is **preparation learning class > individual case > group seminar > test > feedback survey**. Add the activities in that order and give repeated activities distinct public titles.

- Anything before the seminar is a prerequisite, not optional reading. Learners cannot jump past an unfinished step just because staff opened the seminar.
- A seminar is a shared run led in **Supervision > classroom > Group seminar**, not an individual case or an automatic slide show.
- Staff release information and explicitly conclude the run. Conclusion completes joined learners' seminar attempts and makes the following activity available.
- Each following seminar needs its own run; each following test/survey/class still needs the learner's final submission.

Use [seminar preparation and staff handoff](./seminar-authoring.md) and give teachers the [live run guide](../course-staff/group-seminars.md). Rehearse the full path using synthetic accounts before teaching.

## Versions and learners

Publication snapshots cases and assessment revisions. Later edits to source content or draft ordering do not alter that snapshot. Publishing an assessment template alone does not update a course; publish a new sequence revision too.

Viewing the overview does not enroll a learner. The first actual activity start pins their account to the current published revision. Existing learners remain on that revision; new starters receive the newer publication.

Progress unlocks in order:

- Cases require explicit case completion.
- Surveys/tests and learning classes require final submission.
- Seminars complete when staff conclude the shared run the learner joined. Merely waiting does not record participation.

There is no pass-score threshold for sequence progression. A low test score does not prevent the next activity.

After case completion, **Continue learning sequence** leads toward the next unfinished activity in the learner's pinned revision. Timed new activities ask for confirmation before their timer starts. Resuming uses the existing attempt, not a fresh timer. Concluded seminars expose **Seminar archive** and **Continue learning sequence**.

## Activity timers and case feedback

Case, survey, and test occurrences can override the inherited time limit (1-1440 minutes), action (visual, warning, or lock), calculation mode, idle timeout (1-3600 seconds), and warning text. Leave fields at **Inherit** to use the source snapshot's settings. Calculation can use idle-adjusted active time, active-open time, or time since start; these are not interchangeable.

For surveys/tests, **Lock** automatically submits the available answers at timeout, including an incomplete response; it is not merely a disabled submit button. Visual/warning limits do not force submission. Check this behavior with synthetic learners before teaching. Unlike these activity limits, a seminar's soft limit never locks or completes participation; see [staff timer controls](../course-staff/group-seminars.md#4-manage-time-without-locking-the-group).

**Disable case evaluation** hides stars/text feedback for that occurrence only. It does not remove the clinical evaluation vignette, handover, or completion. Existing feedback remains stored.

## Reset and correction limits

Learners do not have self-service repinning or retakes. An administrator can **Reset my progress** for their own started sequence, moving their own visible progress to the latest revision while retaining history. It cannot reset other students and is blocked during an open seminar.

For a typo in a published questionnaire, review the special [wording replacement](./assessments.md#correct-published-wording) rules rather than trying to rewrite history.

Questionnaires also have an [overwrite-unused-version workflow](./assessments.md#overwrite-an-unused-version). These explicit questionnaire operations can update referencing snapshots; ordinary source edits, draft saves, or a new template publication cannot.
