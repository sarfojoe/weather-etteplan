export const convertTimeStamp = (timestamp) => {
  const date = new Date(timestamp * 1000);
  // Hours part from the timestamp
  const hours = date.getHours();
  // Minutes part from the timestamp
  const zeroPrefix = prefix0(date.getMinutes());
  const minutes = `${zeroPrefix}${+date.getMinutes()}`;

  const day = date.getDate();

  const month = date.toLocaleString("default", { month: "long" });

  const nth = getNth(date.getDate());

  return {
    time: `${hours}:${minutes}`,
    date: `${day}${nth} ${month}`,
  };
};

const prefix0 = (seconds) => {
  if (seconds < 10) return "0";
  return "";
};

const getNth = function (d) {
  const dString = String(d);
  const last = +dString.slice(-2);
  if (last > 3 && last < 21) return "th";
  switch (last % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};
