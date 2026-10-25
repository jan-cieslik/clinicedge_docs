---
title: Create surveys and tests
description: Author ClinicEdge questionnaires, conditional questions and grading, publish revisions, and safely correct published wording.
---

# Create surveys and tests

**Access:** independent `questionnaires` management permission, or application administrator. Open **Administration > Questionnaires**. Viewing permission allows previews, definition downloads, and live test presentation, but not authoring or publication. Adding a published questionnaire to a course separately requires `classrooms` management permission.

## Create and publish a template

1. Choose survey or test; a saved template's kind cannot later change.
2. Add ordered groups, shared text, questions, choices, and any matrix rows.
3. Configure required answers, conditions, and test answer keys/tolerances.
4. Preview the learner controls.
5. Publish a new template revision, add it to the classroom sequence, then publish the sequence.

**Save locally** and **Restore local draft** use this browser's local storage for authoring. They are not server publication, a shared backup, or learner-response saving.

**Import JSON** opens a validated configuration as a new, unsaved template, not an update by database ID. Review and publish it explicitly. **Export JSON** downloads the definition, including test answer keys, but no learner responses or publication history. Keep answer-key files away from learners.

Supported formats include choice questions, ratings, numeric answers and the editor's survey text/matrix formats. Use the choices offered for the selected survey/test kind. Do not paste licensed questionnaire content without permission.

## Conditional follow-ups

Use **Show when** to reveal a question when an earlier choice question has the selected option. Single choice, multiple choice, and rating questions can be sources. Only one rule is supported per question, without combined operators.

Reordering/deleting the source can invalidate a rule; fix validation errors before publishing. Hidden required questions do not block learner submission. Hidden answers can remain in drafts but are excluded from final results and scoring.

## Grading and learner behavior

Test answer keys and numeric tolerances must be reviewed before publication. Choice scoring is exact rather than partial-credit guessing; numeric grading uses the configured target/tolerance. A final submission locks answers.

Students see their test report after submission, including correct answers and total score. Surveys return to the overview without a personal response summary. Completing either unlocks progression regardless of test score.

Results and CSV are staff data. For projection, use [aggregate test presentation](../course-staff/test-presentation.md), not individual response exports.

Surveys and tests can have timers, with occurrence overrides in the [sequence editor](./sequences.md#activity-timers-and-case-feedback). With **Lock**, timeout automatically submits the available answers, even if required responses are incomplete. Visual/warning limits do not force submission. Do not confuse a questionnaire's limit with a seminar's soft timer.

## Overwrite an unused version

**Overwrite unused version** changes the current published questionnaire revision without creating a new version. Structural changes and answer-key changes are permitted, but the questionnaire kind cannot change.

This is allowed only if **no learner has started an occurrence of that exact revision** in any classroom snapshot. In-progress attempts, saved drafts, completed responses, and historical/reset enrollments all block it. Starting a different sequence item does not.

Referencing classroom snapshots update atomically; version numbers and publication dates stay unchanged. Older questionnaire versions and their answers are preserved. Custom occurrence titles stay custom; inherited titles follow the updated questionnaire title. If the operation is blocked or a concurrent edit is reported, reload and use **Publish new revision** as appropriate, then publish the intended sequence revision.

## Correct published wording

**Replace published wording** is for corrections that do not change structure or meaning. The dialog checks compatibility, and the server checks again.

Allowed changes include titles, shared text, prompts, choice labels, matrix wording, and analysis-only **Short Stats label (optional)** values. IDs, question/order/counts, required flags, conditions, numeric constraints, keys and tolerances must stay identical.

This updates the latest questionnaire revision and published classroom snapshots referencing it, including existing learners and historical reports. Answers, scores, version numbers, and publication dates remain unchanged. Older questionnaire revisions are not replaced.

**Use a new publication for semantic or scoring changes**, even if the wording tool's structural check could accept them.

## Label questions for analysis

Set **Short Stats label (optional)** to a concise, single-line label (up to 80 characters). It changes Stats column/analysis labels, not learner wording or scoring. Empty labels keep the question prompt; duplicate labels are disambiguated using question IDs, and matrix rows remain distinct.

See [Stats exports and label references](./results-support.md#stats-reports-and-downloads) for compact ID headers and question-label mapping downloads.
