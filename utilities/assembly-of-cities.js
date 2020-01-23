const domCountry = document.getElementById('country');
const domState = document.getElementById('state');
const domCity = document.getElementById('city');

function IsCountryValid() {
    if (domCountry != null && typeof Number(domCountry.value) === 'number' && domCountry.value > 0)
        return true;
    else
        return false;
};

function IsStateValid() {
    if (domState != null && typeof domState.value === 'string' && domState.value.length == 2)
        return true;
    else
        return false;
};

function IsCityValid() {
    if (domCity != null && typeof Number(domCity.value) === 'number' && domCity.value > 0)
        return true;
    else
        return false;
};

function AddEventCountry(eventName, eventPointer) {
    if (domCountry === null)
        console.log('domCountry undefined!');
    domCountry.addEventListener(eventName, eventPointer);
};

function AddEventState(eventName, eventPointer) {
    if (domState === null)
        console.log('domState undefined!');
    domState.addEventListener(eventName, eventPointer);
};

function AddEventCity(eventName, eventPointer) {
    if (domCity === null)
        console.log('domCity undefined!');
    domCity.addEventListener(eventName, eventPointer);
};

function GetCountryValue() {
    if (domCountry == null)
        return null;
    return domCountry.value;
};

function GetStateValue() {
    if (domState == null)
        return null;
    return domState.value;
};

function GetCityValue() {
    if (domCity == null)
        return null;
    return domCity.value;
};

const changeCallSearchCitiesByState = (event) => {
    let dom = event.target;
    let stateID = dom.value;
    if (stateID === null || domCity === null) return;
    let countryID = (domCountry === null ? 1058 : domCountry.value);
    let endPoint = 'Cities?countryId=' + countryID + '&stateId=' + stateID;
    HttpGETCreateOptions(domCity, endPoint);
};

if (!(domState === null)) {
    domState.addEventListener('change', changeCallSearchCitiesByState);
    domState.value = '';;
};

if (!(domCity === null)) {
    domCity.value = '';;
};