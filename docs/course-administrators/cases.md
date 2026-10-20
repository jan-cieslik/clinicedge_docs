---
title: Create and maintain clinical cases
description: Author dynamic or static ClinicEdge cases using structured forms, previews, findings, images, and moderation revisions.
---

# Create and maintain clinical cases

**Access:** case edit permission. Open **Moderation > Case templates** and create a case or open an editable revision. Existing published content is not overwritten merely by opening it.

## Build the scenario

1. Set a recognizable internal name and authoring notes.
2. Choose the relevant cardinal symptoms and describe the scenario.
3. Configure age, gender, history, vital signs, and laboratory values. Use fixed values for a standardized case and ranges/probabilities for a variable scenario.
4. Write the learner-facing vignette, patient conversation context, and completion/evaluation vignette for their distinct audiences.
5. Configure findings, permitted requests, and expected solutions where applicable.

The structured editor handles the supported case fields. Use its fixed/range controls rather than manually rebuilding JSON. Advanced JSON remains useful for supported content transfer or unusual fields, not a prerequisite for ordinary authoring.

## Findings, images, and written reports

Add static reports to the intended request item/type. Upload approved, de-identified raster images or use approved secure image sources. Where a written learner report is enabled, provide the teaching solution and check the report/save/reveal flow.

Review every image, caption, filename, and vignette for identifiers before publication. The application does not automatically remove identifying information from image pixels.

## Patient conversation

Set patient-specific context and any configured conversation tabs/prompts. Test the sandbox before publication. Conversation quality depends on the scenario and the installation's AI configuration; do not promise a response is medically authoritative.

## Preview, then publish

- **Generated-data preview** uses the current draft without saving a patient session.
- **Play preview** uses the published case and is excluded from usage statistics.
- JSON download is a portable case-data format, not an export of learner records.

Check several generated patients for variable scenarios: one plausible sample does not validate every combination. Review the request restrictions and result text together, then follow [review and publication](./publication.md).

Changing the source case does not retroactively update an already published [sequence snapshot](./sequences.md).
