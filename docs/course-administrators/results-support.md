---
title: Results, statistics, and support
description: Interpret ClinicEdge course results and case statistics, choose private exports, and handle student bug reports.
---

# Results, statistics, and support

Access to a result depends on its surface. Classroom results, assigned supervision, Stats, administrator case statistics, and the bug-report inbox are not interchangeable permissions.

## Course and case results

With `classrooms` viewing permission (or management), open the classroom sequence's **Results** tab and select the published revision and activity. Review survey/test/learning-class details in that scope; repeated occurrences and pinned versions matter. The **CSV** download is the classroom results export, not the separately filtered Stats export; do not assume the on-screen revision/activity filters trim that download.

Administrators can use **Case templates > Overview & statistics** for ownership, dates, usage/rating and run filters, and links to published-case overviews. Opening this view does not create a draft revision or patient.

Staff should use [supervision](../course-staff/supervision.md) for classroom-attributed activity and [aggregate test presentation](../course-staff/test-presentation.md) for teaching.

## Stats reports and downloads

**Access:** independent **Stats (view and download)** permission, or application administrator. Open **Moderation > Stats**. This read-only tool does not require or grant classroom management, questionnaire editing, study access, or classroom supervision.

1. Choose the source type: case feedback, survey, assessment/test, or learning module.
2. Choose the source: a published questionnaire revision, a learning-module occurrence in a published classroom sequence, or a case's feedback.
3. Optionally select a classroom and inclusive UTC submission-date range.
4. Choose **Latest** or **First** completed response per learner; tests and scored learning modules also offer **Best score**.
5. Inspect the table and analysis, then download the required CSV or Excel report.

Sources are not pooled across questionnaire revisions or module occurrences. Filters apply **before** choosing one response per student, including historical responses from superseded/reset enrollments. Changing source type clears the previous selection and results. For case feedback, first/latest uses the case run's start time, not the feedback edit; feedback with unknown submission time is excluded when a date filter is active.

The preview is paginated at 50 students; exports contain the full selected population, subject to report limits (10,000 students and 1,000,000 wide-table cells). Oversized reports fail explicitly rather than silently truncating. Unlike the classroom Results CSV, Stats response exports use the selected report filters and attempt policy.

### Labels and analysis

- **Compact column names (IDs)** switches response headers to stable question IDs; matrix columns retain row context. It affects displayed/exported headers, not answers or scoring.
- **Download Question label reference CSV** maps exact response-column names to IDs, full prompts, group/matrix context, options, and visibility conditions. It contains no student responses and remains available for an empty response set.
- Excel includes the same mapping in **Question Labels**, alongside responses, scored items, cohorts, analysis, summary, and metadata.
- Authored [short Stats labels](./assessments.md#label-questions-for-analysis) replace long prompts where configured; compact mode switches to IDs instead.
- Tests and scored modules provide difficulty, corrected item-total correlation (**Trennschärfe**), Cronbach's alpha, and score summaries. Reliability is calculated separately for identical shown-item sets using complete scored responses; insufficient data and zero variance are explicit, not zero reliability.
- Surveys and feedback have descriptive counts/frequencies and numeric means, not invented answer keys or reliability estimates. Conditional questions can have different denominators.

Stats uses pseudonymous `ce_uid` values, not resolved names, emails, or registration identities. **Free text and reflections are exported unchanged and can identify someone.** Handle reports confidentially; pseudonymous does not mean anonymous.

## Interpret counts carefully

- A learner count is not an attempt count.
- A known roster requires evidence; a public room does not automatically have a complete enrollment denominator.
- Sequence completion and clinical-case completion are distinct measures.
- Preview/sandbox work should not be interpreted as learner participation.
- Order prevalence counts attempts containing an item; repeated orders and total orders are different measures.
- Activity time is not necessarily wall-clock time.

Educational attendance exports can include registered students who never logged in. They are not proof of physical presence or a certified grade; ask IT for the [scoped operator workflow](../it-administrators/data-governance.md).

## Handle bug reports

**Access:** `bug_reports` viewing permission to read reports; management permission to maintain status/notes; application administrators have both. Open **Administration > Bug reports** to triage submissions and review allowed technical context.

Student reports are submitted explicitly; diagnostics are not continuously uploaded. They exclude cookies, credentials, screenshots, chat, answers, and clinical records. Free text can still contain confidential information, so do not ask students to paste patient details or secrets.

Keep report access narrow and apply institutional retention. Reports are included in full database backups, not portable medical-content exports.

## A course appears wrong

Before changing content, check the learner's actual classroom, pinned revision, access window, and account/consent state. A student's older published course is not necessarily a failed source update. Use the supported publication/access workflow rather than modifying stored attempts.
