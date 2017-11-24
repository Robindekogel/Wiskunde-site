
function Calculation()
{
    count=0;
    if (document.getElementById("a").value!="")
        count++;
    if (document.getElementById("b").value!="")
        count++;
    if (document.getElementById("c").value!="")
        count++;
    if (count!=2)
    {
        return false;
    }
    aa=document.getElementById("a").value.replace(",",".");
    bb=document.getElementById("b").value.replace(",",".");
    cc=document.getElementById("c").value.replace(",",".");
    if (aa=="")
    {
        aa=Math.sqrt(cc*cc-bb*bb);
        document.getElementById("a").value=aa;
    }
    if (bb=="")
    {
        bb=Math.sqrt(cc*cc-aa*aa);
        document.getElementById("b").value=bb;
    }
    if (cc=="")
    {
        cc=Math.sqrt(aa*aa+bb*bb);
        document.getElementById("c").value=cc;
    }
    pp=(aa*aa)/cc;
    qq=(bb*bb)/cc;
    hh=Math.sqrt(pp*qq);
    document.getElementById("h").value=hh;
    uu=eval(aa)+eval(bb)+eval(cc);
    document.getElementById("u").value=uu;
    ff=(aa*bb)/2;
    document.getElementById("f").value=ff;
    document.getElementById("p").value=pp;
    document.getElementById("q").value=qq;
    document.getElementById("alpha").value=180/Math.PI*Math.acos((bb*bb-(-cc*cc)-aa*aa)/(2*bb*cc)),4;
    document.getElementById("beta").value=180/Math.PI*Math.acos((aa*aa-(-cc*cc)-bb*bb)/(2*aa*cc)),4;
}