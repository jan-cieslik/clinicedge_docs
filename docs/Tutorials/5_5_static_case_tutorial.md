# 5.5 How to Create a Static Case

The following steps describe, how you can create a static case for CLINIC-EDGE.

### 1. Create a JSON FIle and Add Basic Information

Cases for CLINIC-EDGE are saved as JSON files, so the first step is creating a new file for your case. Make sure you enclose the entire case template in `{}`, as this is essential for the structure of JSON files.

Then, add the following information inside the brackets:
- **name of the case:**
```json
"internal_name": "example_case",
```
- **age of the patient:**
```json
"age": {
  "static_value": 26
},
```

- **gender:** The two options for `gender` are `w` and `m`. You can also use both with `["w", "m"]`.
```json
"gender": "w",
```

- **vitals:**
If the vitals correspond to those of a healthy person, write `"vitals": "normal",`. For adding deviations, choose the right option and add the probability `1`. The other vitals will be automatically set to `"normal"`.
```json
"vitals": {
    "fever": 1,
    "tachycardia": 1
  },
```
An overview of the options for vitals is shown in the following table:

| Vital                         | Unit          | Options and Ranges                    |
|-------------------------------|---------------|---------------------------------------|
| `"temperature"`               | °C            | `"normal"`: [36.0, 37.2]              |
|                               |               | `"fever"`: [38.5, 40.0]               |
|                               |               | `"hypothermia"`: [34.0, 35.0]         |
| `"respiratory_rate"`          | breaths/min   | `"normal"`: [12, 20]                  |
|                               |               | `"tachypnea"`: [21, 40]               |
| `"blood_pressure_systolic"`   | mmHg          | `"normal"`: [100, 139]                |
|                               |               | `"hypotension"`: [60, 89]             |
|                               |               | `"hypertension"`: [140, 180]          |
| `"blood_pressure_diastolic"`  | mmHg          | `"normal"`: [70, 100]                 |
|                               |               | `"hypotension"`: [40, 60]             |
|                               |               | `"hypertension"`: [100, 120]          |
| `"heart_rate"`                | bpm           | `"normal"`: [60, 85]                  |
|                               |               | `"tachycardia"`: [100, 140]           |

### 2. Add a Patient History

The patient history includes the general history with information about the bmi, height, pre-existing conditions and surgeries, as well as a section about the menstrual history.
```json
"history": {
  "general_history": {
    "bmi": {
      "static_value": 21
    },
    "height": {
      "static_value": 174
    },
    "pre_existing_conditions": "normal",
    "surgeries": {
      "static_value": [
        "appendectomy",
        "wisdom_tooth_removal"
      ]
    },
  },
  "menstruation": {
    "menarche": {
      "static_value": "14y"
    },
    "cycle_length": {
      "static_value": "33-35_days"
    },
    "contraception": {
      "static_value": "condom"
    },
    "bleeding_pattern": {
      "static_value": "irregular"
    },
    "bleeding_intensity": {
      "static_value": "heavy"
    },
    "menstrual_duration": {
      "static_value": "6_days"
    },
    "last_menstrual_period": {
      "static_value": "22-28_days_ago"
    },
    "dysmenorrhea_occurence": {
      "static_value": "always"
    },
    "intermenstrual_bleeding": {
      "static_value": "sporadic"
    }
  }
},
```

The following table shows an overview of the options, which are available, if you use the key `"normal"` or `"normal_during_postmenopause"` for the section `"menstruation"` or `"common_surgeries_women": true` and `"common_pre_existing_conditions_women": true` for the section `"general_history"`. As `static_value` you can add your own options to the case template as well.

| Section            | Category                   | Options                    |
|--------------------|----------------------------|---------------------------------------|
| `"general_history"`| `"pre_existing_conditions"`| `"anxiety_disorder"`, `"celiac_disease"`, `"chrons_disease"`, `"diabetes_mellitus_type_1"`, `"graves_disease"`, `"hashimotos_thyroiditis"`, `"lupus_erythematodes"`, `"multiple_sclerosis"`, `"psoriasis"`, `"rheumatoid_arthritis"`, `"sjögrens_disease"`, `"ulcerative_colitis"`, `"autoimmune_hepatitis"`, `"depression"`, `"diabetes_mellitus_type_2"`, `"eating_disorder"`, `"endometriosis"`, `"epilepsy"`, `"hypertension"`, `"hyperthyroidism"`, `"hypothyroidism"`, `"iron_deficiency"`, `"migraine"`, `"nicotine_abuse"`, `"pcos"`, `"recurring_urinary_tract_infections"`, `"uterine_myoma"`, `"vitamin_d_deficiency"`              |
|                    | `"surgeries"`              | `"appendectomy"`, `"cholecystectomy"`, `"colonoscopy"`, `"gastroscopy"`, `"tonsillectomy"`, `"wisdom_tooth_removal"`| 
| `"menstruation"`   | `"menarche"`               | `"12y"`, `"13y"`, `"14y"`, `"15y"`, `"16y"`                 |
|                    | `"last_menstrual_period"`  | `"1-7_days_ago"`, `"8-14_days_ago"`, `"15-21_days_ago"`, `"22-28_days_ago"`, `"29-35_days_ago"`, `"36-41_days_ago"`|
|                    | `"bleeding_pattern"`       | `"regular"`, `"irregular"`                                                                                         |
|                    | `"cycle_length"`           | `"21-24_days"`, `"25-28_days"`, `"29-32_days"`, `"33-35_days"`, `"36-40_days"`                                    |
|                    | `"menstrual_duration"`     | `"3_days"`, `"4_days"`, `"5_days"`, `"6_days"`                                                                    |
|                    | `"intermenstrual_bleeding"`| `"none"`, `"sporadic"`                                                                                            |
|                    | `"bleeding_intensity"`     | `"light"`, `"medium"`, `"heavy"`, `"very_heavy"`                                                                  |
|                    | `"dysmenorrhea_occurence"` | `"none"`, `"sporadic"`, `"always"`                                                                                |
|                    | `"contraception"`          | `"none"`, `"condom"`, `"pill"`, `"IUD"`                                                                           |

### 3. Add Lab Values

If there are any lab values that are pathological in your case, you can add them under `"labs"`. The other values will be set to `"normal"`. You either choose one value or set a range:

```json
"labs": {
  "hematocrit": {
    "static_value": 26
  },
  "haemoglobin": {
      "max": 11,
      "min": 13
    }
},
```

An overview of the available lab values is found in the file `lab_value_overview.pdf`. 

### 4. Add findings

If some of the findings should include pathologies, you can define them under the key `"findings"`.

```json
"findings": {
  "imaging": {
      "us": {
        "us_tv": {
          "static_report": {
            "text": "Uterus: av/af 6,6 cm x 2,7 cm x 3,2 cm; Endometrium regelrecht. \n\n Ovar links: 3 cm x 1,5 cm x 1 cm, o.p.B. \n\n Ovar rechts: 3,5 cm x 2,5 cm x 1 cm; rechtes Adnex geschwollen. \n\n Zervix: o.p.B. \n\n Allgemein: Gute Ultraschallbedingungen."
          }
        }
      },
      "mri": {
        "mri_abdomen_whole": {
          "abdominal_cavity": {
            "ascites": 0.1
          }
        }
      }
    },
  "microbiology": {
    "vaginal_swab": {
      "static_report": {
        "text": "Vaginaler pH-Wert: 4,5–5,5. Nachweis von Chlamydia trachomatis."
      }
    }
  },
  "invasive_diagnostics": {
    "surgery": {
      "lsc": {
        "static_report": {
          "text": "Die diagnostische Laparoskopie zeigt ein regelrechtes Peritoneum mit unauffälliger intraabdomineller Anatomie. Der Uterus ist normal groß, glatt konturiert und zeigt keine myomatösen Veränderungen. Keine Anzeichen für Endometriose. Das linke Ovar stellt sich frei beweglich dar. Der linke Eileiter präsentiert sich schlank und ohne Hinweis auf Obstruktion. Das rechte Ovar und der rechte Eileiter weisen eine akute Entzündung mit Schwellung und Adhäsionen auf. Im Douglas-Raum befindet sich freie Flüssigkeit."
        }
      }
    },
    "cytology_pathology": {
      "pap_smear": {
        "static_report": {
          "text": "PAP IV / PAP V. Hochgradige Läsion oder invasives Karzinom nachweisbar."
        }        
      }
    }
  }
},
```

An overview of the available requests is found in the following table.

| Request Groups          | Request Items         | Options                                                                                                   |
|-------------------------|-----------------------|-----------------------------------------------------------------------------------------------------------|
| `"laboratory"`          | `"labs"`              | Overview in the file [lab_value_overview.pdf](./files/lab_value_overview.pdf)        |
|                         | `"microbiology""`     | `"urine_culture"`, `"vaginal_swab"`                    |  
|                         | `"bloodbank"`         | `"blood_group"`, `"blood_antibodies"` (Antibody Screening)   |
| `"imaging"`             | `"mri"`               | `"mri_skull_whole"`, `"mri_skull_brainstem"`, `"mri_skull_pituitary"`, `"mri_skull_orbital"`, `"mri_thorax_whole"`, `"mri_thorax_heart"`, `"mri_abdomen_whole"`, `"mri_abdomen_liver"`, `"mri_abdomen_pancreas"`, `"mri_abdomen_spleen"`, `"mri_mamma_whole"`, `"mri_pelvic_whole"`|
|                         | `"ct"`                | `"ct_skull_whole"`, `"ct_skull_stroke"`, `"ct_thorax_abdomen"`, `"ct_thorax_whole"`, `"ct_abdomen_whole"` |
|                         | `"us"`                | `"us_abdominal"`, `"us_abdominal_preg"`, `"us_tv"`, `"us_rectal"`, `"us_mamma"`, `"us_tte"` (Transthoracic Echo), `"us_tee"` (Transesophageal Echo)   |
|                         | `"xray"`              | `"xray_skull"`, `"xray_thorax"`, `"xray_abdomen"`                  |
|                         | `"ctg"`               | `"ctg_regular"`                                       |
|                         | `"ecg"`               | `"ecg_regular"`                      |
| `"invasive_diagnostics"`| `"surgery"`           | `"hsc"` (Hysteroscopy), `"lsc"` (Laparoscopy), `"colposcopy"`    |
|                         | `"cytology_pathology"`| `"pap_smear"`, `"hpv_test"`, `"breast_biopsy"`, `"cervical_biopsy"`, `"endometrial_biopsy"`, `"ovarian_biopsy"`, `"vulvar_biopsy"`|
|                         | `"biopsy"`            | `"breast_us"` (Breastbiopsy - Sonographic), `"breast_mamm"` (Breastbiopsy - Mammographic), `"breast_mri"` (Breastbiopsy - MRI-guided) |

### 5. Add a `config`

Add a `config`, in which you can define which requests are available for this case. This step is optional. An example is shown here:

```json
{
  "config": {
    "request_whitelist": {
      "imaging": [
        "ctg",
        "us"
      ],
      "laboratory": [
        "labs"
      ]
    }
  },
}
```

### 6. Add a `vignette`

A `vignette` is a brief description of the case, which will appear on the landing page. you an add the `vignette` to the JSON case in `CaseTemplates` as you added the age, history etc. 
In the following you can see an axample:

```json
{
  "vignette": "Sie arbeiten in der gynäkologischen Ambulanz des UKDs. $salutation.salutation $name_last ($gender, $age) wird bei Ihnen vorstellig mit Schmerzen und Druckgefühl im Unterbauch und Becken und einer abdominalen Umfangszunahme seit mehreren Wochen.\n\n **Vitalzeichen**: \n\n Puls: $vitals.values.heart_rate/min \n\n Atemfrequenz: $vitals.values.respiratory_rate/min \n\n RR $vitals.values.blood_pressure_systolic/$vitals.values.blood_pressure_diastolic mmHg \n\n Temperatur: $vitals.values.temperature°C"
}
```

You can also add a `vignette_patient`, for example:

```json
{
  "vignette_patient": "Sie sind $salutation.salutation $name_last, $age Jahre alt und haben Schmerzen und ein Druckgefühl im Unterbauch. Ihr Bauchumfang hat seit mehreren Wochen zugenommen."
}
```

This information will be used by the Chatbot, which acts as the patient in the anamnesis chat.

The third type, the `vignette_evaluation`, is a sample solution of the handover, which will be shown, when a case was finished by the user. An example is shown below:

```json
{
  "vignette_evaluation": "Verdacht auf akute Pyelonephritis in der Schwangerschaft (Fieber, Flankenschmerz, positive Urinbefunde). Empfohlenes Vorgehen: stationäre Aufnahme, i.v.-Flüssigkeitssubstitution, Abnahme von Urin- und Blutkulturen und sofortiger Beginn einer empirischen i.v.-Antibiose (z. B. Ceftriaxon je nach Leitlinie), Analgesie und Antipyrese, engmaschige Labor‑(Entzündungsparameter, Nierenwerte) und fetale Überwachung"
}
```

### 7. Add `cardinal_symptoms`

To add the cardinal symptoms of your case, use the following structure:

```json
"cardinal_symptoms": [
  "abdominal_pain",
  "abdominal_distension"
]
```
