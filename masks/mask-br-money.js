function keypressMaskBrMoney(event, e, r) {
    let dom = event.target;
    if ((dom.value.length + 1) > dom.maxLength)
        return false;

    let n = l = x = "";
    let h = j = u = y = 0;
    let o = window.Event ? event.which : event.keyCode;

    if (13 == o || 8 == o)
        return true;

    if (n = String.fromCharCode(o), -1 == "0123456789".indexOf(n))
        return false;

    for (u = dom.value.length, h = 0; h < u && ("0" == dom.value.charAt(h) || dom.value.charAt(h) == r); h++);

    for (l = ""; h < u; h++)
        -1 != "0123456789".indexOf(dom.value.charAt(h)) && (l += dom.value.charAt(h));

    if (l += n,
        0 == (u = l.length) && (dom.value = ""),
        1 == u && (dom.value = "0" + r + "0" + l),
        2 == u && (dom.value = "0" + r + l),
        u > 2) {
        for (x = "", j = 0, h = u - 3; h >= 0; h--)
            3 == j && (x += e, j = 0), x += l.charAt(h), j++;

        for (dom.value = "", y = x.length, h = y - 1; h >= 0; h--)
            dom.value += x.charAt(h);

        dom.value += r + l.substr(u - 2, u);
    }
    return false;
};

//Example of how to call the function
//domInput.onkeypress = (event) => (keypressMaskBrMoney(event, '.', ','));