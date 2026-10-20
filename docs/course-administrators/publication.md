---
title: Review and publish medical content
description: Move ClinicEdge medical content through draft, validation, review, requested changes, and approval without editing live database records.
---

# Review and publish medical content

**Access:** edit or review permission for the relevant content type. Start in the moderation dashboard or the content list.

## Understand the states

| State | What it means |
| --- | --- |
| Draft | Work is editable; not an approved replacement |
| Pending review | Submitted for a reviewer |
| Changes requested | Reviewer feedback needs attention |
| Approved | The approved revision has been published |
| Preliminary approved | Imported legacy content awaiting the current review process |

Legacy content can already be provisionally live. Its preliminary status should not be confused with a freshly approved revision.

## Author workflow

1. Open or create a revision.
2. Complete the structured form and run the available validation/preview checks.
3. Resolve errors; review warnings in clinical context.
4. Save, then submit for review when the content is ready.
5. If changes are requested, read the review message, revise, and resubmit.

Saving a draft is not publication. Do not ask IT to write the draft payload into the live collection.

## Reviewer workflow

Open the queue, inspect the full revision and validation results, and test the clinically important paths. Request changes with a useful explanation or approve the revision when satisfied. Review capability is distinct from edit capability.

Approval is not a substitute for institutional clinical review. Check units, ranges, generated findings, request dependencies, and learner-facing wording.

## What updates reach existing learners?

Medical-content approval updates the published source. A published classroom sequence keeps its content snapshot; publish a new sequence revision when the course should use changed content. Existing started learners normally remain on their assigned revision.

Questionnaire wording replacement is a separate, deliberately restricted exception described in [surveys and tests](./assessments.md). Do not use it for semantic or scoring changes.
