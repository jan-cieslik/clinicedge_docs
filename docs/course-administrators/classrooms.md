---
title: Set up a classroom
description: Create ClinicEdge classrooms, select learning modes, assign content and supervisors, and test learner access.
---

# Set up a classroom

**Access:** `classrooms` management permission, or application administrator. Open **Moderation > Classrooms**. A classroom viewing grant opens read-only settings/previews/results, not editing or supervisor assignment.

## Choose a mode

| Mode | Teaching use |
| --- | --- |
| Direct | Learners choose from assigned cases |
| Random | The classroom selects a case |
| Weighted random | Random selection uses configured weighting |
| Creation | Learners create/refine their own assigned case template |
| Sequence | Ordered cases, assessments, learning classes, and group seminars |

Choose based on the learning objective. A direct case list does not become an ordered course merely because its cases were added in order.

## Create and configure

1. Enter a useful classroom name and select the mode.
2. Save the classroom. For sequences, save the mode before opening its sequence editor.
3. Assign the required cases or author the sequence.
4. Configure membership/access and decide whether the room should be a public/default room.
5. Assign supervisors through the staff controls.

Use **Classroom introduction** for Markdown instructions and links to course materials; **Insert link** helps add a link. Save it with the classroom settings. It appears under the classroom title on **My cases**, before the sequence button or case cards, in every mode. It is a live classroom setting: changing it does not require republishing a sequence. Raw HTML is not rendered.

In **Classroom supervisors**, search for a standard staff account, choose it, and select **Add supervisor**. Check the saved assignment; learner membership and content-editing grants are not substitutes. Application administrators already have access to all classrooms.

Public/default availability is still subject to the student's account, schedule, study, and public-access settings. It is not a bypass for expired or disabled access.

## Test as both student and staff

Verify that the intended student can see and start the content and an unrelated student cannot. Check that an assigned supervisor can open the [supervision workspace](../course-staff/supervision.md).

Staff previews and sandbox attempts help check content without inflating learner statistics. An administrator's access to all classrooms is not evidence that a student has access.

## Changes after teaching begins

Changing case assignments or publication has different effects by mode. Sequences preserve snapshots and learner revision assignments; see [sequence publication](./sequences.md). Do not delete records or reassign identities to simulate a retake.

For timed windows and durable ID/PIN cohorts, use [access and registration](./access-registration.md), not ad hoc membership replacement.

For a teacher-led sequence, complete the [seminar handoff checklist](./seminar-authoring.md#hand-off-to-staff) before the session. Students can be on different pinned revisions even within one classroom.
