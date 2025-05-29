#### 3.2.9 `PatRx` 


![](./Images/3_2_9_pat_rx_ce.jpg)

If the user prescribes a medication to a patient, the information is saved in `PatRx` and the prescription gets a `rx_id`. The table contains also:

- `data-0`, `data-1`, `data-2`: prescribed medications in JSON format (with pzn, title and rx_key)
- `rx_key-0`, `rx_key-1`, `rx_key-2`: refer to the `RMP_KEY` of the respective medication in the table `bfarm_ref_med`
- `pat_id`: refers to the patient to which the medication is prescribed

