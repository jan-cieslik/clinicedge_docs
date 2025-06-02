# 5.2 How to Create a New Examination Type  

To add a new exam (e.g., `breast_us`):
1. Create a new [`FindingsTemplate`](../Database_Structure/3_2_3_findings_template.md) entry.
2. Add the corresponding `request_group`, `request_item`, and `request_type`.
3. Write a new template for the report output and include all variables.
4. Define `vars` for all relevant anatomical measurements or features.
5. Define `vars_path` for all diagnosis-specific findings (cross-link with `case_data`).