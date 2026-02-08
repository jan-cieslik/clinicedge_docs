# 3.2.15 `PatHandover` 

The `PatHandover` table contains all handover notes written by users. Each handover note is linked to the corresponding patient via `pat_id`.

| Column          | Format | Type   | Description                                                                 |
|-----------------|--------|--------|-----------------------------------------------------------------------------|
| `pat_id`        | bigint | number | Refers to the corresponding patient in `PatBase`                            |
| `handover_note` | text   | string | Handover note created by the user                                           |

![](./Images/3_2_15_pat_handover.png)


## Integration within the System

```mermaid
flowchart TD
    A["PatHandover Table"]:::supabase <-- connected via patient ID --> B["PatBase Table"]:::supabase
    

classDef UI fill:#30acac,stroke:#000000,stroke-width:1px;
classDef logic fill:#cc4078,stroke:#000000,stroke-width:1px;
classDef supabase fill:#40cc8c,stroke:#000000,stroke-width:1px;
classDef reference fill:#8240cc,stroke:#000000,stroke-width:1px;
``` 