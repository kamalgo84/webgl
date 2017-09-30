var piramide_vertices;
var piramide_colores;
var piramid_normales;
var piramid_texturas;

function crear_piramide(gl)
{
	piramid_texturas = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, piramid_texturas);
	
	var	texturas = [
					0.5000, 1.0000, 0.0000,
					0.0000, 0.0000, 0.0000,
					1.0000, 0.0000, 0.0000,
					0.5000, 1.0000, 0.0000,
					0.0000, 0.0000, 0.0000,
					1.0000, 0.0000, 0.0000,
					0.5000, 1.0000, 0.0000,
					0.0000, 0.0000, 0.0000,
					1.0000, 0.0000, 0.0000,
					0.5000, 1.0000, 0.0000,
					0.0000, 0.0000, 0.0000,
					1.0000, 0.0000, 0.0000
					];
					
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texturas), gl.STATIC_DRAW);
	piramid_texturas.itemSize = 3;
    piramid_texturas.numItems = 12;

	piramide_vertices = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, piramide_vertices);
	
	var	vertices = [
					// -2.0,  0.0,  -2.0,
					 // 2.0, 0.0,  -2.0,
					// 0.0, 3.0,  0.0,
					
					// -2.0,  0.0,  2.0,
					 // 2.0, 0.0,   2.0,
					// 0.0, 3.0,  0.0,
					
					// 2.0,  0.0,  -2.0,
					// 2.0, 0.0,  2.0,
					// 0.0, 3.0,  0.0,
					
					// -2.0,  0.0,  -2.0,
					// -2.0, 0.0,  2.0,
					// 0.0, 3.0,  0.0
					
					
					// 0.2505, 3.0050, 0.0998,
					// -1.7495, 0.0050, 2.0998,
					// 2.2505, 0.0050, 2.0998,
					
					// 0.2505, 3.0050, 0.0998,
					// 2.2505, 0.0050, 2.0998,
					// 2.2505, 0.0050, -1.9002,
					
					// 0.2505, 3.0050, 0.0998,
					// 2.2505, 0.0050, -1.9002,
					// -1.7495, 0.0050, -1.9002,
					
					// 0.2505, 3.0050, 0.0998,
					// -1.7495, 0.0050, -1.9002,
					// -1.7495, 0.0050, 2.0998
					
					0.0, 0.5, 0.0,
					-0.2, 0.0, 0.2,
					0.2, 0.0, 0.2,
					
					0.0, 0.5, 0.0,
					0.2, 0.0, 0.2,
					0.2, 0.0, -0.2,
					
					0.0, 0.5, 0.0,
					0.2, 0.0, -0.2,
					-0.2, 0.0, -0.2,
					
					0.0, 0.5, 0.0,
					-0.2, 0.0, -0.2,
					-0.2, 0.0, 0.2
					
					];

	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	piramide_vertices.itemSize = 3;
    piramide_vertices.numItems = 12;
	
	piramide_colores = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, piramide_colores);
		
		
	var colors =[
				 0.3, 0.3,  0.3, 0.0,
		    	 0.3, 0.3,  0.3, 0.0,
				 0.3, 0.3,  0.3, 0.0,
				 0.3, 0.3,  0.3, 0.0,
		    	 0.3, 0.3,  0.3, 0.0,
				 0.3, 0.3,  0.3, 0.0,
				 0.3, 0.3,  0.3, 0.0,
		    	 0.3, 0.3,  0.3, 0.0,
				 0.3, 0.3,  0.3, 0.0,
				 0.3, 0.3,  0.3, 0.0,
		    	 0.3, 0.3,  0.3, 0.0,
				 0.3, 0.3,  0.3, 0.0
				 ];
				 
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.DYNAMIC_DRAW);
    piramide_colores.itemSize = 4;
    piramide_colores.numItems = 12;
	
	
	
	
	 piramid_normales = gl.createBuffer();
	 gl.bindBuffer(gl.ARRAY_BUFFER, piramid_normales);
	
	var triangleNormals = [
							0.0000, 0.5547, 0.8321,
							0.0000, 0.5547, 0.8321,
							0.0000, 0.5547, 0.8321,
							0.8321, 0.5547, 0.0000,
							0.8321, 0.5547, 0.0000,
							0.8321, 0.5547, 0.0000,
							0.0000, 0.5547, -0.8321,
							0.0000, 0.5547, -0.8321,
							0.0000, 0.5547, -0.8321,
							-0.8321, 0.5547, 0.0000,
							-0.8321, 0.5547, 0.0000,
							-0.8321, 0.5547, 0.0000
							];
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleNormals), gl.STATIC_DRAW);
	piramid_normales.itemSize = 3;
    piramid_normales.numItems = 12;
	
	
	
	
}

function dibujarPiramide(gl)
{
	

	gl.bindBuffer(gl.ARRAY_BUFFER, piramide_vertices);
    gl.vertexAttribPointer(basicShaderProgram.vertexPositionAttribute, piramide_vertices.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, piramide_colores);
    gl.vertexAttribPointer(basicShaderProgram.vertexColorAttribute, piramide_colores.itemSize, gl.FLOAT, false, 0, 0);
	
	 gl.bindBuffer(gl.ARRAY_BUFFER, piramid_normales);
	 gl.vertexAttribPointer(basicShaderProgram.vertexNormalAttribute, piramid_normales.itemSize, gl.FLOAT, false, 0, 0);
	 
	 gl.bindBuffer(gl.ARRAY_BUFFER, piramid_texturas);
	 gl.vertexAttribPointer(basicShaderProgram.vertexTextureAttribute, piramid_texturas.itemSize, gl.FLOAT, false, 0, 0);
	 
	 // gl.activeTexture(gl.TEXTURE0);
    // gl.bindTexture(gl.TEXTURE_2D, blueTexture);
    // gl.uniform1i(shaderProgram.samplerUniform, 0);
		
	setMatrixUniforms(basicShaderProgram,true);
    gl.drawArrays(gl.LINES, 0, piramide_vertices.numItems);  
}