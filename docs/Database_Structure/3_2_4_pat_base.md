# 3.2.4 `PatBase`

The `PatBase` table in Supabase stores all dynamically and statically generated patient cases. Each patient case is assigned a unique `pat_id` and is linked to a case/diagnosis via `case_id`. While multiple patient cases can originate from the same `case_id`, each `pat_id` exists only once. 

The `pat_data` contains all patient-specific findings and values in JSON format and is generated from `case_data` within the `CaseTemplates` Table. It includes information such as age, gender, lab values, findings, vitals, medical history, and more. 

## Table Structure

| Column        | Format  | Type   | Description                                                               |
|---------------|---------|--------|---------------------------------------------------------------------------|
| `pat_id`     | bigint   | number | Internal ID for each generated patient case                               |
| `case_id`     | bigint  | number | Internal ID for each case template                                        |
| `pat_data`   | jsonb    | json   | JSON object containing all generated patient-specific parameters          |

![](./Images/3_2_4_pat_base_supabase.jpg)

Example `pat_data`:
```json

```

## Integration within the System

The `pat_data` serves as the basis for nearly all user interactions in a patient case. When a user performs an action, the system pulls the corresponding information from `pat_data`. 

```mermaid
flowchart TD
    A["CaseTemplates (case_data)"]:::supabase -- used to generate --> B["PatBase (pat_data)"]:::supabase
    B <--> C["PatFindings"]:::supabase
    B <--> D["PatChat"]:::supabase
    B <--> E["PatDiagnosis"]:::supabase
    B <--> F["PatReports"]:::supabase
    B <--> G["PatRx"]:::supabase

classDef supabase fill:#40cc8c,stroke:#000000,stroke-width:1px;
classDef UI fill:#30acac,stroke:#000000,stroke-width:1px;
classDef logic fill:#cc4078,stroke:#000000,stroke-width:1px;
classDef reference fill:#8240cc,stroke:#
```

Typical examples of when `pat_data` is retrieved:

For example:
```mermaid
flowchart TD
    A["Requesting Lab Values"]:::UI --> B["pat_data.labs"]:::supabase
    C["Requesting Diagnostic Findings"]:::UI --> D["pat_data.findings"]:::supabase
    E["Initiating Patient Chat"]:::UI --> F["pat_data.history"]:::supabase
    B & D & F --> I["PatBase Table"]:::supabase

classDef UI fill:#30acac,stroke:#000000,stroke-width:1px;
classDef supabase fill:#40cc8c,stroke:#000000,stroke-width:1px;
```

All of these actions refer back to the `pat_data` within the `PatBase` table via the `pat_id`.