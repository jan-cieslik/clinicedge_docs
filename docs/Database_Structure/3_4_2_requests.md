# 3.4.2 `requests.js`

The `requests.js` file contains functions to ...

This script defines:
- request groups and their items (`requestGroups`)
- layouts, categories, and test choices (`requestItems`)

```mermaid
graph TD
  A[requests.js]:::logic ---> B[requestGroups]:::logic
  A --> C[requestItems]:::logic
  B <---> C

classDef logic fill:#cc4078,stroke:#000000,stroke-width:1px;
```

## Key Definitions

### 1. `requestGroups`

**What it does:**  
Defines all available diagnostic categories of CLinicEdge and their associated items

**What it connects to:**  
- `request_group` field in `FindingsTemplate` table 
- `request_group` field in `PatFindings` table
- `generateFinding` function in `logic_server.js`
- `requestItems` in `requests.js` (see below)

**How it can be modified:**  
- Add or remove groups and associated items

```mermaid
flowchart TD
    A["requests.js"]:::logic --> B["requestGroups"]:::logic
    B --> C["laboratory"]:::logic
    C --> D1["labs"]:::logic
    C --> D2["virology"]:::logic
    C --> D3["microbiology"]:::logic
    B --> E["imaging"]:::logic
    E --> F1["us"]:::logic
    E --> F2["mri"]:::logic
    E --> F3["ct"]:::logic
    E --> F4["xray"]:::logic
    B --> G["invasive_diagnostics"]:::logic
    G --> H1["surgery"]:::logic
    G --> H2["cytology_pathology"]:::logic

classDef logic fill:#cc4078,stroke:#000000,stroke-width:1px;
```

### 2. `requestItems`

**What it does:**  


**What it connects to:**  
- Presentation of request forms in the Clinic Edge application
- `generateLabValues` in `logic_server.js` for lab requests 
- `generateFinding` in `logic_server.js` for all other diagnostic requests
- Normal or default ranges and findings as defined in `labvalues.js` (labs) and `normalfindings_collection.js` (vitals, microbiology, history)
- `vars` and `vars_path` in the `FindingsTemplate` table
- `requestGroups` in `requests.js` (see above)

**How it can be modified:**  
- Add or remove request types and define their categories and options
- Add or remove keys within a category

```mermaid
flowchart TD
    A["requestItems"]:::logic --> B["labs"]:::logic

classDef logic fill:#cc4078,stroke:#000000,stroke-width:1px;
```