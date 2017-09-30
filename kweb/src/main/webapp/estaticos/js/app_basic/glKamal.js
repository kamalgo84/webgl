
var gl;
	
var camPos=[-5.1,-0.6,-8.3];
var lightPos=[-0.8,0.5,1.9];
var colorAmbiental=[parseFloat(0.11), parseFloat(0.11), parseFloat(0.11)];
var colorAmbientalBack=new Array();
var colorDifuso=[parseFloat(0.8), parseFloat(0.8), parseFloat(0.8)];
var colorDifusoBack=new Array();
var colorEspecular=[parseFloat(0.9), parseFloat(0.9), parseFloat(0.9)];
var colorEspecularBack=new Array();
var camRot=[0.0,0.94,0.0];
var vec_x=[0.0,0.0,0.0];
var vec_y=[0.0,0.0,0.0];
var vec_z=[0.0,0.0,0.0];
var brilloEspecular=parseFloat("30.0");
var rot=0;
var rot2=0;
var anguloPerspectiva=parseInt("45");
var modoFiltroTextura=parseInt("2");

var lightMvMatrix = mat4.create();
var mvMatrix = mat4.create();
var pMatrix = mat4.create();
var normalMatrix = mat4.create();


function initGL(canvas) 
{
    try 
	{
        gl = canvas.getContext("experimental-webgl");
        gl.viewportWidth = canvas.width;
        gl.viewportHeight = canvas.height;	
    } 
	catch (e) 
	{
		console.log("ERROR - Ha ocurrido un error al iniciar el contexto GL: "+e);
    }
    if (!gl) 
	{
        alert("No puede iniciarse webGL en este navegador");
    }
}


function initBuffers() 
{		
	crear_Ejes(gl);
	crear_Planoref(gl);
	
	crear_piramide(gl);
	initTexture();
	
	crear_Forma(gl);
	
	crear_columna(gl);
	
	crear_caja(gl);
}


function drawScene() 
{
	establecerValores();
	
	 gl.useProgram(shaderProgram);
	

    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
	gl.depthRange(0,1);
	gl.enable(gl.DEPTH_TEST);
	gl.depthFunc(gl.LESS);
	
	
//BLENDING	
	// gl.enable(gl.BLEND);
	// gl.blendEquation(gl.FUNC_ADD);
//FUNC_ADD, FUNC_SUBTRACT,FUNC_REVERSE_SUBTRACT
	
	// gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
//ZERO, ONE, [ONE_MINUS_]SRC_COLOR,
//[ONE_MINUS_]DST_COLOR, [ONE_MINUS_]SRC_ALPHA,
//[ONE_MINUS_]DST_ALPHA, [ONE_MINUS_]CONSTANT_COLOR,
//[ONE_MINUS_]CONSTANT_ALPHA
	
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	
	mat4.perspective(anguloPerspectiva, gl.viewportWidth / gl.viewportHeight, 0.01, 1000.0, pMatrix);

	
    mat4.identity(mvMatrix);		
	mat4.identity(normalMatrix);
	
	rot=parseFloat(rot)+0.005;

	
	ejes_vec(camRot);
	mat4.rotate(mvMatrix,(2*Math.PI) - camRot[1], [vec_y[0], vec_y[1], 0.0]);
	mat4.rotate(mvMatrix,(2*Math.PI) - camRot[0], [vec_x[0],0.0,vec_x[2]]);
	mat4.translate(mvMatrix, [camPos[0], camPos[1], camPos[2]]);

	
		gl.useProgram(shaderProgram);
		dibujarcaja(gl);
		dibujarcolumna(gl);
	

	mvPushMatrix();

		gl.useProgram(basicShaderProgram);
		mat4.translate(mvMatrix, [lightPos[0], lightPos[1], lightPos[2]]);
		dibujarPiramide(gl);
	
	mvPopMatrix();
	
	if($('#mostrarEjes').is(':checked'))
	{
		mvPushMatrix();
		
			gl.useProgram(basicShaderProgram);
			mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
			dibujarEjes(gl);
			dibujarPlanoRef(gl);
		
		mvPopMatrix();
	}
	

	mvPushMatrix();
	
	 	gl.useProgram(shaderProgram);
		mat4.rotate(mvMatrix,rot, [0.0, 1.0, 0.0]);
		mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		dibujarForma(gl);

	mvPopMatrix();
	
}



function webGLStart() 
{
	var canvas = document.getElementById("canvas");
    initGL(canvas);
    initShaders();
    initBuffers();
	

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);

	setInterval(drawScene, 15);

}