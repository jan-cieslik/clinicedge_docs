# 3.2.6 `PatDiagnosis` 

The `PatDiagnosis` table in Supabase stores the ICD-10 diagnoses assigned to a patient case by the user. Each diagnosis is defined by a `diagnosis_id` and linked to the corresponding patient via `pat_id` as in the `PatBase` table.

## Table Structure

| Column         | Format     | Type       | Description                                                          |
|----------------|------------|------------|----------------------------------------------------------------------|
| `id`           | bigint     | number     | Unique identifier for this diagnosis entry                           |
| `pat_id`       | bigint     | number     | Corresponding patient case (as in `PatBase`)                         |
| `diagnosis_id` | bigint     | number     | ICD-10 diagnosis code                                                |

![](./Images/3_2_6_pat_diagnosis_supabase.jpg)

## Integration within the System

```mermaid
flowchart TD
    U["User assigns diagnosis"]:::UI -- executes function --> A["addDiagnosis"]:::logic
    A -- stores diagnosis in --> B["PatDiagnosis Table"]:::supabase
    B <-- are connected via pat_id --> E["PatBase Table"]:::supabase

classDef UI fill:#30acac,stroke:#000000,stroke-width:1px;
classDef logic fill:#cc4078,stroke:#000000,stroke-width:1px;
classDef supabase fill:#40cc8c,stroke:#000000,stroke-width:1px;
classDef reference fill:#8240cc,stroke:#000000,stroke-width:1px;
``` 
