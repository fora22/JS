// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const selectTag = document.querySelector("select");
const optionList = document.querySelectorAll("option");

const countryISOCode = ["","KR", "GR", "TUR", "FIN"];

const _INFO_USER_COUNTRY = "country";

function saveUserCountry(event) {
    let selectTagNumber = selectTag.selectedIndex;
    if (selectTagNumber === 1) {
        localStorage.setItem(_INFO_USER_COUNTRY, countryISOCode[selectTagNumber]);
    } else if (selectTagNumber === 2) {
        localStorage.setItem(_INFO_USER_COUNTRY, countryISOCode[selectTagNumber]);
    } else if (selectTagNumber === 3) {
        localStorage.setItem(_INFO_USER_COUNTRY, countryISOCode[selectTagNumber]);
    } else if (selectTagNumber === 4) {
        localStorage.setItem(_INFO_USER_COUNTRY, countryISOCode[selectTagNumber]);
    }
}

function loadUserCountry() {
    const userCountry = localStorage.getItem(_INFO_USER_COUNTRY);
    if (userCountry === null) {
        console.log("you don't have country..");        // TODO 없을 때 선택한 정보를 가져오도록 해야함
        saveUserCountry();
    } else {
        optionList[countryISOCode.indexOf(userCountry)].selected = true;
    }
}

function init() {
    loadUserCountry();
    selectTag.addEventListener("change", saveUserCountry);
}

init();