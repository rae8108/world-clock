function updateTime() {
  // Los Angeles
  let losElement = document.querySelector("#los");
  let losDateElement = losElement.querySelector(".date");
  let losTimeElement = losElement.querySelector(".time");
  let losTime = moment().tz("America/Los_Angeles");

  losDateElement.innerHTML = losTime.format("MMMM Do YYYY");
  losTimeElement.innerHTML = losTime.format("h:mm:ss [<small>]A[</small>]");

  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
