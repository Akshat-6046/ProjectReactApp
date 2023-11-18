import Actions from "../actions";
import { contentKey } from "./constants.js";
import styles from '../styles.module.css'
const RowContent = ({
  obj,
  index,
  rowData,
  setShowModal = () => {},
  setObjIndex = () => {},
}) => {
  if (contentKey.includes(obj?.accessor))
    return (
      <div style={{width:'80%'}} className={`column_count_${index}`}>
        <div className={styles.tableCell}>{rowData?.[obj?.accessor] || "---"}</div>
      </div>
    );
  if (obj?.accessor === "_actions")
    return (
      <Actions
        index={index}
        setShowModal={setShowModal}
        setObjIndex={setObjIndex}
      />
    );

  return <div className={`column_count_${index}`}>{index + 1}</div>;
};
export default RowContent;
