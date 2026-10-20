---
title: Manage studies and consent
description: Configure approved ClinicEdge studies, versioned consent PDFs, optional or required participation, and withdrawal policies.
---

# Manage studies and consent

**Access:** independent `studies` tool, or application administrator. Open **Administration > Studies**. Access-code permission alone does not grant study management.

## Prepare before activation

1. Obtain institutional approval for the protocol, documents, privacy notice, retention, and learning-after-decline policy.
2. Have the offline custodian generate the required keypair; register **only its public key**.
3. Create the study with localized names, withdrawal contact and approved policy metadata.
4. Upload reviewed consent PDFs, publish immutable versions, and select the accepted version for each language or an explicit shared-language mapping.
5. Activate only when the policy and documents are ready.

PDF validation is not antivirus scanning or legal review. Published document versions cannot be silently replaced by uploading a new file.

## Connect access to the study

When issuing a study-linked cohort, choose online or in-person consent and the decline policy:

- **Continue without study:** declined/withdrawn participants may continue non-study learning, subject to their ordinary account/access rules.
- **Study only:** declining/withdrawing blocks that learning access.

In-person issuance requires attestation that signed paper consent has already been obtained. It is not an online signature upload and does not require putting names into account profiles.

Private signup can offer optional or mandatory participation. An optional offer does not create participation merely because the student sees it; explicit opt-in starts that consent workflow.

## Student experience

Pending assigned participants complete the consent step before clinical access. Online consent requires the displayed declaration; decline does not require name fields. Students can later access their accepted PDF/status and withdraw. Archived studies still allow withdrawal.

Names are encrypted before storage; ordinary staff pages do not decrypt them. Do not promise that pseudonymous linkage is anonymous data.

## Operational boundaries

Historical "study consent" flags are not consent evidence. Expiring or disabling an account does not automatically withdraw consent. Study results, educational attendance and operational learner access must be interpreted separately.

Coordinate [exports, offline custody, and retention](../it-administrators/data-governance.md) with IT. There is no general one-click full-study erasure or universal automatic deletion job.
