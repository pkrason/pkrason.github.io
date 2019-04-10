let input = document.querySelector('.selfadapt');
let root  = document.documentElement.style;

/* on input event auto resize the field */
input.addEventListener('input', function() {
   root.setProperty('--size', this.value.length );
});

/* resize the field if it is pre-populated */
document.addEventListener("DOMContentLoaded", function() {
   root.setProperty('--size', input.value.length);
});

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


var dataDokumentu = document.querySelector('#data-dokumentu');

// dataDokumentu.value = `${specialDataFormat}`;
var dataDotted = '';

function dateDottedFormat(){
    var rok = dataDokumentu.value.substr(0,4),
    miesiac = dataDokumentu.value.substr(5,2),
    dzien = dataDokumentu.value.substr(8,2);

    var dataDotted = `${dzien}.${miesiac}.${rok}`;

    data.value = `Stalowa Wola, ${dataDotted}`;
}

dataDokumentu.addEventListener('input', dateDottedFormat);


document.querySelector('#dzien-urlopu').value =`${specialDataFormat}`;