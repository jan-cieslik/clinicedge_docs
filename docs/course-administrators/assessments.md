---
title: Create surveys and tests
description: Author ClinicEdge questionnaires, conditional questions and grading, publish revisions, and safely correct published wording.
---

# Create surveys and tests

**Access:** `classrooms` tool. Open **Administration > Questionnaires**.

## Create and publish a template

1. Choose survey or test; a saved template's kind cannot later change.
2. Add ordered groups, shared text, questions, choices, and any matrix rows.
3. Configure required answers, conditions, and test answer keys/tolerances.
4. Preview the learner controls.
5. Publish a new template revision, add it to the classroom sequence, then publish the sequence.

**Save locally** and **Restore local draft** use this browser's local storage for authoring. They are not server publication, a shared backup, or learner-response saving.

Supported formats include choice questions, ratings, numeric answers and the editor's survey text/matrix formats. Use the choices offered for the selected survey/test kind. Do not paste licensed questionnaire content without permission.

## Conditional follow-ups

Use **Show when** to reveal a question when an earlier choice question has the selected option. Single choice, multiple choice, and rating questions can be sources. Only one rule is supported per question, without combined operators.

Reordering/deleting the source can invalidate a rule; fix validation errors before publishing. Hidden required questions do not block learner submission. Hidden answers can remain in drafts but are excluded from final results and scoring.

## Grading and learner behavior

Test answer keys and numeric tolerances must be reviewed before publication. Choice scoring is exact rather than partial-credit guessing; numeric grading uses the configured target/tolerance. A final submission locks answers.

Students see their test report after submission, including correct answers and total score. Surveys return to the overview without a personal response summary. Completing either unlocks progression regardless of test score.

Results and CSV are staff data. For projection, use [aggregate test presentation](../course-staff/test-presentation.md), not individual response exports.

## Correct published wording

**Replace published wording** is for corrections that do not change structure or meaning. The dialog checks compatibility, and the server checks again.

Allowed changes include titles, shared text, prompts, choice labels, and matrix wording. IDs, question/order/counts, required flags, conditions, numeric constraints, keys and tolerances must stay identical.

This updates the latest questionnaire revision and published classroom snapshots referencing it, including existing learners and historical reports. Answers, scores, version numbers, and publication dates remain unchanged. Older questionnaire revisions are not replaced.

**Use a new publication for semantic or scoring changes**, even if the wording tool's structural check could accept them.
