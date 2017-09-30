<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">


<html>

<head>
<title>WebGL</title>
<meta http-equiv="content-type" content="text/html; charset=ISO-8859-1">

<link rel="stylesheet" type="text/css" href="estaticos/css/Kwebstyles.css">
<link rel="stylesheet" type="text/css" href="estaticos/css/jquery-ui.css">
<link rel="stylesheet" type="text/css" href="estaticos/css/colpick.css">

<script type="text/javascript" src="estaticos/js/app_basic/V_Forma.js"></script>
<script type="text/javascript" src="estaticos/js/app_basic/glMatrix-0.9.5.min.js"></script>
<script type="text/javascript" src="estaticos/js/app_basic/glKamal.js"></script>
<script type="text/javascript" src="estaticos/js/app_basic/utils.js"></script>
<script type="text/javascript" src="estaticos/js/jquery/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="estaticos/js/jquery/jquery.number.js"></script>
<script type="text/javascript" src="estaticos/js/jquery/jquery-ui.js"></script>
<script type="text/javascript" src="estaticos/js/jquery/colpick.js"></script>
<script type="text/javascript" src="estaticos/js/app_basic/V_PlanoRef.js"></script>
<script type="text/javascript" src="estaticos/js/app_basic/V_Ejes.js"></script>
<script type="text/javascript" src="estaticos/js/app_basic/V_piramid.js"></script>
<script type="text/javascript" src="estaticos/js/app_basic/initShaders.js"></script>
<script type="text/javascript" src="estaticos/js/app_basic/initTexturas.js"></script>
<script type="text/javascript" src="estaticos/js/app_basic/capEventos.js"></script>

<script type="text/javascript" src="estaticos/js/app_basic/7_P_forma.ob.Normales.js"></script>
<script type="text/javascript" src="estaticos/js/app_basic/7_P_forma.ob.Texturas.js"></script>
<script type="text/javascript" src="estaticos/js/app_basic/7_P_forma.ob.Verices.js"></script>

<script type="text/javascript" src="estaticos/js/app_basic/columna.Normales.js"></script>
<script type="text/javascript" src="estaticos/js/app_basic/columna.Script.js"></script>
<script type="text/javascript" src="estaticos/js/app_basic/columna.Texturas.js"></script>
<script type="text/javascript" src="estaticos/js/app_basic/columna.Verices.js"></script>

<script type="text/javascript" src="estaticos/js/app_basic/caja.Normales.js"></script>
<script type="text/javascript" src="estaticos/js/app_basic/caja.Script.js"></script>
<script type="text/javascript" src="estaticos/js/app_basic/caja.Texturas.js"></script>
<script type="text/javascript" src="estaticos/js/app_basic/caja.Verices.js"></script>

<!-- <script type="text/javascript" src="js/app_basic/KShaders.js"></script> -->

<script>
   
$(document).ready(function(){

   //obtenerShaders();
	
	$(document).keypress(operaEvento);
	$(document).keydown(operaEvento);
	$(document).keyup(operaEvento);
	$("#canvas").mousemove(operaEvento);
	$("#canvas").click(operaEvento2);
	$("#canvas").mousedown(operaEvento2);
	$("#brilloText").change(pintarDatos);
	$("#brilloText").mousemove(pintarDatos);
	$("#colorEspecular").colpick
	({
		color: {r:floatToRGB(colorEspecular[0]), g:floatToRGB(colorEspecular[1]), b:floatToRGB(colorEspecular[2])},
		onSubmit:function(colorHSBObject,colorHEXString,colorRBGObject,htmlElementButtonColorPick,esDisparadoPorCodigo) 
		{
			activarMovimiento(true);
			colorEspecular=formatRGBText(colorRBGObject.r,colorRBGObject.g,colorRBGObject.b);
			colorEspecularBack=colorEspecular;
			pintarDatos();
		},
		onShow:function() 
		{
			activarMovimiento(false);
			colorEspecularBack=colorEspecular;
		},
		onHide:function() 
		{
			activarMovimiento(true);
			colorEspecular=colorEspecularBack;
		},
		onChange:function(colorHSBObject,colorHEXString,colorRBGObject,htmlElementButtonColorPick,esDisparadoPorCodigo)
		{
			activarMovimiento(false);
			colorEspecular=formatRGBText(colorRBGObject.r,colorRBGObject.g,colorRBGObject.b);
			pintarDatos();
		}
	});
	$("#colorAmbiental").colpick
	({
		color: {r:floatToRGB(colorAmbiental[0]), g:floatToRGB(colorAmbiental[1]), b:floatToRGB(colorAmbiental[2])},
		onSubmit:function(colorHSBObject,colorHEXString,colorRBGObject,htmlElementButtonColorPick,esDisparadoPorCodigo) 
		{
			activarMovimiento(true);
			colorAmbiental=formatRGBText(colorRBGObject.r,colorRBGObject.g,colorRBGObject.b);
			colorAmbientalBack=colorAmbiental;
			pintarDatos();
		},
		onShow:function() 
		{
			activarMovimiento(false);
			colorAmbientalBack=colorAmbiental;
		},
		onHide:function() 
		{
			activarMovimiento(true);
			colorAmbiental=colorAmbientalBack;
		},
		onChange:function(colorHSBObject,colorHEXString,colorRBGObject,htmlElementButtonColorPick,esDisparadoPorCodigo)
		{
			activarMovimiento(false);
			colorAmbiental=formatRGBText(colorRBGObject.r,colorRBGObject.g,colorRBGObject.b);
			pintarDatos();
		}
	});
	$("#colorDifuso").colpick
	({
		color: {r:floatToRGB(colorDifuso[0]), g:floatToRGB(colorDifuso[1]), b:floatToRGB(colorDifuso[2])},
		onSubmit:function(colorHSBObject,colorHEXString,colorRBGObject,htmlElementButtonColorPick,esDisparadoPorCodigo) 
		{
			activarMovimiento(true);
			colorDifuso=formatRGBText(colorRBGObject.r,colorRBGObject.g,colorRBGObject.b);
			colorDifusoBack=colorDifuso;
			pintarDatos();
		},
		onShow:function() 
		{
			activarMovimiento(false);
			colorDifusoBack=colorDifuso;
		},
		onHide:function() 
		{
			activarMovimiento(true);
			colorDifuso=colorDifusoBack;
		},
		onChange:function(colorHSBObject,colorHEXString,colorRBGObject,htmlElementButtonColorPick,esDisparadoPorCodigo)
		{
			activarMovimiento(false);
			colorDifuso=formatRGBText(colorRBGObject.r,colorRBGObject.g,colorRBGObject.b);
			pintarDatos();
		}
	});
   
	$("#capaDatos").mouseenter(function() {activarMovimiento(false);});
	$("#capaDatos").mouseleave(function() {activarMovimiento(true);});
	$("#capaDatos").click(function() {activarMovimiento(false);});
	$("#capaDatos").mousemove(function() {activarMovimiento(false);});
	
	$("#brilloText").val($.number(200-(brilloEspecular*2), 0,'',''));
	$("#activarLuzEspecular").prop('checked', "false");
   
	pintarDatos();
   
   	webGLStart();
   
   
   
})

function obtenerShaders()
{
	$.ajax
	({
		  type: "POST",
		  url: '/kweb/obtenerShaders',
		  data: '',
		  async: false,
		  contentType: 'application/json',
		  success: function(json) 
		  {
		    
		    
		    if(json.success==true)
		    {		    	   
		    	$('#shader-vs').html(json.data.vertexshader);
		    	$('#shader-fs').html(json.data.fragmentshader);
		    	$('#basicShader-vs').html(json.data.basicvertexshader);
		    	$('#basicShader-fs').html(json.data.basicfragmentxshader);
		    	
		    	webGLStart();
		    }
		  }
				
	});
}

</script>


</head>


<body>
	<table>
		<tr>
			<td>
				<canvas id="canvas" width="800" height="500"></canvas>
			</td>
			<td class="claseAlignTop0">
				<div id="capaDatos" class="claseCapaDatos">
					<table>
						<tr>
							<td>
								<input type="checkbox" id="mostrarEjes"/><span class="textoNegrita">Mostrar Ejes</span>
							</td>
						</tr>
						<tr>
							<td class="claseCeldaDatos">
								 <fieldset  class="divTitulo">
      								<legend><span>Posición Cámara</span></legend>
									<div>
										<span>X: </span><span id="camPosX"></span><br>
										<span>Y: </span><span id="camPosY"></span><br>
										<span>Z: </span><span id="camPosZ"></span><br>
									</div>
								</fieldset>
			    			</td>
			    			<td class="claseCeldaDatos">  
			    				<fieldset  class="divTitulo">
      								<legend><span>Rotación Cámara</span></legend>
									<div>  
					    				<span>X: </span><span id="camRotX"></span><br>
					    				<span>Y: </span><span id="camRotY"></span><br>
					    				<span>Z: </span><span id="camRotZ"></span><br>
					    			</div>
					    		</fieldset>
							</td>
							<td class="claseCeldaDatos">
								<fieldset  class="divTitulo">
      								<legend><span>Posición Luz</span></legend>
									<div>
										<span>X: </span><span id="lightPosX"></span><br>
										<span>Y: </span><span id="lightPosY"></span><br>
										<span>Z: </span><span id="lightPosZ"></span><br>
									</div>
								</fieldset>
							</td>
							
						</tr>
						<tr>
							<td colspan="3" class="claseCeldaDatos">
								<fieldset  class="divTitulo">
      								<legend><input type="checkbox" id="activarLuz" checked/><span class="textoNegrita">Activar Iluminación</span></legend>
									<div>
										<div class="saltoLinea"></div>
										<fieldset  class="divTitulo">
      										<legend><span class="textoNegrita">Iluminación Ambiental</span></legend>
      										<table class="divContenedor">
      											<tr>
      												<td>
														<span class="textoNegrita">Color Ambiental :</span>
													</td>
													<td>
														<button id="colorAmbiental" class="muestraColor"></button>
													</td>
												</tr>
											</table>
										</fieldset>
										<div class="saltoLinea"></div>
										<fieldset  class="divTitulo">
      										<legend><span class="textoNegrita">Iluminación Difusa</span></legend>
      										<table class="divContenedor">
      											<tr>
      												<td>
														<span class="textoNegrita">Color Difuso:</span> 
													</td>
													<td>
														<button id="colorDifuso" class="muestraColor"></button>
													</td>
												</tr>
      											<tr>
      												<td>
      													<span class="textoNegrita">Nivel Difuso:</span>
      												</td>
      												<td>
														<input type="range" min="0" max="200" id="nivelDifusoText" class=""/>
														<span class="textoNegrita" id="nivelDifusoVal"></span>
													</td>
												</tr>
											</table>
										</fieldset>
										<div class="saltoLinea"></div>
										<fieldset  class="divTitulo">
      										<legend><span class="textoNegrita">Iluminación Especular</span></legend>
      										<div>
      											
      											<table class="divContenedor">
      												<tr>
	      												<td>
      														<input type="checkbox" id="activarLuzEspecular"/><span class="textoNegrita">Activar</span>
      													</td>
													</tr>
	      											<tr>
	      												<td>
															<span class="textoNegrita">Color Especular:</span> 
														</td>
														<td>
															<button id="colorEspecular" class="muestraColor"></button>
														</td>
													</tr>
												</table>
      											<div class="saltoLinea"></div>
      											<table class="divContenedor">
	      											<tr>
	      												<td>
	      													<span class="textoNegrita">Brillo:</span>
	      												</td>
	      												<td>
															<input type="range" min="0" max="200" id="brilloText" class=""/>
															<span class="textoNegrita" id="brilloVal"></span>
														</td>
													</tr>
												</table>
											</div>
										</fieldset>
									</div>
								</fieldset>
							</td>
						</tr>
						
					</table>
				</div>
			</td>
		</tr>
	</table>
</body>

</html>














<!-- <script id="shader-fs" type="x-shader/x-fragment"></script> -->

<!-- <script id="shader-vs" type="x-shader/x-vertex"></script> -->





<!-- <script id="basicShader-fs" type="x-shader/x-fragment"></script> -->

<!-- <script id="basicShader-vs" type="x-shader/x-vertex"></script> -->




<script id="shader-fs" type="x-shader/x-fragment">


    #ifdef GL_ES
    precision highp float;
    #endif

	uniform mat4 uNormalMatrix;
    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;
	uniform mat4 uLightMatrix;
	uniform vec3 uAmbientColor;
	uniform vec3 uPointLightingLocation;
	uniform vec3 uDirectionalColor;
	uniform float uMaterialShininess;
	uniform vec3 uPointLightingSpecularColor;
	uniform sampler2D uSampler;
	uniform bool uUsarLuzEspecular;
	uniform bool uUsarLuz;
	
	varying vec3 vLighting;
	varying vec3 VertexNormal;
	varying vec4 vLightPosition;
    varying vec4 vColor;
	varying vec4 v_normal;
	varying vec2 vTextureCoord;
	varying vec3 vLightWeighting;
	varying vec4 vPosition;

    void main(void) 
	{
		
		vec4 vertexColor=vColor;
		
		vec3 lightWeighting=vec3(1.0, 1.0, 1.0);
		vec4 light_pos=uLightMatrix * vec4(uPointLightingLocation, 1.0);
		vec3 lightDirection = normalize(light_pos.xyz - vPosition.xyz);
		vec3 normal = normalize(v_normal.xyz);
		
		//Luz Difusa
		float nivel_difuso=0.0;
		float diffuseLightWeighting = max(dot(normal,lightDirection),nivel_difuso);
		//lightWeighting = uAmbientColor + uDirectionalColor * diffuseLightWeighting;

		//Luz Especular
		float specularLightWeighting = 0.0;
		vec3 eyeDirection = normalize(-vPosition.xyz);
		vec3 reflectionDirection = reflect(-lightDirection, normal);
		specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), uMaterialShininess);

		vec4 fragmentColor;

		if(uUsarLuz)
		{
			if(uUsarLuzEspecular)
			{
				lightWeighting = uAmbientColor + uPointLightingSpecularColor * specularLightWeighting + uDirectionalColor * diffuseLightWeighting;
			}
			else
			{
				lightWeighting = uAmbientColor + uDirectionalColor * diffuseLightWeighting;
			}

			vec4 fragmentColor;
			fragmentColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));
		
			float alpha=1.0;
			gl_FragColor = vec4(fragmentColor.rgb * lightWeighting, fragmentColor.a);
		}
		else
		{
			
			fragmentColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));
			gl_FragColor = vec4(fragmentColor.rgb * lightWeighting, fragmentColor.a);
		}

		

    }	
	

	
</script>

<script id="shader-vs" type="x-shader/x-vertex">



    #ifdef GL_ES
    precision highp float;
    #endif

    attribute vec3 aVertexPosition;
    attribute vec4 aVertexColor;
	attribute vec3 aVertexNormal;
	attribute vec2 aVertexTexture;
	
	uniform mat4 uNormalMatrix;
    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;
	uniform mat4 uLightMatrix;
	uniform vec3 uAmbientColor;
	uniform vec3 uPointLightingLocation;
	uniform vec3 uDirectionalColor;
	uniform float uMaterialShininess;
	uniform vec3 uPointLightingSpecularColor;
	uniform bool uUsarLuzEspecular;
	uniform bool uUsarLuz;

	varying vec4 vColor;
	varying vec4 v_normal;
	varying vec2 vTextureCoord;
	varying vec3 vLightWeighting;
	varying vec4 vPosition;
	varying vec3 VertexNormal;
	varying vec3 vLighting;
	varying vec4 vLightPosition;

    void main(void) 
	{
		VertexNormal=aVertexNormal;
		vPosition = uMVMatrix * vec4(aVertexPosition, 1.0);
		v_normal = uNormalMatrix * vec4(aVertexNormal, 1.0);
		vTextureCoord = aVertexTexture;
        vColor = aVertexColor;
		vLightPosition = uPMatrix * uMVMatrix * vec4(vLightPosition);
		gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
		
    }



</script>





<script id="basicShader-fs" type="x-shader/x-fragment">
    #ifdef GL_ES
    precision highp float;
    #endif

    varying highp vec4 vColor;
	varying highp vec4 v_normal;
	varying vec2 vTextureCoord;
	varying vec3 vLightWeighting;
	varying vec4 vPosition;
	varying highp vec3 vLighting;
	
	uniform mat4 uNormalMatrix;
    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;
	uniform mat4 uLightMatrix;
	uniform vec3 uAmbientColor;
	uniform vec3 uPointLightingLocation;
	uniform vec3 uDirectionalColor;
	uniform float uMaterialShininess;
	uniform vec3 uPointLightingSpecularColor;
	uniform sampler2D uSampler;
	uniform bool uUsarLuzEspecular;
	uniform bool uUsarLuz;

    void main(void) 
	{
		
		gl_FragColor=vColor;
      	
    }
	
</script>

<script id="basicShader-vs" type="x-shader/x-vertex">
    attribute vec3 aVertexPosition;
    attribute vec4 aVertexColor;
	attribute vec3 aVertexNormal;
	attribute vec2 aVertexTexture;
	
	uniform mat4 uNormalMatrix;
    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;
	uniform mat4 uLightMatrix;
	uniform vec3 uAmbientColor;
	uniform vec3 uPointLightingLocation;
	uniform vec3 uDirectionalColor;
	uniform float uMaterialShininess;
	uniform vec3 uPointLightingSpecularColor;
	uniform bool uUsarLuzEspecular;
	uniform bool uUsarLuz;



	varying highp vec4 vColor;
	varying highp vec4 v_normal;
	varying highp vec2 vTextureCoord;
	varying vec3 vLightWeighting;
	varying vec4 vPosition;
	
	 varying highp vec3 vLighting;
    void main(void) 
	{
		vPosition = uMVMatrix * vec4(aVertexPosition, 1.0);
		gl_Position = uPMatrix * vPosition;
		
		vTextureCoord = aVertexTexture;
        vColor = aVertexColor;
	    v_normal = uNormalMatrix * vec4(aVertexNormal, 1.0);
		
    }
</script>


 

