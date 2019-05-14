// Przebudować na klasy i obiekty
// Dodać obsługę dni +1 i +2
// Zrobić wniosek o urlop okolicznościowy
// Oddzielić główny css od poszczególnych wniosków

// Options elements variables
var documentDateOptions = document.querySelector("#data-dokumentu"),
  nameSurnameOptions = document.querySelector("#imie-nazwisko"),
  vacationDayOptions = document.querySelector("#vacation-day-options"),
  vacationTimeOptions = document.querySelector("#vacation-time"),
  vacationFromToOptions = document.querySelector("#vacation-from-to"),
  vacationTermFromOptions = document.querySelector(
    "#vacation-term-from-options"
  ),
  vacationTermToOptions = document.querySelector("#vacation-term-to-options"),
  nameSurnameEmployee = document.querySelector("#worker"),
  vacationDay = document.querySelector("#vacation-day"),
  buttonPrint = document.querySelector("#drukowanie");

// View elements variables
var vacationTermFrom = document.querySelector("#vacation-term-from"),
  vacationTermTo = document.querySelector("#vacation-term-to"),
  data = document.querySelector("#aktualna-data");

function leadingZero(i) {
  if (i < 10) {
    return "0" + i;
  } else return i;
}

// Dates
const currentDate = new Date();
var dataNow = (data.textContent = `${leadingZero(
  currentDate.getDate()
)}.${leadingZero(currentDate.getMonth() + 1)}.${currentDate.getFullYear()}`);
var specialDataFormat = `${currentDate.getFullYear()}-${leadingZero(
  currentDate.getMonth() + 1
)}-${leadingZero(currentDate.getDate())}`;

// Setting dates
vacationDay.textContent = `${dataNow} r.`;
documentDateOptions.value = `${specialDataFormat}`;
vacationDayOptions.value = `${specialDataFormat}`;
vacationTermFromOptions.value = `${specialDataFormat}`;
vacationTermToOptions.value = `${specialDataFormat}`;

// Setting value of date on view
data.value = `Stalowa Wola, ${dataNow} r.`;

// Print action
buttonPrint.addEventListener("click", function() {
  window.print();
});

function fillDocumentDate() {
  var dataDocumentDotted = documentDateOptions.value;
  // Changing format yyyy-mm-dd to dd.mm.yyyy
  var rok = dataDocumentDotted.substr(0, 4),
    miesiac = dataDocumentDotted.substr(5, 2),
    dzien = dataDocumentDotted.substr(8, 2);
  ``;
  dataDocumentDotted = `${dzien}.${miesiac}.${rok}`;

  // Filling document date on view
  data.value = `Stalowa Wola, ${dataDocumentDotted} r.`;
}

function fillVacationDay() {
  var dataVacationDotted = vacationDayOptions.value;
  // Changing fotmat yyyy-mm-dd to dd.mm.yyyy
  var rok = dataVacationDotted.substr(0, 4),
    miesiac = dataVacationDotted.substr(5, 2),
    dzien = dataVacationDotted.substr(8, 2);
  ``;
  dataVacationDotted = `${dzien}.${miesiac}.${rok} r.`;

  // Filling document date on view
  vacationDay.textContent = `${dataVacationDotted}`;
}

function fillVacationDayTerm() {
  var vacationTermFromDotted = vacationTermFromOptions.value;
  var vacationTermToDotted = vacationTermToOptions.value;
  // Changing fotmat yyyy-mm-dd to dd.mm.yyyy
  var rok = vacationTermFromDotted.substr(0, 4),
    miesiac = vacationTermFromDotted.substr(5, 2),
    dzien = vacationTermFromDotted.substr(8, 2);
  ``;
  vacationTermFromDotted = `${dzien}.${miesiac}.${rok}`;

  // Filling term from date on view
  vacationTermFrom.textContent = `${vacationTermFromDotted} r.`;

  var rok = vacationTermToDotted.substr(0, 4),
    miesiac = vacationTermToDotted.substr(5, 2),
    dzien = vacationTermToDotted.substr(8, 2);
  ``;
  vacationTermToDotted = `${dzien}.${miesiac}.${rok}`;

  // Filling term to date on view
  vacationTermTo.textContent = `${vacationTermToDotted} r.`;
}

function fillNameSurname() {
  // Filling name and surname on view
  nameSurnameEmployee.value = nameSurnameOptions.value;
}

// Event on input change filling document date on view
documentDateOptions.addEventListener("input", fillDocumentDate);
nameSurnameOptions.addEventListener("input", fillNameSurname);
vacationDayOptions.addEventListener("input", fillVacationDay);
vacationTermFromOptions.addEventListener("input", fillVacationDayTerm);
vacationTermToOptions.addEventListener("input", fillVacationDayTerm);

// Radio varaibles
var radioVacationTerm = document.getElementById("radio-term"),
  radioVacationDay = document.getElementById("radio-day"),
  vacationTermContainer = document.querySelector("#vacation-term-container"),
  vacationDayContainer = document.querySelector("#vacation-day-container");

// Radio change events
radioVacationTerm.addEventListener("change", function() {
  vacationTermContainer.classList.remove("invisibility", "noprint");
  vacationDayContainer.classList.add("invisibility", "noprint");

  vacationTimeOptions.classList.add("invisibility", "noprint");
  vacationFromToOptions.classList.remove("invisibility", "noprint");

  fillVacationDayTerm();
});

radioVacationDay.addEventListener("change", function() {
  vacationTermContainer.classList.add("invisibility", "noprint");
  vacationDayContainer.classList.remove("invisibility", "noprint");

  vacationTimeOptions.classList.remove("invisibility", "noprint");
  vacationFromToOptions.classList.add("invisibility", "noprint");
});
