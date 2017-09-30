var ejes_verticesX;
var ejes_coloresX;
var ejes_texturasX;
var ejes_normalesX;

var ejes_verticesY;
var ejes_coloresY;
var ejes_texturasY;
var ejes_normalesY;

var ejes_verticesZ;
var ejes_coloresZ;
var ejes_texturasZ;
var ejes_normalesZ;

var texturas=[];
var vertices=[];
var colors=[];
var normales=[];

function crear_Ejes(gl)
{

//Eje X

//Texturas
	ejes_texturasX = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, ejes_texturasX);
	
	texturas = [
				0.0, 0.0, 0.0,
				0.0, 0.0, 0.0
				];
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texturas), gl.STATIC_DRAW);
    ejes_texturasX.itemSize = 3;
    ejes_texturasX.numItems = 2;

//Vertices
	ejes_verticesX = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, ejes_verticesX);
		
		
		
	vertices = [
				100.0,  0.0,  0.0,
				-100.0, 0.0,  0.0
				];

		
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    ejes_verticesX.itemSize = 3;
    ejes_verticesX.numItems = 2;

	
//Colores
	ejes_coloresX = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, ejes_coloresX);
		
		
	colors =[
			1.0, 0.0,  0.0, 1.0,
		    1.0, 0.0,  0.0, 1.0
			];
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    ejes_coloresX.itemSize = 4;
    ejes_coloresX.numItems = 2;
	
//Normales	
	ejes_normalesX = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, ejes_normalesX);
	normales =[
				1.0, 1.0,  1.0,
		    	1.0, 1.0,  1.0
				];
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normales), gl.STATIC_DRAW);
    ejes_normalesX.itemSize = 3;
    ejes_normalesX.numItems = 2;
	
//Eje Y

//Texturas

	ejes_texturasY = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, ejes_texturasY);
	
	texturas = [
				0.0, 0.0, 0.0,
				0.0, 0.0, 0.0
				];
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texturas), gl.STATIC_DRAW);
    ejes_texturasY.itemSize = 3;
    ejes_texturasY.numItems = 2;

//Vertices
	ejes_verticesY = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, ejes_verticesY);
		
		
		
	vertices = [
				0.0,  100.0,  0.0,
				0.0, -100.0,  0.0
				];

		
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    ejes_verticesY.itemSize = 3;
    ejes_verticesY.numItems = 2;

	
//Colores
	ejes_coloresY = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, ejes_coloresY);
		
		
	var colors =[
				0.0, 1.0,  0.0, 1.0,
		    	0.0, 1.0,  0.0, 1.0
				];
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    ejes_coloresY.itemSize = 4;
    ejes_coloresY.numItems = 2;
	
//Normales	
	ejes_normalesY = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, ejes_normalesY);
	var normales =[
				  1.0, 1.0,  1.0,
		    	  1.0, 1.0,  1.0
				  ];
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normales), gl.STATIC_DRAW);
    ejes_normalesY.itemSize = 3;
    ejes_normalesY.numItems = 2;
		
//Eje Z

//Texturas

	ejes_texturasZ = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, ejes_texturasZ);
	
	texturas = [
					0.0, 0.0, 0.0,
					0.0, 0.0, 0.0
					];
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texturas), gl.STATIC_DRAW);
    ejes_texturasZ.itemSize = 3;
    ejes_texturasZ.numItems = 2;

//Vertices
	ejes_verticesZ = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, ejes_verticesZ);
		
		
		
	vertices = [
				0.0,  0.0,  100.0,
				0.0, 0.0,  -100.0
				];

		
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    ejes_verticesZ.itemSize = 3;
    ejes_verticesZ.numItems = 2;

	
//Colores
	ejes_coloresZ = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, ejes_coloresZ);
		
		
	var colors =[
				0.0, 0.0,  1.0, 1.0,
		    	0.0, 0.0,  1.0, 1.0
				];
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    ejes_coloresZ.itemSize = 4;
    ejes_coloresZ.numItems = 2;
	
//Normales	
	ejes_normalesZ = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, ejes_normalesZ);
	var normales =[
				 1.0, 1.0,  1.0,
		    	 1.0, 1.0,  1.0
				 ];
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normales), gl.STATIC_DRAW);
    ejes_normalesZ.itemSize = 3;
    ejes_normalesZ.numItems = 2;
}

function dibujarEjes(gl)
{


	gl.bindBuffer(gl.ARRAY_BUFFER, ejes_verticesX);
    gl.vertexAttribPointer(basicShaderProgram.vertexPositionAttribute, ejes_verticesX.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, ejes_coloresX);
    gl.vertexAttribPointer(basicShaderProgram.vertexColorAttribute, ejes_coloresX.itemSize, gl.FLOAT, false, 0, 0);
	gl.bindBuffer(gl.ARRAY_BUFFER, ejes_normalesX);
    gl.vertexAttribPointer(basicShaderProgram.vertexNormalAttribute, ejes_normalesX.itemSize, gl.FLOAT, false, 0, 0);
	gl.bindBuffer(gl.ARRAY_BUFFER, ejes_texturasX);
    gl.vertexAttribPointer(basicShaderProgram.vertexTextureAttribute, ejes_texturasX.itemSize, gl.FLOAT, false, 0, 0);
	
	gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, redTexture);
    gl.uniform1i(basicShaderProgram.samplerUniform, 0);
		
	setMatrixUniforms(basicShaderProgram);
    gl.drawArrays(gl.LINES, 0, ejes_verticesX.numItems);  
	
	
	
	gl.bindBuffer(gl.ARRAY_BUFFER, ejes_verticesY);
    gl.vertexAttribPointer(basicShaderProgram.vertexPositionAttribute, ejes_verticesY.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, ejes_coloresY);
    gl.vertexAttribPointer(basicShaderProgram.vertexColorAttribute, ejes_coloresY.itemSize, gl.FLOAT, false, 0, 0);
	gl.bindBuffer(gl.ARRAY_BUFFER, ejes_normalesY);
    gl.vertexAttribPointer(basicShaderProgram.vertexNormalAttribute, ejes_normalesY.itemSize, gl.FLOAT, false, 0, 0);
	gl.bindBuffer(gl.ARRAY_BUFFER, ejes_texturasY);
    gl.vertexAttribPointer(basicShaderProgram.vertexTextureAttribute, ejes_texturasY.itemSize, gl.FLOAT, false, 0, 0);
	
	gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, greenTexture);
    gl.uniform1i(basicShaderProgram.samplerUniform, 0);
		
	setMatrixUniforms(basicShaderProgram);
    gl.drawArrays(gl.LINES, 0, ejes_verticesY.numItems); 
	
	
	gl.bindBuffer(gl.ARRAY_BUFFER, ejes_verticesZ);
    gl.vertexAttribPointer(basicShaderProgram.vertexPositionAttribute, ejes_verticesZ.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, ejes_coloresZ);
    gl.vertexAttribPointer(basicShaderProgram.vertexColorAttribute, ejes_coloresZ.itemSize, gl.FLOAT, false, 0, 0);
	gl.bindBuffer(gl.ARRAY_BUFFER, ejes_normalesZ);
    gl.vertexAttribPointer(basicShaderProgram.vertexNormalAttribute, ejes_normalesZ.itemSize, gl.FLOAT, false, 0, 0);
	gl.bindBuffer(gl.ARRAY_BUFFER, ejes_texturasZ);
    gl.vertexAttribPointer(basicShaderProgram.vertexTextureAttribute, ejes_texturasZ.itemSize, gl.FLOAT, false, 0, 0);
	
	gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, blueTexture);
    gl.uniform1i(basicShaderProgram.samplerUniform, 0);
		
	setMatrixUniforms(basicShaderProgram);
    gl.drawArrays(gl.LINES, 0, ejes_verticesZ.numItems); 
	
	
}