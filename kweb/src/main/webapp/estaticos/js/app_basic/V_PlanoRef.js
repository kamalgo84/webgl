
var planRef_vertices;
var planRef_colores;
var planRef_texturas;
var planRef_normales;
var num=50;
var	texturas=[];
var	vertices=[];
var	colors=[];
var	normales=[];

function crear_Planoref(gl)
{

	planRef_texturas = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, planRef_texturas);
	
	for(var i=0;i<num*8;i++)
	{
		texturas.push(0.0);
		texturas.push(0.0);
		texturas.push(0.0);
	}
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texturas), gl.STATIC_DRAW);
    planRef_texturas.itemSize = 3;
    planRef_texturas.numItems = num*8;

//Vertices
	planRef_vertices = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, planRef_vertices);
		

	var inc=0.5;
	var x=inc,y=25.0;
	for(var i=0;i<num;i++)
	{
		vertices.push(-1*x);vertices.push(0.0);vertices.push(-1*y);
		vertices.push(-1*x);vertices.push(0.0);vertices.push(y);
		
		vertices.push(x);vertices.push(0.0);vertices.push(-1*y);
		vertices.push(x);vertices.push(0.0);vertices.push(y);
		
		vertices.push(-1*y);vertices.push(0.0);vertices.push(-1*x);
		vertices.push(y);vertices.push(0.0);vertices.push(-1*x);			
		
		vertices.push(-1*y);vertices.push(0.0);vertices.push(x);
		vertices.push(y);vertices.push(0.0);vertices.push(x);
		
		x=x+inc;
	}	
		
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        planRef_vertices.itemSize = 3;
        planRef_vertices.numItems = num*8;

	
//Colores
	planRef_colores = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, planRef_colores);
	
	for(var i=0;i<num*8;i++)
	{
		colors.push(1.0);
		colors.push(1.0);
		colors.push(1.0);
		colors.push(1.0);
	}
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    planRef_colores.itemSize = 4;
    planRef_colores.numItems = num;
	
//Normales	
	planRef_normales = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, planRef_normales);
	
	for(var i=0;i<num*8;i++)
	{
		normales.push(1.0);
		normales.push(1.0);
		normales.push(1.0);
	}
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normales), gl.STATIC_DRAW);
    planRef_normales.itemSize = 3;
    planRef_normales.numItems = num*8;
		
	
}

function dibujarPlanoRef(gl)
{
	//mat4.rotate(mvMatrix,rot2, [0.0, 1.0, 0.0]);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, planRef_vertices);
    gl.vertexAttribPointer(basicShaderProgram.vertexPositionAttribute, planRef_vertices.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, planRef_colores);
    gl.vertexAttribPointer(basicShaderProgram.vertexColorAttribute, planRef_colores.itemSize, gl.FLOAT, false, 0, 0);
	gl.bindBuffer(gl.ARRAY_BUFFER, planRef_normales);
    gl.vertexAttribPointer(basicShaderProgram.vertexNormalAttribute, planRef_normales.itemSize, gl.FLOAT, false, 0, 0);
	gl.bindBuffer(gl.ARRAY_BUFFER, planRef_texturas);
    gl.vertexAttribPointer(basicShaderProgram.vertexTextureAttribute, planRef_texturas.itemSize, gl.FLOAT, false, 0, 0);
	
	gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, whiteTexture);
    gl.uniform1i(basicShaderProgram.samplerUniform, 0);
		
	setMatrixUniforms(basicShaderProgram);
    gl.drawArrays(gl.LINES, 0, planRef_vertices.numItems);  
	
	
}