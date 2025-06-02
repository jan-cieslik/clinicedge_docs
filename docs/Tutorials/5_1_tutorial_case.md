# 5.1 How to Create a New Case  

1. Add a JSON case to [`CaseTemplates`](../Database_Structure/3_2_2_case_templates.md).
  - Assign a new `case_id`.
  - Choose the type of your case (dynamic/static). An overview of the differences can be found [here](../Database_Structure/3_2_2_case_templates.md).
  - Define age, gender, labs, vitals, history, findings and cardinal_symptoms.
2. Add or reuse vars_path entries in [`FindingsTemplate`](../Database_Structure/3_2_3_findings_template.md).
  - Ensure to add case-specific findings to vars_path of all applicable examinations in `FindingsTemplate`.
3. Extend `normalfindings_collection.json` and `labvalues.json` if necessary.