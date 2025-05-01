// utils/helperFunction.js
export function handleEdit(rowData, path, navigate) {
  navigate(path, {
    state: {
      data: rowData,
    },
    replace: true,
  });
}
