#### 3.4.1  `logic_server.js`

The `logic_server.js` file contains logic functions to process and transform patient-specific data. It acts as connection between the Supabase database and the Clinic Edge application. 

This script includes functions for:
- generating lab values and vital signs
- requesting, creating and storing diagnostic findings
- prescribing medications
- assigning and removing diagnoses
- pushing new case templates

These functions in `logic_server.js` rely on internal reference files such as `labvalues.js` and `normalfindings_collection.js`, and interact with functions from `logic.js`. For more details on system logic, and how data flows, see **4. System Logic**.

##### Key Functions

generateLabValues

generateVitalValues

generateFinding

requestLab

requestFinding

addRx

addDiagnosis

removeDiagnosis

getRx

pushCaseTemplates