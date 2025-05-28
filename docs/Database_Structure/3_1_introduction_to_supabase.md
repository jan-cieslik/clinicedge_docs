### 3.1 Introduction to Supabase

**Supabase** is used as the backend database for Clinic Edge. It consists of multiple tables for storage and management of data, including case data, patient data, and more. These tables and their associated data interact with each other and represent key components of the Clinic Edge workflow.

A brief overview of the tables is provided below, while more detailed descriptions are given in the respective subsections. For an explanation of how tables interact and data is processed, see [**Section 4. System Logic**](../4_1_system_logic.md).

| Table                   | Description                                                                  |
|-------------------------|------------------------------------------------------------------------------|
| `CardinalSymptoms`      | Lists all selectable cardinal symptoms on the landing page                   |
| `CaseTemplates`         | Stores all static and dynamic case templates (`case_id`)                     |
| `FindingsTemplate`      | Templates to generate diagnostic reports for each examination                |
| `PatBase`               | Stores all dynamically generated patient cases (`pat_id`)                    |
| `PatChat`               | Chat logs between user and patient                                           |
| `PatDiagnosis`          | Contains diagnoses assigned to each patient                                  |
| `PatFindings`           | Stores the findings requested for each patient case                          |
| `PatReports`            | Stores rendered reports generated for each patient                           |
| `PatRx`                 |                                                                              |
| `all_cardinal_symptoms` |                                                                              |
| `bfarm_ref_med`         | BfArM reference data for ...                                                 |
| `bfarm_ref_pharm`       | BfArM reference data for ...                                                 |
| `bfarm_ref_substance`   | BfArM reference data for ...                                                 |
| `icd10`                 | ICD-10 diagnosis code reference table                                        |


