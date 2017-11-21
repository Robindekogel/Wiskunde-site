

function wortelberekenen(form)
{
    var nummer=form.nummer.value;
    var uitkomst=Math.sqrt(nummer);
    if (nummer<0) uitkomst="Ongeldig invoer";
    form.antwoord.value=uitkomst;
}