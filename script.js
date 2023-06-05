var btnSifrele=document.getElementById("sifrele");
	btnSifrele.onclick=myFunction;

var resetBtn = document.getElementById("reset");
    resetBtn.addEventListener("click", function() {
        document.getElementById("inputnmbr").value = "";
    });
    	
function myFunction() {
    var dizi = [];
    var sayi = parseInt(document.getElementById("inputnmbr").value);
    
    for (var i = 4; i >= 0; i--) { 
      dizi[i] = (sayi % 10 + 9) % 10;
      sayi = Math.floor(sayi / 10);
      
      //console.log("i: " + i + ", dizi: " + dizi + ", sayi: " + sayi);
      
      var temp = dizi[0];
      dizi[0] = dizi[2];
      dizi[2] = temp;

      temp = dizi[1];
      dizi[1] = dizi[3];
      dizi[3] = temp;

      var result = dizi.join("");
    }
    window.alert(result);
  }