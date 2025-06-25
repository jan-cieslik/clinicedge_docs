# How to Customize Reference Data

The [reference data](../Database_Structure/3_5_reference_data.md) includes `normalfindings` and `labvalues`. To add new reference data or configure the existing ones, follow the steps described in this article.

## 1. Choose the right file

- To add new lab values, open the file `./src/utils/logic/labvalues.js`. Continue with [**Section 2.1**](#21-configure-labvaluesjs).
- To configure or add findings, open the file `./src/utils/logic/normalfindings_collection.js`. Continue with [**Section 2.2**](#22-configure-normalfindings_collectionjs).

## 2.1 Configure `labvalues.js`

### 2.1.1 Add a new lab value 

Add a new lab value to `labValueRanges` by defining the name (e.g., "leukocytes"), the unit (e.g., "cells/µL") and the normal range.

Example:

```js
"leukocytes": {
    "unit": "cells/µL",
    "normal": [4000, 10000]
}
```

Some lab values can have several normal ranges, which vary according to gender or other circumstances. In this case, you can define the ranges as shown in the following examples:

```js
"beta_hcg": {
    "unit": "IU/L",
    "normal": [0, 5],
    "normal_during_pregnancy": [null, null],
    "normal_during_postmenopause": [null, 8]
},
"erythrocytes": {
    "unit": "cells/pL",
    "normal": {
        "m": [4.3, 5.9],
        "w": [3.5, 5.0]
    }
}
```

If there is no defined unit for a lab value, specify `unit` as an empty string:

```js
"ph": {
    "unit": "",
    "normal": [7.35, 7.45]
}
```

### 2.1.2 Group several lab values 

If you want to group some lab values, add a new group to `labValueGroups`. Define the group name with `id` (e.g., `blood_count`) and insert the desired lab value names in `measurements`.

Example:

```js
{
    "id": "blood_count",
    "measurements": ["leukocytes", "erythrocytes", "haemoglobin", "hematocrit", "reticulocytes", "mcv", "mch", "mchc", "thrombocytes"]
}
```

## 2.2 Configure `normalfindings_collection.js`