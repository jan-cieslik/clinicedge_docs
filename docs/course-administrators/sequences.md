---
title: Build and publish course sequences
description: Order ClinicEdge activities, publish immutable revisions, configure case timers, and understand pinned learner progression.
---

# Build and publish course sequences

**Access:** `classrooms` tool. Save the classroom in **sequence** mode, then open its sequence editor.

## Author a course

1. Add case occurrences, published survey/test templates, learning classes, or group seminars.
2. Give activities useful public titles and reorder them.
3. Configure case timers and feedback where needed.
4. **Save draft** to preserve authoring without affecting learners.
5. Preview the course and **Publish new revision**.

A publication needs at least one activity and supports up to 200. Reusing the same template in two positions creates distinct occurrences, not a retake of one occurrence.

When converting a classroom, the editor can prefill an absent draft from existing case assignments. Prefill is not publication and does not credit earlier case completions.

## Versions and learners

Publication snapshots cases and assessment revisions. Later edits to source content or draft ordering do not alter that snapshot. Publishing an assessment template alone does not update a course; publish a new sequence revision too.

Viewing the overview does not enroll a learner. The first actual activity start pins their account to the current published revision. Existing learners remain on that revision; new starters receive the newer publication.

Progress unlocks in order:

- Cases require explicit case completion.
- Surveys/tests and learning classes require final submission.
- Seminars complete through the shared run's workflow.

There is no pass-score threshold for sequence progression. A low test score does not prevent the next activity.

## Case timers and feedback

Case occurrences can override the inherited time limit, action (visual, warning, or lock), calculation mode, and idle timeout. A new timed case asks for confirmation; resuming does not create another timer or patient.

**Disable case evaluation** hides stars/text feedback for that occurrence only. It does not remove the clinical evaluation vignette, handover, or completion. Existing feedback remains stored.

## Reset and correction limits

Learners do not have self-service repinning or retakes. An administrator can **Reset my progress** for their own started sequence, moving their own visible progress to the latest revision while retaining history. It cannot reset other students and is blocked during an open seminar.

For a typo in a published questionnaire, review the special [wording replacement](./assessments.md#correct-published-wording) rules rather than trying to rewrite history.
