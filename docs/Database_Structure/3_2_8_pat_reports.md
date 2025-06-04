# 3.2.8 `PatReports` 

The `PatReport` table in supabase stores the `report_info` and refers to a specific patient via `pat_id`. Each report is assigned a `report_id`.

## Table Structure

| Column        | Format      | Type      | Description                                                              |
|---------------|-------------|-----------|--------------------------------------------------------------------------|
| `report_id`   | bigint      | number    | Unique ID of the report                                                  |
| `pat_id`      | bigint      | number    | Corresponding patient case (as in `PatBase`)                             |
| `report_info` | jsonb       | json      |                                                                          |

Example `report_info`:
```json

```

## Integration within the System

```mermaid

```