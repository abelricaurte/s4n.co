function ban_reloj() {
  var elementWithBg = document.getElementById('ban_reloj'),
    now = new Date(),
    currentHour = now.getHours(), //Cambiar a .getHours()
    
    DELAY_IN_MS = 3600000,   // 1 hour
    //DELAY_IN_MS = 60000,     // 1 minute
   // DELAY_IN_MS = 1000,        // 1 seg
    
    //start = DELAY_IN_MS - (now.getMinutes() * 60 + now.getSeconds()) * 1000 + now.getMilliseconds();
    //start = DELAY_IN_MS - (now.getSeconds() * 1000) + now.getMilliseconds();
    start = DELAY_IN_MS - now.getMilliseconds();

    console.log('start', start);
    
    setTimeout(function changeBackground() {
      now = new Date();
      currentHour = now.getHours(); //Cambiar a .getHours()
      console.log('t=', currentHour);

      changeClass();
      setTimeout(changeBackground, DELAY_IN_MS);
    }, start);

    
    function changeClass(){
      if(currentHour >= 6 && currentHour <= 13) {
        elementWithBg.className = "bg1";
      }else if(currentHour >= 14 && currentHour <= 21) {
        elementWithBg.className = "bg2";
      }else{
        elementWithBg.className = "bg3";
      }
    }
    changeClass();
}

ban_reloj();

function relojdigital()
{
var dato = new Date();
var horas = dato.getHours();
var minuto = dato.getMinutes();
//var segundos = dato.getSeconds();

horas = (horas < 10 ? "0" : "") + horas;
minuto = (minuto < 10 ? "0" : "") + minuto;
//segundos = (segundos < 10 ? "0" : "") + segundos;

var PonerReloj = horas + " . " + minuto;

document.getElementById("Reloj").innerHTML = PonerReloj;
}
