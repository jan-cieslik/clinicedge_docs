---
title: Findings, values, and reference catalogs
description: Maintain ClinicEdge finding templates, laboratory groups, vital ranges, standard content, and diagnosis or medication reference imports through supported tools.
---

# Findings, values, and reference catalogs

Different reference tools serve different purposes. A normal laboratory range is not a diagnosis catalog, and a finding template is not a student's generated result.

## Findings and clinical values

Open **Values/Templates** in Moderation. Your grants determine which content types are available: **Finding templates**, **Lab values**, **Lab panels**, and **Vital signs**.

- **Finding templates:** choose the request group/item/type, write report text, and use the placeholder palette and template tester. Configure supported conditions and variable mappings in the editor.
- **Labs and lab groups:** maintain test definitions, ranges/labels and grouping. Check that groups reference existing tests.
- **Vitals:** maintain supported value/state definitions and their labels.

Validate, preview, and use the [review workflow](./publication.md). Test both normal and abnormal scenarios. A finding template's placeholder names must match the data it receives.

## Standard values and content transfer

**Administration > Standard values** is administrator-only. It provides the supported standard-content export/import tooling, including selection of content types and approved-only export where offered.

Read the preview/result and confirm replacement behavior before applying an import. Portable content is not a backup of students, classrooms, or study evidence.

## Diagnosis and medication catalogs

The same administrator area contains reference-catalog replacement:

1. Obtain the approved source files and check their version/licensing.
2. Select the diagnosis file or all required medication parts (pharmaceutical product, medicinal product, and substance).
3. Review the replacement confirmation.
4. Import, then inspect the reported imported/deleted counts and updated status.
5. Test diagnosis and prescription search using known entries.

This is a catalog replacement, not a case edit. Do not import incomplete medication parts or assume old rows remain.

## Advanced catalog changes

Runtime medical catalogs are stored in PocketBase; repository files are not automatically the live source. Request definitions and catalog structures outside the supported editors need coordinated, validated operator/developer work. Do not follow old tutorials that tell every course author to edit request source files or SQL tables.

Ask IT to preserve a [portable content export and full backup](../it-administrators/backups.md) before broad reference changes.
