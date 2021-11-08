export const getYYYYMMDD = (date) => {
  const d = date || new Date();
  let day = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  return year + "-" + month + "-" + day;
};
