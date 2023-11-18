import React, { useState } from "react";
import styles from "./styles.module.css";
import { contentKey, toStartCase } from "../helper/constants";
import Field from "./field";
function EditAction({
  tableData,
  objIndex,
  setShowModal = () => {},
  onEdit = () => {},
}) {
  const selectedData = tableData[objIndex];
  const [obj, setObj] = useState(selectedData);
  const [showField, setShowField] = useState(null);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>Edit Data</div>
        {showField ? (
          <div className={styles.content}>
            <Field showField={showField} obj={obj} setObj={setObj} />
          </div>
        ) : (
          <>
            {" "}
            <div className={styles.content}>
              Select what to edit in data of serial number : {objIndex + 1}
            </div>
            <div className={styles.subcontent}>
              Click button to continue...
            </div>
            <div className={styles.box}>
              {contentKey.map((item) => {
                return (
                  <div className={styles.heading}>
                    <button
                      onClick={() => setShowField(item)}
                      className={styles.headingButton}
                    >
                      {toStartCase(item)}
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => setShowModal(null)}
          className={styles.cancelButton}
        >
          Cancel
        </button>
        {showField ? (
          <button
            onClick={() => {
              onEdit(obj);
              setShowModal(null);
            }}
            className={styles.saveButton}
          >
            Save
          </button>
        ) : null}
      </div>
    </>
  );
}

export default EditAction;
