---
sidebar_position: 4
---
# 2.2 Key Functionalities

This chapter presents the key functionalities step by step — from case selection to diagnosis.

## 1. Case Selection

Users begin by selecting a **cardinal symptom** on the landing page (e.g., abdominal pain, fever, vaginal bleeding) to open and receive a new patient case.

## 2. Review the Case

Once a case is loaded, users can review:
- Basic information (e.g., age, sex)
- Vitals (e.g., temperature, heart rate)

*Screen recording placeholder*: 
Selecting a cardinal symptom, new case is loaded, basic information is presented

## 3. Chat with the Patient

To investigate the patient’s symptoms and clinical history, users can use the **AI-powered patient chat** to explore:
- Current symptoms
- Medical history (e.g., pre-existing conditions, prior surgeries)  
- Menstrual history  

*Screen recording placeholder:*  
AI chat preview

## 4. Request & Review Diagnostic Tests

Based on clinical interpreation, users can request relevant diagnostic tests and examinations, including:
- Lab tests (e.g., CRP, hemoglobin)  
- Microbiology and urinalysis (e.g., cultures, vaginal swabs)  
- Imaging (e.g., ultrasound, MRI, CT, X-ray)  
- Invasive diagnostics (e.g., laparoscopy, biopsy, hysteroscopy, cytopathology)

Each request returns auto-generated results, including:
- Lab values 
- Microbiology results  
- Written diagnostic reports for imaging and and other diagnostic procedures

*Screen recording placeholder*: 
Request labs, imaging, and view corresponding result reports

## 5. Assign Diagnosis & Prescriptions

Once enough information has been gathered, users can:
- Assign **ICD-10 diagnoses**
- Add **prescriptions**

*Screen recording placeholder:*  
Selecting diagnosis and prescriptions

## Summary 

```mermaid
graph LR
  A[Select Cardinal Symptom] --> B[New Case]
  B --> C[Check basic info and vitals]
  C --> D[Chat with patient to uncover symptoms & history]
  D --> E[Request labs, imaging, diagnostics]
  E --> F[Review reports & interpret findings]
  F --> G[Assign diagnosis and prescriptions]
  G --> H[Case complete]

```