#### 3.2.7 `PatFindings` 

Every time, a finding is requested for a patient, it will be saved in `PatFindings` and given an `id`. In addition to the `pat_id`, which refers to the patient the finding was requested for, the following information is stored in this table:

| Column     | Format | Type   | Description                                                              |
|------------|--------|--------|--------------------------------------------------------------------------|
| `data`    | jsonb | json | Reports of the findings, including text, title and images                    |
| `request_group`   | text   | string | Examination group (e.g., imaging, physical or microbiology)       |
| `request_item`  | text   | string   | Requested examination type (e.g., `us` = ultrasound or `mri`)     | 
| `request_type`  | text   | string   | Specific examination type (e.g., `us_tv` = transvaginal ultrasound or `mri_abdomen`)| 

### Integration with FindingsTemplate and PatBase
When a user requests a diagnostic method (e.g., "Transvaginal Ultrasound"), the system:
1. fetches relevant findings from `pat_data` within `PatBase`
2. uses the matching template for the requested test or examination from `FindingsTemplate`
3. renders the output report
4. stores the rendered result in `PatFindings`