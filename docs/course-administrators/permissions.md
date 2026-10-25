---
title: Permissions and responsibilities
description: Understand ClinicEdge content editing, review, course tools, system administration, and classroom supervision permissions.
---

# Permissions and responsibilities

The audience labels in these docs describe responsibilities, not application roles. A course administrator may have only the particular tools they need.

## Capability matrix

| Task | Required access |
| --- | --- |
| Edit cases, finding templates, labs/groups, or vitals | Edit grant for that content type |
| Review and approve a content type | Review grant for that content type |
| Manage classrooms, sequences, and learning classes | `classrooms` management grant |
| Read classroom settings, sequence previews/history and teacher results; download CSV | `classrooms` viewing grant (management also includes viewing) |
| Create, import, edit, publish, overwrite, replace wording, or archive questionnaires | Independent `questionnaires` management grant |
| Preview/download questionnaire definitions and present live test responses | `questionnaires` viewing grant (management also includes viewing) |
| Preview and download cross-course statistics | Independent `stats` viewing grant |
| Issue ID/PIN cohorts and manage their schedules/signup links | `access_codes` tool |
| Manage studies and consent documents | Independent `studies` tool |
| Handle submitted bug reports | Independent `bug_reports` tool |
| Grant permissions; manage settings, LTI, standard values/reference imports | Application administrator |
| Supervise a particular classroom and run its seminars | Explicit classroom staff assignment, or application administrator |

Administrators have the panel's content/tool privileges automatically. A moderation permission does not itself grant classroom supervision. Student membership is not a staff assignment.

Classrooms, questionnaires, studies, and bug reports have separate viewing and management capabilities. A viewing grant is not permission to change records. **Stats (view and download)** is a read-only reporting grant. ID/PIN issuance uses its own management tool.

To author a sequence containing an existing published test, classroom management is enough. To create or revise that test as well, request questionnaire management separately. A classroom supervisor needs questionnaire viewing access in addition to their assignment to [present aggregate test responses](../course-staff/test-presentation.md); the assignment alone does not grant it.

## Grant access through the panel

An administrator opens **Administration > Permissions**, selects the correct account, and grants the minimum necessary edit/review capabilities or tools. Assign classroom supervisors separately in the classroom editor.

Test with the recipient's own standard staff account. ID/PIN learner sessions and restricted LMS sessions should not be used to administer teaching.

## A menu is missing

Check the signed-in account, identity type, and explicit grants. For supervision, check the classroom assignment even if the person can edit that classroom. Revocation is enforced on subsequent authorized requests; a previously open page is not continued permission.

Do not share an administrator account to work around a missing grant.
