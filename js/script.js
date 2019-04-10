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
