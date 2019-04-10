document.querySelector

let input = document.querySelector('.selfadapt');
let root  = document.documentElement.style;

/* on input event auto resize the field */
// input.addEventListener('input', function() {
//    root.setProperty('--size', this.value.length );
// });

/* resize the field if it is pre-populated */
// document.addEventListener("DOMContentLoaded", function() {
//    root.setProperty('--size', input.value.length);
// });

var data = document.querySelector('#aktualna-data');

function leadingZero(i) {

    if (i < 10) { 
        return '0' + i;
    } else return i;

}

const currentDate = new Date();
var dataNow = data.textContent = `${leadingZero(currentDate.getDate())}.${leadingZero(currentDate.getMonth()+1)}.${currentDate.getFullYear()}`;
var dataTomorrow = `${leadingZero(currentDate.getDate()+1)}.${leadingZero(currentDate.getMonth()+1)}.${currentDate.getFullYear()}`;
var specialDataFormat = `${currentDate.getFullYear()}-${leadingZero(currentDate.getMonth()+1)}-${leadingZero(currentDate.getDate())}`;
var specialDataFormatTomorrow = `${currentDate.getFullYear()}-${leadingZero(currentDate.getMonth()+1)}-${leadingZero(currentDate.getDate()+1)}`;

data.value = `Stalowa Wola, ${dataNow}`;

var polaDaty = document.getElementsByClassName('pole-data');
for(var i = 0; i < polaDaty.length; i++)
{
    polaDaty[i].placeholder= `${dataTomorrow}`;
}

var buttonDrukowanie = document.querySelector('#drukowanie');

buttonDrukowanie.addEventListener('click', function(){
    window.print();
})




var documentDateOptions = document.querySelector('#data-dokumentu');
var nameSurnameOptions = document.querySelector('#imie-nazwisko');
var vacationDayOptions = document.querySelector('#vacation-day-options');
var nameSurnameEmployee = document.querySelector('#imie-nazwisko-pracownika');
var vacationDay = document.querySelector('#vacation-day');

vacationDay.textContent= `${dataTomorrow}`;

documentDateOptions.value = `${specialDataFormat}`;


function fillDocumentDate(){
    var dataDocumentDotted = documentDateOptions.value;
    // Changing fotmat yyyy-mm-dd to dd.mm.yyyy
    var rok = dataDocumentDotted.substr(0,4),
    miesiac = dataDocumentDotted.substr(5,2),
    dzien = dataDocumentDotted.substr(8,2);``
    var dataDocumentDotted = `${dzien}.${miesiac}.${rok}`;

    // Filling document date on view
    data.value = `Stalowa Wola, ${dataDocumentDotted}`;
}

function fillVacationDay(){
    var dataVacationDotted = vacationDayOptions.value;
    // Changing fotmat yyyy-mm-dd to dd.mm.yyyy
    var rok = dataVacationDotted.substr(0,4),
    miesiac = dataVacationDotted.substr(5,2),
    dzien = dataVacationDotted.substr(8,2);``
    dataVacationDotted = `${dzien}.${miesiac}.${rok}`;

    // Filling document date on view
    vacationDay.textContent = `${dataVacationDotted}`;
}

function fillNameSurname(){
    // Filling name and surname on view
    nameSurnameEmployee.value = nameSurnameOptions.value;
}

// Event on input change filling document date on view
documentDateOptions.addEventListener('input', fillDocumentDate);
nameSurnameOptions.addEventListener('input', fillNameSurname);
vacationDayOptions.addEventListener('input', fillVacationDay);

vacationDayOptions.value =`${specialDataFormatTomorrow}`;


// 
var radioVacationTerm = document.getElementById("radio-term"),
    radioVacationDay = document.getElementById("radio-day"),
    vacationTermContainer = document.querySelector('#vacation-term-container'),
    vacationDayContainer = document.querySelector('#vacation-day-container');

radioVacationTerm.addEventListener('change', function(){
    vacationTermContainer.classList.remove('invisibility');
    vacationDayContainer.classList.add('invisibility');
});

radioVacationDay.addEventListener('change', function(){
    vacationTermContainer.classList.add('invisibility');
    vacationDayContainer.classList.remove('invisibility');
});


