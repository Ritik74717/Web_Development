var target1 = document.querySelector('#input');
var target2 = document.querySelector('#output');
var target3 = document.querySelector('#s1');
var target4 = document.querySelector('#s2');
var but = document.querySelector("#b1");
but.addEventListener('click', convert);
function convert() {
    console.clear();
    var inputunit = target3.value;
    var outputunit = target4.value;
    console.log(inputunit);
    console.log(outputunit);
    var digit = target1.value;
    digit = parseFloat(digit);
    console.log(digit);
    var out = 0;
    var unit1 = 'm';
    var unit2 = 'cm';
    var unit3 = 'km';
    if (unit1.localeCompare(inputunit) == 0) {
        console.log("meter");
        if (unit2.localeCompare(outputunit) == 0) {
            console.log("centimeter");
            out = digit * 100;
            target2.value = out;
        }

        if (unit3.localeCompare(outputunit) == 0) {
            console.log("kilometer");
            out = digit/1000;
            target2.value = out;
        }

    }

    if (unit2.localeCompare(inputunit) == 0) {
        console.log("centimeter");
        if (unit1.localeCompare(outputunit) == 0) {
            console.log("meter");
            out = digit/100;
            target2.value = out;
        }
        
        if (unit3.localeCompare(outputunit) == 0) {
            console.log("kilometer");
            out = digit/100000;
            target2.value = out;
        }

    }
    if (unit3.localeCompare(inputunit) == 0) {
        console.log("kilometer");
        if (unit1.localeCompare(outputunit) == 0) {
            console.log("meter");
            out = digit * 1000;
            target2.value = out;
        }
        if (unit2.localeCompare(outputunit) == 0) {
            console.log("centimeter");
            out = digit * 100000;
            target2.value = out;
        }
    }

}

