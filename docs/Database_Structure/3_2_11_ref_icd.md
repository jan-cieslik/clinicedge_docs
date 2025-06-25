# 3.2.11 `ref_icd` 

The `ref_icd` table in supabase stores the ICD-10 diagnosis codes and is referenced when a user assigns a diagnosis to a patient case.

## Table Structure

| Column        | Format  | Type   | Description                                                               |
|---------------|---------|--------|---------------------------------------------------------------------------|
| `id`          | bigint  | number | Internal ID of each ICD-10 diagnosis code                                 |
| `primary1`    | text    | string | ICD-10 diagnosis code                                                     |
| `text`        | text    | string | Description of the diagnosis                                              |
| `conc`        | text    | string | `primary1` (ICD-10 code) concatenated with `text` (description of the diagnosis) |
| `fts`         | tsvector| tsvector| Contains data to optimize text search                                    |

![](./Images/3_2_11_icd10_supabase.png)


## Integration within the System

```mermaid
flowchart TD
    U["User assigns diagnosis"]:::UI -- executes function --> A["addDiagnosis"]:::logic
    C[ref_icd Table]:::supabase -- ICD-10 codes are retrieved --> A  
    A -- stores diagnosis in --> B["PatDiagnosis Table"]:::supabase
    B <-- are connected via pat_id --> E["PatBase Table"]:::supabase

classDef UI fill:#30acac,stroke:#000000,stroke-width:1px;
classDef logic fill:#cc4078,stroke:#000000,stroke-width:1px;
classDef supabase fill:#40cc8c,stroke:#000000,stroke-width:1px;
classDef reference fill:#8240cc,stroke:#000000,stroke-width:1px;
```