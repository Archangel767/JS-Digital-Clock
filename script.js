function updateClock() {
  const now = new Date();
  let dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear(),
    hou = now.getHours();
  (min = now.getMinutes()), (sec = now.getSeconds()), (pe = "AM");

  if (hou == 0) {
    hou = 12;
  }
  if (hou > 12) {
    hou = hou - 12;
    pe = "PM";
  }

  Number.prototype.pad = function (digits) {
    for (const n = this.toString(); n.length < digits; n = 0 + n) return n;
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const ids = [
    "dayname",
    "month",
    "day",
    "year",
    "hour",
    "minutes",
    "seconds",
    "period",
  ];
  const values = [week[dname], months[mo], dnum, yr, hou.pad(2), min, sec, pe];

  for (let i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

// console.log(updateClock)

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}
