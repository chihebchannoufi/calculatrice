function operation(x) {

    document.getElementById('textview').value = document.getElementById('textview').value+x;

}

function efface() {

    var ch = document.getElementById('textview').value;

    ch = ch.substr(0, ch.length - 1);

    document.getElementById('textview').value = ch;

}

function supp() {

    document.getElementById('textview').value = "";

}

function calcul() {

    var ch = document.getElementById('textview').value;
    document.getElementById('textview').value = eval(ch);
}