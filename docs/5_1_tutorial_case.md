### 5.1 How to Create a New Case  

1. Add a JSON case to `CaseTemplates`
  - Assign a new `case_id`
  - Choose the type of your case (dynamic/static)
  - Define age, gender, labs, vitals, history, findings, cardinal_symptoms
2. Add or reuse vars_path entries in `FindingsTemplate`
  - ensure to add case-specific findings to vars_path of all applicable examinations in `FindingsTemplate`
3. Extend `normalfindings_collection.json` and `labvalues.json` if necessary