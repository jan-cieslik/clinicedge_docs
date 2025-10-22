---
sidebar_position: 2
---
# 1.1 Project Introduction

**Clinic Edge** is a patient case simulator designed for medical education that generates realistic clinical case scenarios in gynecology and obstetrics, supporting both static and dynamic patient cases. Dynamic cases are built upon probabilistic templates, allowing the system to generate an endless number of non-repititive patient cases. 

**Clinic Edge** offers an interactive way to explore, assess and request patient data like in a real clinical setting, with case-specific data such as imaging, lab values, etc. generated on demand.

**Clinic Edge** supports two types of cases:

- **Dynamic cases** are based on predefined probabilistic templates that auto-generate case-specific findings, values, and symptoms.
- **Static cases** are based on fixed values and reports, usually representing a typical presentation of a diagnosis.  These cases are especially useful for teaching purposes.

All cases are stored as JSON files and managed through **PSQL (Supabase)**, the platform used as the backend database. 

## Key Functionalities

### User Features

- Select patient cases by choosing a cardinal symptom (e.g., abdominal pain) on the landing page
- Order lab tests, imaging, and procedures to investigate the case
- Receive auto-generated diagnostic reports in real time
- Chat with the patient to explore medical history using the AI-based chat option
- Assign ICD-10 diagnoses and prescriptions

### Developer Features

- Create or modify case templates (static or dynamic) to generate customized patient cases
- Add or modify requests and examinations, including lab tests, imaging, and diagnostic procedures  
- Customize probabilistic findings for lab values, vitals, imaging results, and clinical history  

This documentation explains how Clinic Edge is structured, how it works, and how new cases or diagnostic tools can be added and configured.
