
function get(){
    var a11 = Number (document.getElementById("ip1").value);
    var a12 = Number (document.getElementById("ip2").value);
    var a13 = Number (document.getElementById("ip3").value);
    var a14 = Number (document.getElementById("ip4").value);
    var a21 = Number (document.getElementById("ip5").value);
    var a22 = Number (document.getElementById("ip6").value);
    var a23 = Number (document.getElementById("ip7").value);
    var a24 = Number (document.getElementById("ip8").value);
    var a31 = Number (document.getElementById("ip9").value);
    var a32 = Number (document.getElementById("ip10").value);
    var a33 = Number (document.getElementById("ip11").value);
    var a34 = Number (document.getElementById("ip12").value);
    var a41 = Number (document.getElementById("ip13").value);
    var a42 = Number (document.getElementById("ip14").value);
    var a43 = Number (document.getElementById("ip15").value);
    var a44 = Number (document.getElementById("ip16").value);
  
        set11=a11*(a22*((a33*a44)-(a34*a43))-a23*((a32*a44)-(a42*a34))+a24*((a32*a43)-(a33*a42)));
        set12=a12*(a21*((a33*a44)-(a34*a43))-a23*((a31*a44)-(a41*a34))+a24*((a31*a43)-(a33*a41)));
        set13=a13*(a21*((a32*a44)-(a34*a42))-a22*((a31*a44)-(a41*a34))+a24*((a31*a42)-(a32*a41)));
        set14=a14*(a21*((a32*a43)-(a33*a42))-a22*((a31*a43)-(a33*a41))+a23*((a31*a42)-(a41*a32)));
        document.getElementById("demo").innerHTML=set11-set12+set13-set14;
  
}

 function get1(){
    var a11 = Number (document.getElementById("ip1").value);
    var a12 = Number (document.getElementById("ip2").value);
    var a21 = Number (document.getElementById("ip5").value);
    var a22 = Number (document.getElementById("ip6").value);
document.getElementById("demo").innerHTML=(a11*a22)-(a21*a12);



  }      
  function get2(){
    var a11 = Number (document.getElementById("ip1").value);
    var a12 = Number (document.getElementById("ip2").value);
    var a13 = Number (document.getElementById("ip3").value);
    
    var a21 = Number (document.getElementById("ip5").value);
    var a22 = Number (document.getElementById("ip6").value);
    var a23 = Number (document.getElementById("ip7").value);
    
    var a31 = Number (document.getElementById("ip9").value);
    var a32 = Number (document.getElementById("ip10").value);
    var a33 = Number (document.getElementById("ip11").value);
  
    set1 = a11*((a22*a33)-(a23*a32));
    set2 = a12*((a21*a33)-(a23*a31));
    set3 = a13*((a21*a32)-(a22*a31));
    document.getElementById("demo").innerHTML=set1-set2+set3;


  }function myFunction() {
    document.getElementById("btn1").style.visibility = "hidden";
    document.getElementById("btn3").style.visibility = "hidden";
    document.getElementById("ip3").style.visibility = "hidden";
    document.getElementById("ip4").style.visibility = "hidden";
    document.getElementById("ip7").style.visibility = "hidden";
    document.getElementById("ip8").style.visibility = "hidden";
    document.getElementById("ip9").style.visibility = "hidden";
    document.getElementById("ip10").style.visibility = "hidden";
    document.getElementById("ip11").style.visibility = "hidden";
    document.getElementById("ip12").style.visibility = "hidden";
    document.getElementById("ip13").style.visibility = "hidden";
    document.getElementById("ip14").style.visibility = "hidden";
    document.getElementById("ip15").style.visibility = "hidden";
    document.getElementById("ip16").style.visibility = "hidden";
    document.getElementById("btn2").style.visibility = "visible";
  }
  function bttn() {
    document.getElementById("btn1").style.visibility = "hidden";
    document.getElementById("btn2").style.visibility = "hidden";
    document.getElementById("btn3").style.visibility = "visible";
    document.getElementById("ip3").style.visibility = "visible";
    document.getElementById("ip4").style.visibility = "hidden";
    document.getElementById("ip7").style.visibility = "visible";
    document.getElementById("ip8").style.visibility = "hidden";
    document.getElementById("ip9").style.visibility = "visible";
    document.getElementById("ip10").style.visibility = "visible";
    document.getElementById("ip11").style.visibility = "visible";
    document.getElementById("ip12").style.visibility = "hidden";
    document.getElementById("ip13").style.visibility = "hidden";
    document.getElementById("ip14").style.visibility = "hidden";
    document.getElementById("ip15").style.visibility = "hidden";
    document.getElementById("ip16").style.visibility = "hidden";
  }
  function bttttn() {
    document.getElementById("btn1").style.visibility = "visible";
    document.getElementById("btn3").style.visibility = "hidden";  
    document.getElementById("btn2").style.visibility = "hidden"; 
    document.getElementById("ip3").style.visibility = "visible";
    document.getElementById("ip4").style.visibility = "visible";
    document.getElementById("ip7").style.visibility = "visible";
    document.getElementById("ip8").style.visibility = "visible";
    document.getElementById("ip9").style.visibility = "visible";
    document.getElementById("ip10").style.visibility = "visible";
    document.getElementById("ip11").style.visibility = "visible";
    document.getElementById("ip12").style.visibility = "visible";
    document.getElementById("ip13").style.visibility = "visible";
    document.getElementById("ip14").style.visibility = "visible";
    document.getElementById("ip15").style.visibility = "visible";
    document.getElementById("ip16").style.visibility = "visible"; 
  }
    
  function reload(){
    location.reload();
  }





 
