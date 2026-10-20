---
title: Connect an LMS with LTI
description: Register LTI 1.3 or 1.1 platforms, map course placements, test restricted launches, and diagnose outcomes in ClinicEdge.
---

# Connect an LMS with LTI

**Access:** application administrator plus an LMS administrator. Open **Moderation > Administration > LTI**. Do not create registrations by manually inserting database rows.

## Register the platform

1. Choose the platform's supported protocol: LTI 1.3 or legacy LTI 1.1.
2. For **1.3**, obtain the issuer, client ID, deployment ID, authorization endpoint, public JWKS URL, and token endpoint from the LMS.
3. For **1.1**, agree the consumer key and shared secret. Treat the secret as a credential, not course metadata.
4. Save the registration and use its platform checks. Copy the tool URLs shown by the panel into the LMS rather than guessing URLs from the internal Docker hostname.

For 1.3 signing/outcomes, configure `LTI_TOOL_KEY_ID`, `LTI_TOOL_PRIVATE_KEY`, and the applicable outcome worker configuration in the deployment environment. Store the key securely; never include it in a teaching guide or browser screenshot.

## Map a placement

Create a placement for the correct registration, select its case or classroom target, and set the platform resource-link ID where required. Use a recognizable public title. Review the required-case count for supported completion reporting.

Launch from the LMS with a synthetic student, not an administrator browser session. Verify the target, language, course restrictions, progression, completion, and any expected LMS result. A launch does not grant general access to moderation or other classrooms.

## Completion and outcomes

LTI 1.3 uses the platform's assignment/grade-service capabilities where provided; 1.1 uses its supported basic outcome service. Successful sign-in alone is not proof that results are delivered. Check the configured placement, completion requirement, service endpoints/permissions, and outcome processing before promising gradebook integration.

Course sequences retain their published content and progression rules when entered through an LMS. Do not assume the LMS makes every ClinicEdge assessment a separate gradebook item.

## Troubleshooting

- Confirm that `APP_URL` matches the public HTTPS origin and the LMS's registered tool URLs.
- Check issuer, deployment/client identifiers, signing configuration, and server clock.
- Use platform checks and the panel's access-attempt diagnostics; share only sanitized context.
- Distinguish launch/signature failures from target access failures and outcome-delivery failures.

Never place an LTI shared secret, signing key, or launch payload in a public bug report.
