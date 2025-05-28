#### 3.2.1 `CardinalSymptoms`

The `CardinalSymptoms` table defines a reference list of common cardinal symptoms. It serves as a symptom dictionary that allows diagnoses to be grouped based on shared clinical manifestations. These symptoms are displayed on the landing page, where users can select one to receive a randomly generated patient case linked to that symptom.

### Table Structure
Each symptom is presented on the landing page using a title (`manifestation`) and an optional image, both defined in the `cs_data` field.

| Column     | Format | Type   | Description                                                              |
|------------|--------|--------|--------------------------------------------------------------------------|
| `cs_id`    | bigint | number | Internal ID for each cardinal symptom                                    |
| `cs_key`   | text   | string | Identifier for each cardinal symptom (e.g., `"breast_pain"`)             |
| `cs_data`  | jsonb  | json   | JSON object containing display metadata, such as title and optional image|

### Integration with CaseTemplates
Each diagnosis JSON in CaseTemplates includes a cardinal_symptoms array.
Example Data:
```json
"cardinal_symptoms": [
    "abdominal_pain",
    "fever",
    "acute_abdomen",
    "menstrual_disorder"
]
```