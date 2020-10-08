// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const newTagHTML = document.createElement("div");
newTagHTML.innerHTML = "Hello!";
const bodyHTML = document.querySelector("body");
bodyHTML.append(newTagHTML);
newTagHTML.style.color = "white";

function ResizeWindowChangeColor() {
  const windowWidthSize = window.innerWidth;
  console.log(windowWidthSize);
  if (windowWidthSize <= 700) {
    document.bgColor = "dodgerblue";
  } else if (windowWidthSize > 700 && windowWidthSize <= 850) {
    document.bgColor = "mediumpurple";
  } else if (windowWidthSize > 850) {
    document.bgColor = "yellow";
  }
}

window.addEventListener("resize", ResizeWindowChangeColor);
