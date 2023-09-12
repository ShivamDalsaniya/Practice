// for clear create a function 
function clr()
{
    document.getElementById("result").value="";
}
// display input button values in result
function display(val)
{
    document.getElementById("result").value+=val;
}
// back press and slice each element 
function bck()
{
    var clk=document.getElementById("result").value;
    var clk1=clk.slice(0,-1);
    document.getElementById("result").value=+clk1;
} 

// create a function for final result 
function finalresult()
{
    var x=document.getElementById("result").value;
    var y=eval(x);
    document.getElementById("result").value=y;
}


// function for pow 

function sq()
{
    var x=document.getElementById("result").value;
    var y=Math.pow(x,4);
    document.getElementById("result").value=y;
}
function root()
{
    var a=document.getElementById("result0").value;
}