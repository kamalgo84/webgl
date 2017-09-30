var cajaVertexPositionBuffer;
var cajaVertexColorBuffer;
var cajaVertexNormalBuffer;
var cajaVertexTexturasBuffer;
var sueloTexture;

function crear_caja(gl)
{

	cajaVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, cajaVertexPositionBuffer);
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(caja_vertices), gl.STATIC_DRAW);
    cajaVertexPositionBuffer.itemSize = 3;
    cajaVertexPositionBuffer.numItems = parseInt(caja_vertices.length/3);


	cajaVertexNormalBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, cajaVertexNormalBuffer);

	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(caja_normales), gl.STATIC_DRAW);
    cajaVertexNormalBuffer.itemSize = 3;
    cajaVertexNormalBuffer.numItems = caja_normales.length/3;
	

	cajaVertexTexturasBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, cajaVertexTexturasBuffer);

	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(caja_Textura), gl.STATIC_DRAW);
    cajaVertexTexturasBuffer.itemSize = 3;
    cajaVertexTexturasBuffer.numItems = caja_Textura.length/3;
	
	//Colores
	cajaVertexColorBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, cajaVertexColorBuffer);
		
		
	var colors =[];
	
	for(var i=0; i < parseInt(caja_vertices.length/3); i++)
	{
		colors.push(0.3);
		colors.push(0.5);
		colors.push(0.8);
		colors.push(1.0);
	}
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    cajaVertexColorBuffer.itemSize = 4;
    cajaVertexColorBuffer.numItems = colors.length/4;
	
	sueloTexture = new Array();
	var image = new Image();
	
	for (var i=0; i < 3; i++) {
      var texture = gl.createTexture();
      texture.image = image;
      sueloTexture.push(texture);
    }
	
	image.onload = function() {
		handleLoadedTexture(sueloTexture);
    }
	
	
	image.src = "estaticos/img/app_basic/suelo.jpg";
	
	
}

function dibujarcaja(gl)
{

	

	gl.bindBuffer(gl.ARRAY_BUFFER, cajaVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cajaVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, cajaVertexNormalBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, cajaVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, cajaVertexTexturasBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexTextureAttribute, cajaVertexTexturasBuffer.itemSize, gl.FLOAT, false, 0, 0);
		
	gl.bindBuffer(gl.ARRAY_BUFFER, cajaVertexColorBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, cajaVertexColorBuffer.itemSize, gl.FLOAT, false, 0, 0);
	
		
	gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, sueloTexture[modoFiltroTextura]);
    gl.uniform1i(shaderProgram.samplerUniform, 0);
	
    setMatrixUniforms(shaderProgram,true);
    gl.drawArrays(gl.TRIANGLES, 0, cajaVertexPositionBuffer.numItems);
	
}