const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();   /* A função get é para pegar a hora, já a dateToday é sincronizar com a horas do dia*/ 
    let s = dateToday.getSeconds();

     if(hr <10) hr = "0" + hr;

     if(min <10) min = "0" + min;

     if(s <10) s = "0" + s;


    horas.textContent = hr;
    minutos.textContent = min; /* textContent é para mudar o assunto */
    segundos.textContent = s;

})
