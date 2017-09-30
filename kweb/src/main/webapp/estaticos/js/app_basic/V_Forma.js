var formaVertexPositionBuffer;
var formaVertexColorBuffer;
var formaVertexNormalBuffer;
var formaVertexTexturasBuffer;
var darkTexture;

function crear_Forma(gl)
{

//Vertices

	formaVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, formaVertexPositionBuffer);
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(forma_vertices), gl.STATIC_DRAW);
    formaVertexPositionBuffer.itemSize = 3;
    formaVertexPositionBuffer.numItems = parseInt(forma_vertices.length/3);

	
//Colores
	formaVertexColorBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, formaVertexColorBuffer);
		
		
	var colors =[];
	
	for(var i=0; i < parseInt(forma_vertices.length/3); i++)
	{
		colors.push(0.3);
		colors.push(0.5);
		colors.push(0.8);
		colors.push(1.0);
	}
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    formaVertexColorBuffer.itemSize = 4;
    formaVertexColorBuffer.numItems = colors.length/4;
	
//Normales
	formaVertexNormalBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, formaVertexNormalBuffer);

	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(forma_normales), gl.STATIC_DRAW);
    formaVertexNormalBuffer.itemSize = 3;
    formaVertexNormalBuffer.numItems = forma_normales.length/3;
	
//Texturas 
	formaVertexTexturasBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, formaVertexTexturasBuffer);

	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(forma_Textura), gl.STATIC_DRAW);
    formaVertexTexturasBuffer.itemSize = 3;
    formaVertexTexturasBuffer.numItems = forma_Textura.length/3;
	
	darkTexture = new Array();
	var image = new Image();
	
	for (var i=0; i < 3; i++) {
      var texture = gl.createTexture();
      texture.image = image;
      darkTexture.push(texture);
    }
	
	image.onload = function() {
		handleLoadedTexture(darkTexture);
    }
	
	image.src = "estaticos/img/app_basic/earth.jpg";
	
	
}

function dibujarForma(gl)
{


	gl.bindBuffer(gl.ARRAY_BUFFER, formaVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, formaVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, formaVertexColorBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, formaVertexColorBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, formaVertexNormalBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, formaVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);
	gl.bindBuffer(gl.ARRAY_BUFFER, formaVertexTexturasBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexTextureAttribute, formaVertexTexturasBuffer.itemSize, gl.FLOAT, false, 0, 0);
		
	gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, darkTexture[modoFiltroTextura]);
    gl.uniform1i(shaderProgram.samplerUniform, 0);
	
	setMatrixUniforms(shaderProgram,false);

    gl.drawArrays(gl.TRIANGLES, 0, formaVertexPositionBuffer.numItems);  
	
	
	
	
}