#### 3.2.3 `FindingsTemplate`

The `FindingsTemplate` table enables automated rendering of written medical reports for each diagnostic method (e.g., ultrasound, physical exam, surgery). Each `request_type` defines how a specific finding in `pat_data`, rendered based on the probabilities in `case_data`, should be reported, when the user requests a diagnostic method.

**title**: Title of the Finding Report
**request_group**: General category (e.g., "imaging", "physical", "surgery") -> refers to src/utils/logic/requests.js, e.g. "imaging"
**request_item**: -> Modality (e.g., "us", "mri", "abdominal") -> refers to src/utils/logic/requests.js, e.g. "us"
**request_type**: -> Specific subtype (e.g., "us_tv", "ct_abdomen") -> refers to src/utils/logic/requests.js, e.g. "us_tv"

**template**: defines the report structure including the available variables under `$findings` e.g.

```
Fragestellung: $req.question
Diagnosis: $req.diagnosis
Kommentar: $req.comment

Uterus: 
$findings.uterus.position $findings.uterus.height cm x $findings.uterus.width cm x $findings.uterus.depth cm
$findings.uterus.pathology

Ovar links: 
$findings.ovary_l.height cm x $findings.ovary_l.width cm
$findings.ovary_l.pathology

Ovar rechts: $findings.ovary_r.height cm x $findings.ovary_r.width cm x $findings.ovary_r.depth cm
$findings.ovary_r.pathology

Allgemein:
Gute Ultraschallbedingungen
$findings.common.pathology
```

The template serves as a text template. Values and written findings descriptions are injected dynamically during case rendering.

**vars**: defines quantitative and qualitative variables for randomization under `$findings` e.g.
```json
{
    "uterus": {
        "depth": {
        "max": 5,
        "min": 1
        },
        "position": {
        "av/af": 0.9,
        "retro": 0.1,
        "singular": true
        }
    }
}
```

- Quantitative values (min, max) → generated randomly from a range
- Categorical values (position) → picked based on defined probability
- singular: true → ensures only one value is selected (e.g., one uterus position)

**vars_path**: generates textual descriptions for pathological findings from `pat_data` e.g.:
```json
{
  "common": {
    "free_fluid": "Freie Flüssigkeit im Douglasraum"
  },
  "ovary_l": {
    "hydrosalpinx": "Hydrosalpinx",
    "tuboovarian_abscess": "Tuboovarialabszess"
  },
  "ovary_r": {
    "hydrosalpinx": "Hydrosalpinx",
    "tuboovarian_abscess": "Tuboovarialabszess"
  }
}
```
When a pathology is detected in the patient data (e.g., "tuboovarian_abscess": 1.0), the corresponding text is inserted into the report.

### Logic behind Findings Template
1. User requests an examination (e.g. us_tv)
2. The template defines the report layout
3. vars provides randomized measurements
4. If any pathology is present in pat_data, it is matched via vars_path
5. If no pathology is found, a normal result is inserted
6. The result is a fully written findings report