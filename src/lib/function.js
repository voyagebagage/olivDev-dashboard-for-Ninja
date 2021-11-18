export const getYYYYMMDD = (date) => {
  const d = date || new Date();
  let day = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  return year + "-" + month + "-" + day;
};
export const setStatus = (start, end, status) => {
  const now = new Date().getTime();
  const startTime = new Date(start).getTime();
  const endTime = new Date(end).getTime();
  // let statusIf;
  console.log(now, "NOW");
  console.log(startTime, "startTime");
  console.log(endTime, "endTime");
  if (now >= startTime && now <= endTime) status = "true";
  if (now <= startTime || now >= endTime) status = "false";
};
export function getDateOfISOWeek(w, y) {
  var simple = new Date(y, 0, 1 + (w - 1) * 7);
  var dow = simple.getDay();
  var ISOweekStart = simple;
  if (dow <= 4) ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
  else ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
  return ISOweekStart;
}
