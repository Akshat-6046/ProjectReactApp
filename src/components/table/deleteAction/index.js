import React from "react";
import styles from "./styles.module.css";

function DeleteAction({
  objIndex,
  setShowModal = () => {},
  onDelete = () => {},
}) {
  const deleteFunction = () => {
    onDelete();
    setShowModal(null);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>Are you sure?</div>
        <div className={styles.content}>
          Do you want to delete the item with serial number : {objIndex + 1}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => setShowModal(null)}
          className={styles.cancelButton}
        >
          Cancel
        </button>
        <button onClick={deleteFunction} className={styles.deleteButton}>
          Delete
        </button>
      </div>
    </>
  );
}

export default DeleteAction;
