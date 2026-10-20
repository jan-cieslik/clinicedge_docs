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
| Manage classrooms, sequences, questionnaires, and learning classes | `classrooms` tool |
| Issue ID/PIN cohorts and manage their schedules/signup links | `access_codes` tool |
| Manage studies and consent documents | Independent `studies` tool |
| Handle submitted bug reports | Independent `bug_reports` tool |
| Grant permissions; manage settings, LTI, standard values/reference imports | Application administrator |
| Supervise a particular classroom and run its seminars | Explicit classroom staff assignment, or application administrator |

Administrators have the panel's content/tool privileges automatically. A moderation permission does not itself grant classroom supervision. Student membership is not a staff assignment.

## Grant access through the panel

An administrator opens **Administration > Permissions**, selects the correct account, and grants the minimum necessary edit/review capabilities or tools. Assign classroom supervisors separately in the classroom editor.

Test with the recipient's own standard staff account. ID/PIN learner sessions and restricted LMS sessions should not be used to administer teaching.

## A menu is missing

Check the signed-in account, identity type, and explicit grants. For supervision, check the classroom assignment even if the person can edit that classroom. Revocation is enforced on subsequent authorized requests; a previously open page is not continued permission.

Do not share an administrator account to work around a missing grant.
