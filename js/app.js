document.getElementById('txtBtn').addEventListener('click',cargarTXT);
document.getElementById('jsonBtn').addEventListener('click',cargarJSON);
document.getElementById('apiBtn').addEventListener('click',cargarREST);

function cargarTXT(){
var datamen=parseInt(document.form1.platf.value);
var datamen2=parseInt(document.form2.sensor.value);
var datamen3=parseInt(document.form3.embebido.value);
var datamen4=parseInt(document.form4.actuador.value);
getText("plataforma.json");
    async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    const obj = JSON.parse(myText);
    switch (datamen) {
     case 0:
      planpt=obj.arduino[0].plan;
      cospt=obj.arduino[0].costo;
      enlacew=obj.arduino[0].enlace;
      html=`
      <a target="_blank" href="${enlacew}">Planes</a>
      `;
      document.getElementById("demo5").innerHTML =
      planpt + " es USD$" + cospt;
      document.getElementById("demo4").innerHTML =
      "Plataforma IoT";
      document.getElementById('resultado').innerHTML=html;
  break;
  case 1:
      planpt=obj.arduino[1].plan;
      cospt=obj.arduino[1].costo;
      enlacew=obj.arduino[1].enlace;
      html=`
      <a target="_blank" href="${enlacew}">Planes</a>
      `;
      document.getElementById("demo5").innerHTML =
      planpt + " es USD$" + cospt;
      document.getElementById("demo4").innerHTML =
      "Plataforma IoT";
      document.getElementById('resultado').innerHTML=html;
  break;
  case 2:
      planpt=obj.arduino[2].plan;
      cospt=obj.arduino[2].costo;
      enlacew=obj.arduino[2].enlace;
      html=`
      <a target="_blank" href="${enlacew}">Planes</a>
      `;
      document.getElementById("demo5").innerHTML =
      planpt + " es USD$" + cospt;
      document.getElementById("demo4").innerHTML =
      "Plataforma IoT";
      document.getElementById('resultado').innerHTML=html;
  break;
  case 3:
      planpt=obj.arduino[3].plan;
      cospt=obj.arduino[3].costo;
      enlacew=obj.arduino[3].enlace;
      html=`
      <a target="_blank" href="${enlacew}">Planes</a>
      `;
      document.getElementById("demo5").innerHTML =
      planpt + " es USD$" + cospt;
      document.getElementById("demo4").innerHTML =
      "Plataforma IoT";
      document.getElementById('resultado').innerHTML=html;
  break;
  case 4:
      planpt=obj.arduino[4].plan;
      cospt=obj.arduino[4].costo;
      enlacew=obj.arduino[4].enlace;
      html=`
      <a target="_blank" href="${enlacew}">Planes</a>
      `;
      document.getElementById("demo5").innerHTML =
      planpt + " es USD$" + cospt ;
      document.getElementById("demo4").innerHTML =
      "Plataforma IoT";
      document.getElementById('resultado').innerHTML=html;
  break;
  case 5:
      planpt=obj.arduino[5].plan;
      cospt=obj.arduino[5].costo;
      enlacew=obj.arduino[5].enlace;
      html=`
      <a target="_blank" href="${enlacew}">Planes</a>
      `;
      document.getElementById("demo5").innerHTML =
      planpt + " es USD$" + cospt ;
      document.getElementById("demo4").innerHTML =
      "Plataforma IoT";
      document.getElementById('resultado').innerHTML=html;
  break;
  case 6:
      planpt=obj.arduino[6].plan;
      cospt=obj.arduino[6].costo;
      enlacew=obj.arduino[6].enlace;
      html=`
      <a target="_blank" href="${enlacew}">Planes</a>
      `;
      document.getElementById("demo5").innerHTML =
      planpt + " es USD$" + cospt ;
      document.getElementById("demo4").innerHTML =
      "Plataforma IoT";
      document.getElementById('resultado').innerHTML=html;
  break;
  case 7:
      planpt=obj.arduino[7].plan;
      cospt=obj.arduino[7].costo;
      enlacew=obj.arduino[7].enlace;
      html=`
      <a target="_blank" href="${enlacew}">Planes</a>
      `;
      document.getElementById("demo5").innerHTML =
      planpt + " es USD$" + cospt ;
      document.getElementById("demo4").innerHTML =
      "Plataforma IoT";
      document.getElementById('resultado').innerHTML=html;
  break;
  default:
    document.getElementById("demo5").innerHTML =
    " el costo";
      document.getElementById("demo4").innerHTML =
    "Plataforma IoT sin consultar";
  }
  switch (datamen2) {
    case 0:
     planpt=obj.sensor[0].nombre;
     cospt=obj.sensor[0].costo;
     enlacew=obj.sensor[0].enlace;
     html=`
     <a target="_blank" href="${enlacew}">Hoja de Datos</a>
     `;
     document.getElementById("demo52").innerHTML =
     planpt + " es COP$" + cospt;
     document.getElementById("demo42").innerHTML =
     "Descripción de Sensor";
     document.getElementById('resultado2').innerHTML=html;
 break;
 case 1:
     planpt=obj.sensor[1].nombre;
     cospt=obj.sensor[1].costo;
     enlacew=obj.sensor[1].enlace;
     html=`
     <a target="_blank" href="${enlacew}">Hoja de Datos</a>
     `;
     document.getElementById("demo52").innerHTML =
     planpt + " es COP$" + cospt;
     document.getElementById("demo42").innerHTML =
     "Descripción de Sensor";
     document.getElementById('resultado2').innerHTML=html;
 break;
 case 2:
     planpt=obj.sensor[2].nombre;
     cospt=obj.sensor[2].costo;
     enlacew=obj.sensor[2].enlace;
     html=`
     <a target="_blank" href="${enlacew}">Hoja de Datos</a>
     `;
     document.getElementById("demo52").innerHTML =
     planpt + " es COP$" + cospt ;
     document.getElementById("demo42").innerHTML =
     "Descripción de Sensor";
     document.getElementById('resultado2').innerHTML=html;
 break;
 case 3:
     planpt=obj.sensor[3].nombre;
     cospt=obj.sensor[3].costo;
     enlacew=obj.sensor[3].enlace;
     html=`
     <a target="_blank" href="${enlacew}">Hoja de Datos</a>
     `;
     document.getElementById("demo52").innerHTML =
     planpt + " es COP$" + cospt ;
     document.getElementById("demo42").innerHTML =
     "Descripción de Sensor";
     document.getElementById('resultado2').innerHTML=html;
 break;
 case 4:
     planpt=obj.sensor[4].nombre;
     cospt=obj.sensor[4].costo;
     enlacew=obj.sensor[4].enlace;
     html=`
     <a target="_blank" href="${enlacew}">Hoja de Datos</a>
     `;
     document.getElementById("demo52").innerHTML =
     planpt + " es COP$" + cospt ;
     document.getElementById("demo42").innerHTML =
     "Descripción de Sensor";
     document.getElementById('resultado2').innerHTML=html;
 break;
 case 5:
  planpt=obj.sensor[5].nombre;
  cospt=obj.sensor[5].costo;
  enlacew=obj.sensor[5].enlace;
  html=`
  <a target="_blank" href="${enlacew}">Hoja de Datos</a>
  `;
  document.getElementById("demo52").innerHTML =
  planpt + " es COP$" + cospt ;
  document.getElementById("demo42").innerHTML =
  "Descripción de Sensor";
  document.getElementById('resultado2').innerHTML=html;
break;
case 6:
  planpt=obj.sensor[6].nombre;
  cospt=obj.sensor[6].costo;
  enlacew=obj.sensor[6].enlace;
  html=`
  <a target="_blank" href="${enlacew}">Hoja de Datos</a>
  `;
  document.getElementById("demo52").innerHTML =
  planpt + " es COP$" + cospt ;
  document.getElementById("demo42").innerHTML =
  "Descripción de Sensor";
  document.getElementById('resultado2').innerHTML=html;
break;
case 7:
  planpt=obj.sensor[7].nombre;
  cospt=obj.sensor[7].costo;
  enlacew=obj.sensor[7].enlace;
  html=`
  <a target="_blank" href="${enlacew}">Hoja de Datos</a>
  `;
  document.getElementById("demo52").innerHTML =
  planpt + " es COP$" + cospt ;
  document.getElementById("demo42").innerHTML =
  "Descripción de Sensor";
  document.getElementById('resultado2').innerHTML=html;
break;
 default:
   document.getElementById("demo52").innerHTML =
   " el costo";
     document.getElementById("demo42").innerHTML =
   "Descripción de Sensor sin consultar";
 }
 switch (datamen3) {
  case 0:
   planpt=obj.embebido[0].nombre;
   cospt=obj.embebido[0].costo;
   enlacew=obj.embebido[0].enlace;
   html=`
   <a target="_blank" href="${enlacew}">Hoja de Datos</a>
   `;
   document.getElementById("demo53").innerHTML =
   planpt + " es COP$" + cospt;
   document.getElementById("demo43").innerHTML =
   "Descripción de Embebido";
   document.getElementById('resultado3').innerHTML=html;
break;
case 1:
   planpt=obj.embebido[1].nombre;
   cospt=obj.embebido[1].costo;
   enlacew=obj.embebido[1].enlace;
   html=`
   <a target="_blank" href="${enlacew}">Hoja de Datos</a>
   `;
   document.getElementById("demo53").innerHTML =
   planpt + " es COP$" + cospt;
   document.getElementById("demo43").innerHTML =
   "Descripción de Embebido";
   document.getElementById('resultado3').innerHTML=html;
break;
case 2:
   planpt=obj.embebido[2].nombre;
   cospt=obj.embebido[2].costo;
   enlacew=obj.embebido[2].enlace;
   html=`
   <a target="_blank" href="${enlacew}">Hoja de Datos</a>
   `;
   document.getElementById("demo53").innerHTML =
   planpt + " es COP$" + cospt ;
   document.getElementById("demo43").innerHTML =
   "Descripción de Embebido";
   document.getElementById('resultado3').innerHTML=html;
break;
case 3:
   planpt=obj.embebido[3].nombre;
   cospt=obj.sensor[3].costo;
   enlacew=obj.embebido[3].enlace;
   html=`
   <a target="_blank" href="${enlacew}">Hoja de Datos</a>
   `;
   document.getElementById("demo53").innerHTML =
   planpt + " es COP$" + cospt ;
   document.getElementById("demo43").innerHTML =
   "Descripción de Embebido";
   document.getElementById('resultado3').innerHTML=html;
break;
case 4:
   planpt=obj.embebido[4].nombre;
   cospt=obj.sensor[4].costo;
   enlacew=obj.embebido[4].enlace;
   html=`
   <a target="_blank" href="${enlacew}">Hoja de Datos</a>
   `;
   document.getElementById("demo53").innerHTML =
   planpt + " es COP$" + cospt ;
   document.getElementById("demo43").innerHTML =
   "Descripción de Embebido";
   document.getElementById('resultado3').innerHTML=html;
break;
case 5:
   planpt=obj.embebido[5].nombre;
   cospt=obj.sensor[5].costo;
   enlacew=obj.embebido[5].enlace;
   html=`
   <a target="_blank" href="${enlacew}">Hoja de Datos</a>
   `;
   document.getElementById("demo53").innerHTML =
   planpt + " es COP$" + cospt ;
   document.getElementById("demo43").innerHTML =
   "Descripción de Embebido";
   document.getElementById('resultado3').innerHTML=html;
break;
case 6:
   planpt=obj.embebido[6].nombre;
   cospt=obj.sensor[6].costo;
   enlacew=obj.embebido[6].enlace;
   html=`
   <a target="_blank" href="${enlacew}">Hoja de Datos</a>
   `;
   document.getElementById("demo53").innerHTML =
   planpt + " es COP$" + cospt ;
   document.getElementById("demo43").innerHTML =
   "Descripción de Embebido";
   document.getElementById('resultado3').innerHTML=html;
break;
case 7:
   planpt=obj.embebido[7].nombre;
   cospt=obj.sensor[7].costo;
   enlacew=obj.embebido[7].enlace;
   html=`
   <a target="_blank" href="${enlacew}">Hoja de Datos</a>
   `;
   document.getElementById("demo53").innerHTML =
   planpt + " es COP$" + cospt ;
   document.getElementById("demo43").innerHTML =
   "Descripción de Embebido";
   document.getElementById('resultado3').innerHTML=html;
break;
default:
 document.getElementById("demo53").innerHTML =
 " el costo";
   document.getElementById("demo43").innerHTML =
 "Descripción de Embebido sin consultar";
}
switch (datamen4) {
  case 0:
   planpt=obj.actuador[0].nombre;
   cospt=obj.actuador[0].costo;
   enlacew=obj.actuador[0].enlace;
   html=`
   <a target="_blank" href="${enlacew}">Hoja de Datos</a>
   `;
   document.getElementById("demo54").innerHTML =
   planpt + " es COP$" + cospt;
   document.getElementById("demo44").innerHTML =
   "Descripción de actuador";
   document.getElementById('resultado4').innerHTML=html;
break;
case 1:
   planpt=obj.actuador[1].nombre;
   cospt=obj.actuador[1].costo;
   enlacew=obj.actuador[1].enlace;
   html=`
   <a target="_blank" href="${enlacew}">Hoja de Datos</a>
   `;
   document.getElementById("demo54").innerHTML =
   planpt + " es COP$" + cospt;
   document.getElementById("demo44").innerHTML =
   "Descripción de actuador";
   document.getElementById('resultado4').innerHTML=html;
break;
case 2:
   planpt=obj.actuador[2].nombre;
   cospt=obj.actuador[2].costo;
   enlacew=obj.actuador[2].enlace;
   html=`
   <a target="_blank" href="${enlacew}">Hoja de Datos</a>
   `;
   document.getElementById("demo54").innerHTML =
   planpt + " es COP$" + cospt ;
   document.getElementById("demo44").innerHTML =
   "Descripción de actuador";
   document.getElementById('resultado4').innerHTML=html;
break;
case 3:
   planpt=obj.actuador[3].nombre;
   cospt=obj.actuador[3].costo;
   enlacew=obj.actuador[3].enlace;
   html=`
   <a target="_blank" href="${enlacew}">Hoja de Datos</a>
   `;
   document.getElementById("demo54").innerHTML =
   planpt + " es COP$" + cospt ;
   document.getElementById("demo44").innerHTML =
   "Descripción de actuador";
   document.getElementById('resultado4').innerHTML=html;
break;
case 4:
   planpt=obj.actuador[4].nombre;
   cospt=obj.actuador[4].costo;
   enlacew=obj.actuador[4].enlace;
   html=`
   <a target="_blank" href="${enlacew}">Hoja de Datos</a>
   `;
   document.getElementById("demo54").innerHTML =
   planpt + " es COP$" + cospt ;
   document.getElementById("demo44").innerHTML =
   "Descripción de actuador";
   document.getElementById('resultado4').innerHTML=html;
break;
case 5:
   planpt=obj.actuador[5].nombre;
   cospt=obj.actuador[5].costo;
   enlacew=obj.actuador[5].enlace;
   html=`
   <a target="_blank" href="${enlacew}">Hoja de Datos</a>
   `;
   document.getElementById("demo54").innerHTML =
   planpt + " es COP$" + cospt ;
   document.getElementById("demo44").innerHTML =
   "Descripción de actuador";
   document.getElementById('resultado4').innerHTML=html;
break;
case 6:
   planpt=obj.actuador[6].nombre;
   cospt=obj.actuador[6].costo;
   enlacew=obj.actuador[6].enlace;
   html=`
   <a target="_blank" href="${enlacew}">Hoja de Datos</a>
   `;
   document.getElementById("demo54").innerHTML =
   planpt + " es COP$" + cospt ;
   document.getElementById("demo44").innerHTML =
   "Descripción de actuador";
   document.getElementById('resultado4').innerHTML=html;
break;
case 7:
   planpt=obj.actuador[7].nombre;
   cospt=obj.actuador[7].costo;
   enlacew=obj.actuador[7].enlace;
   html=`
   <a target="_blank" href="${enlacew}">Hoja de Datos</a>
   `;
   document.getElementById("demo54").innerHTML =
   planpt + " es COP$" + cospt ;
   document.getElementById("demo44").innerHTML =
   "Descripción de actuador";
   document.getElementById('resultado4').innerHTML=html;
break;
default:
 document.getElementById("demo54").innerHTML =
 " el costo";
   document.getElementById("demo44").innerHTML =
 "Descripción de actuador sin consultar";
}
}
}

function cargarJSON(){
    getText("plataforma.json");
    async function getText(file) {
      let myObject = await fetch(file);
      let myText = await myObject.text();
      const obj = JSON.parse(myText);
      planpt=obj.arduino[3].plan;
      cospt=obj.arduino[3].costo;
      tiposen=obj.sensor[0].nombre;
      costsen=obj.sensor[0].costo;
      document.getElementById("demo").innerHTML =
      planpt + " es USD$" + cospt;
      document.getElementById("demo2").innerHTML =
      tiposen + " es USD$" + costsen;    
      document.getElementById("demo3").innerHTML =
      "Costo total estimado es USD$" + (cospt+costsen);
    }
      
}
function cargarREST(){
   
}