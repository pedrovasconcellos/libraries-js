function functionIsValidDateddMMyyyy(dateString) {
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) return false;

    var parts = dateString.split("/");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    if (year < 1000 || year > 3000 || month == 0 || month > 12) return false;

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) monthLength[1] = 29;

    return day > 0 && day <= monthLength[month - 1];
};

const focusoutIsValidDate = (event) => {
    let dom = event.target;
    let domWarning = document.getElementById(dom.id + '-warning');
    if (dom.value === '') {
        domWarning.style.display = 'none';
        return;
    }
    let itsValid = functionIsValidDateddMMyyyy(dom.value);
    if (itsValid)
        domWarning.style.display = 'none';
    else {
        domWarning.style.display = 'block';
        dom.value = '';
    }     
};