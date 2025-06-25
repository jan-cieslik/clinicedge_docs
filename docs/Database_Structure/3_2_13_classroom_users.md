# 3.2.13 `classroom_users`

The `classroom_users` table in Supabase stores the IDs of users assigned to a classroom.

## Table Structure

| Column        | Format  | Type   | Description                                                               |
|---------------|---------|--------|---------------------------------------------------------------------------|
| `id`          | bigint  | number | Internal ID for each classroom user                                       |
| `classroom`   | bigint  | number | Contains IDs of the assigned classrooms                                   |
| `userid`      | text    | string | ID of each user                                                           |

![]()


## Integration within the System

```mermaid
flowchart TD
    A["classroom_users Table"]:::supabase <-- connected via classroom ID --> B["classrooms Table"]:::supabase

classDef UI fill:#30acac,stroke:#000000,stroke-width:1px;
classDef logic fill:#cc4078,stroke:#000000,stroke-width:1px;
classDef supabase fill:#40cc8c,stroke:#000000,stroke-width:1px;
classDef reference fill:#8240cc,stroke:#000000,stroke-width:1px;
```