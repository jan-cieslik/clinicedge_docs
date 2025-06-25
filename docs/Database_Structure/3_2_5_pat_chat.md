# 3.2.5 `PatChat`

Clinic Edge offers the functionality to take the medical history of a patient via chatting with an AI bot (text or audio). The information, which is gathered during the anamnesis, is stored in the `PatChat` table in Supabase and assigned to the patient case using the `pat_id` (as in `PatBase`). In addition to the `content` of the conversation, the table also contains some audio information if this functionality is used.

![](./Images/3_2_5_pat_chat_ce.jpg)

## Table Structure

| Column     | Format | Type   | Description                                                              |
|------------|--------|--------|--------------------------------------------------------------------------|
| `id`       | bigint | number | Unique ID of each statement (from the Patient/AI bot) or question (from the user)|
| `pat_id`   | bigint | number | Corresponding patient case (as in `PatBase`)                             |
| `content`  | jsonb  | json   | Conversation content                                                     |
| `audio`    | jsonb  | json   | Audio content if audio functionality is used (optional)                  |

Example `content`:

User:
```
Nehmen Sie Medikamente?
```
Patient:
```
Nein, ich nehme keine Dauermedikation ein.
```

## Integration within the System

When a user initiates the patient chat, the system fetches `pat_data` from `PatBase` and uses the AI model `xxx` to provide responses and run the conservation. The `pat_data` contains all patient-specific findings and values in JSON format and is generated from `case_data` within the `CaseTemplates` Table. For details on the structure and content of `pat_data`, see [**Section 3.2.4 PatBase**](./3_2_4_pat_base.md).

The chat, including text and optionally audio, is recorded and stored in the `PatChat` table in Supabase. Each entry is linked to the corresponding patient via `pat_id`. 

```mermaid
flowchart TD
    U["User initiates patient chat"]:::UI -- executes --> A["xxx function"]:::logic
    A -- retrieves patient-specific data from ---> D["PatBase Table"]:::supabase
    D -- and generates answers executing --> F["xxx function"]:::logic 
    F -- records chat in --> B["PatChat Table"]:::supabase
    B <-- are connected via pat_id --> E["PatBase Table"]:::supabase

classDef supabase fill:#40cc8c,stroke:#000000,stroke-width:1px;
classDef UI fill:#30acac,stroke:#000000,stroke-width:1px;
classDef logic fill:#cc4078,stroke:#000000,stroke-width:1px;
classDef reference fill:#8240cc,stroke:#000000,stroke-width:1px;
```