export const convertToArray = (object) => {
  let dataArray = [];
  for (const key in object) {
    for (const nestedKey in object[key]) {
      dataArray.push(object[key][nestedKey]);
    }
  }
  return dataArray;
};
