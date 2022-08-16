import "./styles.css";

const textTitle = document.createElement("div");
const timeD_DayZone = document.createElement("div");
const enterText = document.createElement("br");

textTitle.classList.add("text_title");
textTitle.innerHTML = "Time Until Chrismas";
textTitle.style.fontWeight = "bold";
textTitle.append(enterText);

timeD_DayZone.classList.add("timeZone");
timeD_DayZone.style.fontWeight = "bold";

const bodyHTML = document.querySelector("body");
bodyHTML.prepend(timeD_DayZone);
bodyHTML.prepend(textTitle);

console.log(bodyHTML);
// You're gonna need this -> 
// well..I'm in Korea. So I think I don't need this..don't you? It is right?
// oh...It need minus 9hour...sorry..
const NINE_HOURS_MILLISECONDS = 32400000;

function getTime() {
  const nowDate = new Date();

  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");

  const dateGap =
    xmasDay.getTime() -
    NINE_HOURS_MILLISECONDS -
    (nowDate.getTime() - NINE_HOURS_MILLISECONDS);
  const dateGapDay = Math.floor(dateGap / (1000 * 60 * 60 * 24));
  const dateGpaHour = Math.floor(dateGap / (1000 * 60 * 60) - dateGapDay * 24);
  const dateGapMinute = Math.floor(
    dateGap / (1000 * 60) - dateGapDay * 60 * 24 - dateGpaHour * 60
  );
  const dateGapSecond = Math.floor(
    dateGap / 1000 -
      dateGapDay * 60 * 60 * 24 -
      dateGpaHour * 60 * 60 -
      dateGapMinute * 60
  );

  timeD_DayZone.innerHTML = `${
    dateGapDay < 10 ? `0${dateGapDay}` : dateGapDay
  }d ${dateGpaHour < 10 ? `0${dateGpaHour}` : dateGpaHour}h ${
    dateGapMinute < 10 ? `0${dateGapMinute}` : dateGapMinute
  }m ${dateGapSecond < 10 ? `0${dateGapSecond}` : dateGapSecond}s`;
}

function init() {
  setInterval(getTime, 1000);
}
init();
