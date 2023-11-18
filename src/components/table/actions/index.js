import React from "react";
import styles from "./styles.module.css";
function index({ index, setShowModal = () => {}, setObjIndex = () => {} }) {
  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          setShowModal("edit");
          setObjIndex(Number(index));
        }}
        className={styles.button_edit}
      >
        Edit
      </button>
      <button
        onClick={() => {
          setShowModal("delete");
          setObjIndex(Number(index));
        }}
        className={styles.button_delete}
      >
        Delete
      </button>
    </div>
  );
}

export default index;
