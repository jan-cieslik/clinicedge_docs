# 3.2.12 `classroom_cases`

## Table Structure

| Column        | Format  | Type   | Description                                                               |
|---------------|---------|--------|---------------------------------------------------------------------------|
| `id`          | bigint  | number | Internal ID for each classroom case                               |
| `classroom`   | bigint  | number | Contains IDs of the assigned `classrooms`                             |
| `case_id`     | bigint  | number | Contains references to the associated case data in `CaseTemplates`         |
| `internal_name`| text   | string | Name of each case          |

![](./Images/3_2_12_classroom_cases_supabase.png)



## Integration within the System

```mermaid
flowchart TD
    A["classroom_cases Table"]:::supabase <-- connected via classroom ID --> B["classrooms Table"]:::supabase
    A <-- connected via case_id --> C["CaseTemplates Table"]:::supabase

classDef UI fill:#30acac,stroke:#000000,stroke-width:1px;
classDef logic fill:#cc4078,stroke:#000000,stroke-width:1px;
classDef supabase fill:#40cc8c,stroke:#000000,stroke-width:1px;
classDef reference fill:#8240cc,stroke:#000000,stroke-width:1px;
``` 