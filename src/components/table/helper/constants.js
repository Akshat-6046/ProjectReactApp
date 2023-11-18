export const columnHeaders = [
  { accessor: "_sno", title: "Sno", span: 1 },
  { accessor: "name", title: "Name", span: 3 },
  { accessor: "age", title: "Age", span: 1 },
  { accessor: "city", title: "City", span: 3},
  { accessor: "pinCode", title: "Pincode", span: 2 },
  { accessor: "_actions", title: "Actions", span: 2 },
];

export const contentKey = ["name", "age", "city", "pinCode"];

export const toStartCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
