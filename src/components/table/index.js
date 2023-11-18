import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Loader from "../LoaderState/index.js";
import useGetStaticData from "./hooks/getStaticData";
import { columnHeaders } from "./helper/constants.js";
import DeleteAction from "./deleteAction";
import EditAction from "./editAction";
import RowContent from "./helper/RowContent.js";
import Modal from "../modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Table() {
  const { data, loading } = useGetStaticData();
  const [tableData, setTableData] = useState(data);
  const [showModal, setShowModal] = useState(null);
  const [objIndex, setObjIndex] = useState(null);
  const notification = (type, msg) => {
    return toast?.[type](<div>{msg}</div>, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      theme: "light",
    });
  };
  const onEdit = (newObj) => {
    if (newObj === tableData[objIndex])
      return notification("warn", "No change! Data same as previous");
    setTableData((prev) => {
      const newList = prev;
      newList[objIndex] = newObj;
      return newList;
    });
    notification("success", "Changed Successfully!");
  };
  const onDelete = () => {
    setTableData((prev) => {
      return prev.filter((_, idx) => idx !== objIndex);
    });
    notification("success", "Deleted Successfully!");
  };
  useEffect(() => {
    setTableData(data);
  }, [data]);

  console.log(data, loading, "ddddd");
  return (
    <div className={styles.outerContainer}>
      <ToastContainer />
      {showModal ? (
        <Modal
          setShowModal={setShowModal}
          content={
            showModal === "edit" ? (
              <EditAction
                tableData={tableData}
                setShowModal={setShowModal}
                objIndex={objIndex}
                onEdit={onEdit}
              />
            ) : (
              <DeleteAction
                setShowModal={setShowModal}
                onDelete={onDelete}
                objIndex={objIndex}
              />
            )
          }
        />
      ) : null}
      <div className={styles.heading}>Content Table</div>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.tableContainer}>
          <div className={styles.columnHeader}>
            {(columnHeaders || []).map((obj, index) => {
              return (
                <div
                  key={`${obj.title}_${index}`}
                  className={styles.headerItem}
                  style={{ width: `${(Number(obj.span) * 100) / 12}%` }}
                >
                  <div className={`column_count_${index}`}>{obj.title}</div>
                </div>
              );
            })}
          </div>
          <div className={styles.rowItem}>
            {(tableData || []).map((rowData, index) => {
              return (
                <div key={`${rowData}__${index}`} className={styles.columnList}>
                  {columnHeaders.map((obj, i) => {
                    return (
                      <div
                        key={`${obj?.accessor}_${index}`}
                        className={styles.headerItem}
                        style={{ width: `${(Number(obj.span) * 100) / 12}%` }}
                      >
                        <RowContent
                          obj={obj}
                          index={index}
                          rowData={rowData}
                          setShowModal={setShowModal}
                          setObjIndex={setObjIndex}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      )}{" "}
    </div>
  );
}

export default Table;
