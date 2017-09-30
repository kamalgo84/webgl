var columnaVertexPositionBuffer;
var columnaVertexColorBuffer;
var columnaVertexNormalBuffer;
var columnaVertexTexturasBuffer;
var stoneTexture;

function crear_columna(gl)
{

	columnaVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, columnaVertexPositionBuffer);
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(columna_vertices), gl.STATIC_DRAW);
    columnaVertexPositionBuffer.itemSize = 3;
    columnaVertexPositionBuffer.numItems = parseInt(columna_vertices.length/3);


	columnaVertexNormalBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, columnaVertexNormalBuffer);

	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(columna_normales), gl.STATIC_DRAW);
    columnaVertexNormalBuffer.itemSize = 3;
    columnaVertexNormalBuffer.numItems = columna_normales.length/3;
	

	columnaVertexTexturasBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, columnaVertexTexturasBuffer);

	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(columna_Textura), gl.STATIC_DRAW);
    columnaVertexTexturasBuffer.itemSize = 3;
    columnaVertexTexturasBuffer.numItems = columna_Textura.length/3;
	
	
	columnaVertexColorBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, columnaVertexColorBuffer);
		
		
	var colors =[];
	
	for(var i=0; i < parseInt(columna_vertices.length/3); i++)
	{
		colors.push(0.3);
		colors.push(0.5);
		colors.push(0.8);
		colors.push(0.5);
	}
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    columnaVertexColorBuffer.itemSize = 4;
    columnaVertexColorBuffer.numItems = colors.length/4;
	
	stoneTexture = new Array();
	var image = new Image();
	
	for (var i=0; i < 3; i++) {
      var texture = gl.createTexture();
      texture.image = image;
      stoneTexture.push(texture);
    }
	
	image.onload = function() {
		handleLoadedTexture(stoneTexture);
    }
	
	image.src = "estaticos/img/app_basic/stone.jpg";
	
	
}

function dibujarcolumna(gl)
{

	

	gl.bindBuffer(gl.ARRAY_BUFFER, columnaVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, columnaVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, columnaVertexNormalBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, columnaVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);
	 gl.bindBuffer(gl.ARRAY_BUFFER, columnaVertexTexturasBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexTextureAttribute, columnaVertexTexturasBuffer.itemSize, gl.FLOAT, false, 0, 0);
		
	gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, stoneTexture[modoFiltroTextura]);
    gl.uniform1i(shaderProgram.samplerUniform, 0);
	
	setMatrixUniforms(shaderProgram,true);
    gl.drawArrays(gl.TRIANGLES, 0, columnaVertexPositionBuffer.numItems);
	
}