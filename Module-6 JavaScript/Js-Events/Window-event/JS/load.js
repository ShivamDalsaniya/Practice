
var myvar;
function mainFunction() {
    myvar = setTimeout("test()", 2000);

}
function test() {
    document.getElementById("mainfunction").style = "display:block";
    document.getElementById("loader").style = "display:none";
}

var myvar1;
function mainFunction1() {
    myvar1 = setTimeout("test1()", 1000);
}
function test1() {
    document.getElementById("mainfunction").style = "display:block";
    document.getElementById("loader_page").style = "display:none";

}
