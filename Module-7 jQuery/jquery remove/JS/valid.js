function val()
{
    if(document.frm.fname.value=="")
    {
        alert('Please enter firstName *')
        document.frm.fname.focus();
        return false;
    }
    if(document.frm.lname.value=="")
    {
        alert('Please enter lastName *')
        document.frm.lname.focus();
        return false;
    }

    if(document.frm.email.value=="")
    {
        alert('Please enter Email *')
        document.frm.email.focus();
        return false;
    }
}