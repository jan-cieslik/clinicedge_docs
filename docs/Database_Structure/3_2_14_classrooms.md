# 3.2.14 `classrooms`

The `classrooms` table in Supabase stores the created classrooms, to which several cases can be assigned. To learn how to create a new classroom, see [**Section 5.4 How to Create a Classroom**](../Tutorials/5_4_tutorial_classroom.md).

## Table Structure

| Column        | Format  | Type   | Description                                                               |
|---------------|---------|--------|---------------------------------------------------------------------------|
| `id`          | bigint  | number | Internal ID for each created classroom                                    |
| `name`        | text    | string |  Name of each classroom                                                   |
| `default`     | bool    | boolean| `TRUE`, if classroom is active and should be shown in the case overview; `FALSE`, if classroom is inactive |
| `mode`        | text    | string| `rnd`, if cases should be selected randomly; `NULL`, if cases are selected by the creator of the classroom |

![](./Images/3_2_14_classrooms_supabase.png)


## Integration within the System

```mermaid
flowchart TD
    A["classrooms Table"]:::supabase <-- connected via classroom ID --> B["classroom_cases Table"]:::supabase
    A <-- connected via classroom ID --> C["classroom_users Table"]:::supabase

classDef UI fill:#30acac,stroke:#000000,stroke-width:1px;
classDef logic fill:#cc4078,stroke:#000000,stroke-width:1px;
classDef supabase fill:#40cc8c,stroke:#000000,stroke-width:1px;
classDef reference fill:#8240cc,stroke:#000000,stroke-width:1px;
``` 