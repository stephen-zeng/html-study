function ret(f1,f2) {
    if (f1) {
        f1();
    }
    if (f2) {
        f2();
    }
}

function F1() {
    console.log("This is F1");
 }

function F2() {
    console.log("This is F2");
}


ret(F1);