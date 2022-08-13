function receivesAFunction(hi) {
    hi();
}
function returnsANamedFunction() {
    function go() {return " "}
    return go;
}

function returnsAnAnonymousFunction() {
    return function(){}
}
    

