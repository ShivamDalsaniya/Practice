function subtotalcrt()
{
    var p=document.getElementById("price").value;
    var q=document.getElementById("qty").value;
    var t=p*q;
    document.getElementById("tot").innerHTML=+t;

}

function chk()
{
    var fnm=document.getElementById("fname");
    //alert('fnm');
    fnm.value=fnm.value.toUpperCase();

    var lnm=document.getElementById("lname");
    //alert('fnm');
    lnm.value=lnm.value.toUpperCase();

    var em=document.getElementById("email");
    //alert('fnm');
    em.value=em.value.toUpperCase();

}