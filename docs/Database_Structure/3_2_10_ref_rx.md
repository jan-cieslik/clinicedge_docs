# 3.2.10 `ref_rx`

The `ref_rx` table in supabase stores the BfArM reference data for pharmacy products and is referenced when patients are prescribed medications.

## Table Structure

| Column            | Format  | Type   | Description                                                               |
|-------------------|---------|--------|---------------------------------------------------------------------------|
| `id`              | bigint  | number | Unique identifier for each substance and is equal to the PPN              |
| `ppn`             | bigint  | number | Pharmacy Product Number (PPN) of each substance                           |
| `count_substances`| bigint  | number |                                                                           |
| `name_strength`   | text    | string | Name and strength of the medication                                       |
| `adm_short`       | text    | string | Abbreviation of the dosage form                                           |
| `adm_long`        | text    | string | Dosage form (e.g., tablet)                                                |
| `adm_detail`      | text    | string | Specification of the dosage form (e.g., film-coated tablet)               |

![](./Images/3_2_10_ref_rx_supabase.png)


## Integration within the System

```mermaid
flowchart TD
    U["User prescribes medication"]:::UI -- executes function --> A["addRx"]:::logic
    C[ref_rx Table]:::supabase -- BfArM reference data is retrieved --> A  
    A -- stores prescription in --> B["PatRx Table"]:::supabase
    B <-- are connected via pat_id --> E["PatBase Table"]:::supabase

classDef UI fill:#30acac,stroke:#000000,stroke-width:1px;
classDef logic fill:#cc4078,stroke:#000000,stroke-width:1px;
classDef supabase fill:#40cc8c,stroke:#000000,stroke-width:1px;
classDef reference fill:#8240cc,stroke:#000000,stroke-width:1px;
```