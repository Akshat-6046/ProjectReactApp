import React from "react";

import styles from "./styles.module.css";
import { toStartCase } from "../helper/constants";
function Field({ showField, obj, setObj }) {
  const updateObjectFunction = (e) => {
    setObj((prev) => ({ ...prev, [showField]: e.target.value }));
  };
  return (
    <>
      <label htmlFor={showField}>{toStartCase(showField)}: </label>
      <input
        type={["age", "pinCode"].includes(showField) ? "number" : "text"}
        name={showField}
        value={obj?.[showField]}
        className={styles.input}
        onChange={updateObjectFunction}
      />
    </>
  );
}

export default Field;
