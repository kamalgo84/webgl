var factorMov=0.1;
var incrementoMouseX=0;
var incrementoMouseY=0;
var mouseTempX=0;
var mouseTempY=0;
var primera_vez=true;
var paso_frente_activo=false;
var paso_atras_activo=false;
var paso_izquierda_activo=false;
var paso_derecha_activo=false;
var paso_arriba_activo=false;
var paso_abajo_activo=false;

var rotar_izquierda_activo=false;
var rotar_derecha_activo=false;
var rotar_arriba_activo=false;
var rotar_abajo_activo=false;

var esAvtivoMovimiento=true;

function activarMovimiento(activar)
{
	esAvtivoMovimiento=activar;
}

function aplicar_valores_eventos()
{
	 brilloEspecular=parseFloat($.number($("#brilloText").val(), 1,'.',''));
}

function operaEvento2(evento)
{
	mouseTempX=evento.clientX;
   	mouseTempY=evento.clientY;
   	
   	pintarDatos();
   
}

function operaEvento(evento)
{
   var tecla=String.fromCharCode(evento.which).toUpperCase();
   var boton=parseInt(evento.button);
   
//   console.log("Buttons="+evento.buttons);
//   console.log("Button="+evento.toString());
	
		
   
   if(evento.type=="mousemove" && (evento.button!="0" ||  evento.buttons!="0") && esAvtivoMovimiento)
   {
	    arrastrarRaton(evento);		   
   }
  
   
   //$("#loescrito").html(evento.type + ": " + evento.keyCode + ", " +String.fromCharCode(evento.which)+",");
   
   if(evento.type=="keydown")
   {
		teclaAbajo(tecla);
		
   }
   else if(evento.type=="keypress")
   {
		
		
   }
   else if(evento.type=="keyup")
   {
		teclaArriba(tecla);
		
   }
   
   pintarDatos();
   
//   $("#loescrito").html("<td>camPosX:" + camPos[0]+ 
//		   				"<br>camPosY:" +camPos[1]+"<br>camPosZ:"+camPos[2]+
//                        "</td><td>camRotX:" +camRot[0]+"<br>camRotY:" +camRot[1]+"<br>camRotZ:" +camRot[2]+
//						"</td><td>lightPosX:" +lightPos[0]+"<br>lightPosY:" +lightPos[1]+"<br>lightPosZ:" +lightPos[2]+"</td>");
}

function arrastrarRaton(evento)
{
	
	
	
	incrementoMouseX=parseInt(evento.clientX)-parseInt(mouseTempX);
	incrementoMouseY=parseInt(evento.clientY)-parseInt(mouseTempY);	
	
	//console.log("PosicionMouse ("+evento.screenX+" , "+evento.screenY+")" + "PosicionMouseC ("+evento.clientX+" , "+evento.clientY+")" + "PosicionMouseTemp ("+mouseTempX+" , "+mouseTempY+")" + "IncMouse ("+incrementoMouseX+" , "+incrementoMouseY+")");
	
	camRot[0]=parseFloat(camRot[0])+parseFloat((parseInt(incrementoMouseY)/100));
	camRot[1]=parseFloat(camRot[1])+parseFloat((parseInt(incrementoMouseX)/100));
	
	if(parseFloat(camRot[0]) > parseFloat(parseFloat(Math.PI/3))) camRot[0]=parseFloat(Math.PI/3); 
    if(parseFloat(camRot[0]) < parseFloat(-1 * parseFloat(Math.PI/3))) camRot[0]=(-1) * parseFloat(Math.PI/3);  
	
	if(incrementoMouseX != 0)
	{
		mouseTempX=parseInt(evento.clientX);
	}
	if(incrementoMouseY != 0)
	{
		mouseTempY=parseInt(evento.clientY);
	}
}
function teclaArriba(tecla)
{
	
		if(tecla=="W") paso_frente_activo=false;
		if(tecla=="S") paso_atras_activo=false;
		if(tecla=="A") paso_izquierda_activo=false;
		if(tecla=="D") paso_derecha_activo=false;
		if(tecla=="Z") paso_arriba_activo=false;
		if(tecla=="X") paso_abajo_activo=false;
		if(tecla=="Q") rotar_izquierda_activo=false;
		if(tecla=="E") rotar_derecha_activo=false;
		if(tecla=="R") rotar_arriba_activo=false;
		if(tecla=="T") rotar_abajo_activo=false;
		if(tecla=="O") anguloPerspectiva+=1;
		if(tecla=="P") anguloPerspectiva-=1;
		if(tecla=="M") lightPos[2]=lightPos[2]+0.1;
		if(tecla=="N") lightPos[2]=lightPos[2]-0.1;
		if(tecla=="J") lightPos[1]=lightPos[1]+0.1;
		if(tecla=="K") lightPos[1]=lightPos[1]-0.1;
		if(tecla=="V") lightPos[0]=lightPos[0]+0.1;
		if(tecla=="B") lightPos[0]=lightPos[0]-0.1;
		if(tecla=="Y") rot=parseFloat(rot)+1;
		if(tecla=="U") rot=parseFloat(rot)-1;
		
		
}

function establecerValores(){

		if(paso_frente_activo) 	  paso_frente();
		if(paso_atras_activo)     paso_atras();
		if(paso_izquierda_activo) paso_izquierda();
		if(paso_derecha_activo)   paso_derecha();
		if(paso_arriba_activo)    paso_arriba();
		if(paso_abajo_activo)     paso_abajo();
		
		if(rotar_izquierda_activo)rotar_izquierda();//camRot[1]+=factorMov;
		if(rotar_derecha_activo)  rotar_derecha();//camRot[1]-=factorMov;
		if(rotar_arriba_activo)   rotar_arriba();//camRot[1]+=factorMov;
		if(rotar_abajo_activo)    rotar_abajo();//camRot[1]-=factorMov;	
  
}           

function teclaAbajo(tecla)
{
	
		if(tecla=="W") paso_frente_activo=true;
		if(tecla=="S") paso_atras_activo=true;
		if(tecla=="A") paso_izquierda_activo=true;
		if(tecla=="D") paso_derecha_activo=true;
		if(tecla=="Z") paso_arriba_activo=true;
		if(tecla=="X") paso_abajo_activo=true;
		if(tecla=="Q") rotar_izquierda_activo=true;
		if(tecla=="E") rotar_derecha_activo=true;
		if(tecla=="R") rotar_arriba_activo=true;
		if(tecla=="T") rotar_abajo_activo=true;
		if(tecla=="O") anguloPerspectiva+=1;
		if(tecla=="P") anguloPerspectiva-=1;
		if(tecla=="M") lightPos[2]=lightPos[2]+0.1;
		if(tecla=="N") lightPos[2]=lightPos[2]-0.1;
		if(tecla=="J") lightPos[1]=lightPos[1]+0.1;
		if(tecla=="K") lightPos[1]=lightPos[1]-0.1;
		if(tecla=="V") lightPos[0]=lightPos[0]+0.1;
		if(tecla=="B") lightPos[0]=lightPos[0]-0.1;
		if(tecla=="G") if(modoFiltroTextura==2) modoFiltroTextura=0;else modoFiltroTextura++;
		
		
}




function paso_frente()
{
	camPos[2]+=Math.cos(camRot[1]) * factorMov;
	camPos[0]+=Math.sin(camRot[1]) * factorMov;  
}

function paso_atras()
{
    camPos[2]-=Math.cos(camRot[1]) * factorMov;
	camPos[0]-=Math.sin(camRot[1]) * factorMov;
}

function paso_izquierda()
{
	camPos[2]+=Math.cos(camRot[1]+(Math.PI/2)) * factorMov;
    camPos[0]+=Math.sin(camRot[1]+(Math.PI/2)) * factorMov;
}
    
function paso_derecha()
{
   camPos[2]+=Math.cos(camRot[1]-(Math.PI/2)) * factorMov;
   camPos[0]+=Math.sin(camRot[1]-(Math.PI/2)) * factorMov;

}

function paso_arriba()
{
	camPos[1]=camPos[1]-factorMov;
}

function paso_abajo()
{
	camPos[1]=camPos[1]+factorMov;
}
   
function rotar_izquierda()
{
 	camRot[1]=camRot[1]+(factorMov/3);
}
   
function rotar_derecha()
{
	camRot[1]=camRot[1]-(factorMov/3);
}
    
function rotar_arriba()
{
	camRot[0]=camRot[0]+(factorMov/3);
}
    
function rotar_abajo()
{
	camRot[0]=camRot[0]-(factorMov/3);
}

function pintarDatos()
{
	brilloEspecular=100-(parseFloat($.number($("#brilloText").val(), 1,'.',''))/2);
	
	$("#camPosX").html($.number(camPos[0], 3,'.',''));
	$("#camPosY").html($.number(camPos[1], 3,'.',''));
	$("#camPosZ").html($.number(camPos[2], 3,'.',''));
	$("#camRotX").html($.number(camRot[0], 3,'.',''));
	$("#camRotY").html($.number(camRot[1], 3,'.',''));
	$("#camRotZ").html($.number(camRot[2], 3,'.',''));
	$("#lightPosX").html($.number(lightPos[0], 3,'.',''));
	$("#lightPosY").html($.number(lightPos[1], 3,'.',''));
	$("#lightPosZ").html($.number(lightPos[2], 3,'.',''));
	$("#brilloText").val($.number(200-(brilloEspecular*2), 0,'',''));
	$("#brilloVal").html("  "+$.number(100-brilloEspecular, 1,'.',''));
	$("#colorDifuso").prop('style', "background-color : rgb("+floatToRGB(colorDifuso[0])+","+floatToRGB(colorDifuso[1])+","+floatToRGB(colorDifuso[2])+")");
	$("#colorAmbiental").prop('style', "background-color : rgb("+floatToRGB(colorAmbiental[0])+","+floatToRGB(colorAmbiental[1])+","+floatToRGB(colorAmbiental[2])+")");
	$("#colorEspecular").prop('style', "background-color : rgb("+floatToRGB(colorEspecular[0])+","+floatToRGB(colorEspecular[1])+","+floatToRGB(colorEspecular[2])+")");
	
}