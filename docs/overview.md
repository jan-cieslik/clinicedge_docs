---
title: ClinicEdge documentation
description: Find practical ClinicEdge guides for IT administrators, course administrators, course staff, and students.
slug: /overview
---

# ClinicEdge documentation

ClinicEdge is a clinical simulation platform for medical education. Students work through simulated patient encounters, investigations, diagnoses, treatment, and handover. Educators can combine cases, questionnaires, interactive learning classes, and shared seminars into a course.

**This is an educational simulator, not a clinical information system for real patient care.** Use fictional cases or appropriately de-identified, institution-approved teaching material.

## Choose your guide

| Your task | Start here |
| --- | --- |
| Host, secure, integrate, and maintain an installation | [For IT Administrators](./it-administrators/index.md) |
| Prepare medical content, publish courses, and organize access | [For Course Administrators](./course-administrators/index.md) |
| Supervise learners and run teaching sessions | [For Course Staff](./course-staff/index.md) |
| Sign in and complete your learning activities | [For Students](./students/index.md) |

These are documentation audiences, not four new account roles. Your menus depend on your actual permissions, assigned classrooms, and sign-in method.

## How the pieces fit together

- A **case template** describes a scenario. A student's **patient attempt** is a generated instance, not the original template.
- A **classroom** provides access to teaching content. A **sequence** puts activities in an ordered course.
- A **draft** can change. **Publication** makes a version available to learners. Existing sequence learners normally keep their assigned version.
- **Moderation** is the shared content and administration panel. **Supervision** is the staff workspace for assigned classrooms.
- A **group seminar** is a shared teaching run; it does not create a separate patient for every participant.

## What changed from older documentation?

ClinicEdge now uses PocketBase and native account/session management. Supabase and Clerk are not installation prerequisites. Course administrators normally use the panel rather than editing database records or application source files. Older documentation URLs lead to the closest current guide.

Need a quick path? Start with [course setup](./course-administrators/classrooms.md), [a student's first case](./students/clinical-case.md), or [production installation](./it-administrators/installation.md).
