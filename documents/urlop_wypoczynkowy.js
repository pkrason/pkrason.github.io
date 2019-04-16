
var urlopWypoczynkowy = `
<div id="urlop-wypoczynkowy">

<div id="dane-firmy">   
    <h4>I-BS.PL Sp. z o. o.</h4>
    <p>Solidarności 2A<br>
       37-450 Stalowa Wola<br>
       NIP: 857-215-01-41<br>
    </p>
</div>
<div id="data">   
    <input type="text" id="aktualna-data" value="${data.value}">${data.value}</input>
</div>

<div style="clear:both"></div>

<div id="tytul">   
    <h3>Wniosek o urlop</h3>
</div>

<div style="clear:both"></div>

<div id="dane-pracownika">   
    <p>Imię i nazwisko: <input id="imie-nazwisko-pracownika" type="text" class="pole-do-wypelnienia" placeholder="Piotr Krasoń"></input><br>
    Proszę o udzielenie <input type="text" class="pole-do-wypelnienia" placeholder="urlopu wypoczynkowego" value="urlopu wypoczynkowego"></input><br>
    <div id="vacation-day-container" class="">
        <span id="vacation-term-label">w dniu </span><span id="vacation-day" class="vacation-day"></span>
    </div>
    <div id="vacation-term-container" class="invisibility noprint">
        w terminie od <span id="vacation-term-from" class="vacation-day"></span> do <span id="vacation-term-to" class="vacation-day"></span>
    </div>     
    </p> 
</div>
<div style="clear:both"></div>
<div id="podpis-akceptacje">  
    
    <table class="tab-akceptacje">
        <tr>
            <td>Podpis pracownika:</td>
            <td class="kropki">..........................................................</td>
        </tr>
        <tr>
            <td>Akceptacja bezpośredniego przełożonego:</td>
            <td class="kropki">..........................................................</td>
        </tr>
        <tr>
            <td>Akceptacja Zarządu<span class="igorny">*</span>:</td>
            <td class="kropki">..........................................................</td>
        </tr>
    </table>
</div>

<div style="clear:both"></div>

<footer>
    <hr class="thin">
    <span class="igorny">*</span><span class="text-stopka">Dotyczy urlopu dłuższego bądź równego 5 dni roboczych oraz urlopów opiekuńczych</span> 
</footer>
</div>
`;