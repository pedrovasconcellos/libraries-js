function IsStringEqual(string1, string2, caseSensitive) {
    if (caseSensitive === false) {
        string1 = string1.toLowerCase();
        string2 = string2.toLowerCase();
    }
    return (string1 === string2);
};

const focusoutCompareTwoFields = (event) => {
    let dom = event.target;
    let domOfComparison = null;
    let domWarning = null;
    if (dom.id.search(/-confirmation/) !== -1) {
        domOfComparison = document.getElementById(dom.id.replace('-confirmation', ''));
        domWarning = document.getElementById(dom.id + '-warning');
    }
    else {
        domOfComparison = document.getElementById(dom.id + '-confirmation');
        domWarning = document.getElementById(dom.id + '-confirmation-warning');
    }
    if (domOfComparison === null || domWarning === null) return;
    if (dom.value === '' || domOfComparison.value === '') {
        domWarning.style.display = 'none';
        return;
    }
    if (IsStringEqual(dom.value, domOfComparison.value, false))
        domWarning.style.display = 'none';
    else {
        domWarning.style.display = 'block';
        let fieldReset = document.getElementById(dom.id.replace('-confirmation', '').replace('-warning', '') + '-confirmation');
        if (fieldReset === null) return;
        fieldReset.value = '';
    }
};