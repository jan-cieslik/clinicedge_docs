# 5.2 How to Create a New Examination Type  

To add a new exam (e.g., `breast_us`), you have to modify various files and tables. 

## 1. Add the exam to `requests.js`

### 1.1 Add a type to an existing category

First, you should create a new exam in the file `/src/utils/logic/requests.js`. If there is already a category (e.g. imaging), to which you want to add a new type, search for the category in the file and add the new type. 
For the example `breast_us` search for `us` (ultrasound) and add `breast_us` to the types as shown below:

```js
{
  us: {
    type: {
      type: "select",
      required: true,
      choices: {
        us_abdominal: {
          type: "option",
        },
        breast_us: {
          type: "option",
        }
      }
    }
  }
}

```

Now go to the top of the file and add `breast_us` to the right `requestGroups`:

```js
export const requestGroups = {
  laboratory: {
    items: ["labs", "virology", "microbiology", "bloodbank"],
  },
  imaging: {
    items: ["mri", "ct", "us", "xray", "ctg", "ecg", "breast_us"],
  },
  invasive_diagnostics: {
    items: ["surgery", "cytology_pathology"],
  }
}
```

### 1.2 Add a new category

If there is no category, where the new examination type fits, you have to create a new one. 
For example, if you wanted to add physical exams (e.g. abdominal or vaginal), you would add it under `requestItems` as shown below:

```js
{
  physical: {
    form: {
      diagnosis: {
        type: "text",
        required: true,
      },
      comment: {
        type: "text",
        required: false,
      },
      question: {
        type: "text",
        required: true,
      }
    },
    type: {
      type: "select",
      required: true,
      choices: {
        abdominal: {
          type: "option",
        },
        vaginal: {
          type: "option",
        }
      }
    }
  }
}
```

Now add it to `requestsGroups`:

```js
export const requestGroups = {
  laboratory: {
    items: ["labs", "virology", "microbiology", "bloodbank"],
  },
  imaging: {
    items: ["mri", "ct", "us", "xray", "ctg", "ecg", "breast_us"],
  },
  invasive_diagnostics: {
    items: ["surgery", "cytology_pathology"],
  },
  physical: {
    items: ["abdominal", "vaginal"]
  }
}
```

## 2. Create a `FindingsTemplate` entry

After defining the examination type in `requests.js`, create a new entry in the [`FindingsTemplate`](../Database_Structure/3_2_3_findings_template.md) table and add the corresponding `request_group`, `request_item`, and `request_type`.
For the example `breast_us`, you would fill in the following information:
- `request_group`: imaging
- `request_item`: us
- `request_type`: breast_us

### 2.1 Create a template for the report output

Write a new template for the report output and include all variables. It could look like this for `breast_us`:

```
Fragestellung: $req.question
Diagnosis: $req.diagnosis
Kommentar: $req.comment

Brust links: 
$findings.breast_l.description
$findings.breast_l.pathology

Brust rechts: 
$findings.breast_r.description
$findings.breast_r.pathology

Lymphknoten links: 
$findings.lymph_nodes_l.description
$findings.lymph_nodes_l.pathology

Lymphknoten rechts: 
$findings.lymph_nodes_r.description
$findings.lymph_nodes_r.pathology

Allgemein:
Gute Ultraschallbedingungen
$findings.common.pathology
```

### 2.2 Define `vars` and `vars_path`

After that, define `vars` for all relevant anatomical measurements or features (normal findings) and `vars_path` for all diagnosis-specific findings (cross-link with `case_data`).

### 2.3 Add request conditions (*optional*)

If the selection of the examination type you created is based on special conditions, you can add them to `request_condition` and add an order, in which the conditions should be checked. 

![](../Database_Structure/Images/3_2_3_request_conditions.png)
