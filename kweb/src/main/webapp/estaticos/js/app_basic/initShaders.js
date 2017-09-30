var basicShaderProgram;
var shaderProgram;
var mvMatrixStack = [];
var mvMatrixStackN = [];
var shaders;

function initShaders() 
{
//	 $.getJSON("estaticos/json/prueba.json",function(result)
//			 {
//		 		alert(K_JSON_stringify(result)+"//**************************//");
//		 		
//			 });
	
    var fragmentShader = getShader(gl, "shader-fs");
    var vertexShader = getShader(gl, "shader-vs");

    shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert("No pueden iniciarse shaderProgram");
    }
	
	
	
	fragmentShader = getShader(gl, "basicShader-fs");
    vertexShader = getShader(gl, "basicShader-vs");

    basicShaderProgram = gl.createProgram();
    gl.attachShader(basicShaderProgram, vertexShader);
    gl.attachShader(basicShaderProgram, fragmentShader);
    gl.linkProgram(basicShaderProgram);
    
    if (!gl.getProgramParameter(basicShaderProgram, gl.LINK_STATUS)) {
        alert("No pueden iniciarse el basicShaderProgram");
    }
    


   
	
	if (!gl.getProgramParameter(basicShaderProgram, gl.LINK_STATUS)) {
        alert("No pueden iniciarse el RotationshaderProgram");
    }

	inicializarShader(shaderProgram);
	inicializarShader(basicShaderProgram);
   


	
	
	
	
}



function setMatrixUniforms(shader,rotacionLight) 
{
	
	gl.uniform3f(shader.ambientColorUniform,colorAmbiental[0],colorAmbiental[1],colorAmbiental[2]);
	gl.uniform3f(shader.pointLightingLocationUniform,lightPos[0],lightPos[1],lightPos[2]);
	gl.uniform1f(shader.materialShininessUniform, parseFloat(brilloEspecular));
	gl.uniform3f(shader.pointLightingSpecularColorUniform,colorEspecular[0],colorEspecular[1],colorEspecular[2]);
	
	var lightingDirection = [parseFloat("-90.0"),parseFloat("-40.0"),parseFloat("80.0")];
    var adjustedLD = vec3.create();
    vec3.normalize(lightingDirection, adjustedLD);
    vec3.scale(adjustedLD, -1);
    gl.uniform3fv(shader.lightingDirectionUniform, adjustedLD);
	gl.uniform3f(shader.directionalColorUniform,colorDifuso[0],colorDifuso[1],colorDifuso[2]);
	gl.uniform1i(shader.samplerUniform, 0);
	
	
	
	
	gl.uniform1i(shader.luzespecularActAttribute, $('#activarLuzEspecular').is(':checked'));
	gl.uniform1i(shader.luzActAttribute, $('#activarLuz').is(':checked'));
	
	
	normalMatrix = mat4.create();
	mat4.inverse(mvMatrix, normalMatrix);
	mat4.transpose(normalMatrix);
	gl.uniformMatrix4fv(shader.normalMatrixUniform, false, normalMatrix);
	
	if(rotacionLight)
	{
		lightMvMatrix = mat4.create();
		mat4.set(mvMatrix, lightMvMatrix);
	}
	
    gl.uniformMatrix4fv(shader.pMatrixUniform, false, pMatrix);
    gl.uniformMatrix4fv(shader.mvMatrixUniform, false, mvMatrix);
    gl.uniformMatrix4fv(shader.lightMatrixUniform, false, lightMvMatrix);
    
	
	
	
}

function getShaders(gl, shadersJSON) 
{
    var shaderScript = document.getElementById(id);
    if (!shaderScript) 
	{
        return null;
    }

    var str = "";
    var k = shaderScript.firstChild;
    while (k) 
	{
        if (k.nodeType == 3) {
            str += k.textContent;
        }
        k = k.nextSibling;
    }

    var shader;
    if (shaderScript.type == "x-shader/x-fragment") 
	{
        shader = gl.createShader(gl.FRAGMENT_SHADER);
    } 
	else if (shaderScript.type == "x-shader/x-vertex") 
	{
        shader = gl.createShader(gl.VERTEX_SHADER);
    } 
	else 
	{
        return null;
    }

    gl.shaderSource(shader, str);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) 
	{
        alert(gl.getShaderInfoLog(shader));
        return null;
    }

    return shader;
}


function getShader(gl, id) 
{
    var shaderScript = document.getElementById(id);
    if (!shaderScript) 
	{
        return null;
    }

    var str = "";
    var k = shaderScript.firstChild;
    while (k) 
	{
        if (k.nodeType == 3) {
            str += k.textContent;
        }
        k = k.nextSibling;
    }

    var shader;
    if (shaderScript.type == "x-shader/x-fragment") 
	{
        shader = gl.createShader(gl.FRAGMENT_SHADER);
    } 
	else if (shaderScript.type == "x-shader/x-vertex") 
	{
        shader = gl.createShader(gl.VERTEX_SHADER);
    } 
	else 
	{
        return null;
    }

    gl.shaderSource(shader, str);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) 
	{
        alert(gl.getShaderInfoLog(shader));
        return null;
    }

    return shader;
}


function mvPushMatrix() {
    var copy = mat4.create();
    mat4.set(mvMatrix, copy);
    mvMatrixStack.push(copy);
}
function normalPushMatrix() {
	var copyN = mat4.create();
	mat4.set(normalMatrix, copyN);
	mvMatrixStackN.push(copyN);
}

function mvPopMatrix() {
    if (mvMatrixStack.length == 0) {
        throw "Invalid popMatrix!";
    }
    mvMatrix = mvMatrixStack.pop();
}

function normalPopMatrix() {
	
	if (mvMatrixStackN.length == 0) {
        throw "Invalid popMatrix!";
    }
    normalMatrix = mvMatrixStackN.pop();
}

function inicializarShader(shader) {
	
	// if($('#activarLuzEspecular').is(':checked'))
	shader.luzespecularActAttribute = gl.getUniformLocation(shader, "uUsarLuzEspecular");
	shader.luzActAttribute = gl.getUniformLocation(shader, "uUsarLuz");
	
    shader.vertexPositionAttribute = gl.getAttribLocation(shader, "aVertexPosition");
    gl.enableVertexAttribArray(shader.vertexPositionAttribute);

	shader.vertexColorAttribute = gl.getAttribLocation(shader, "aVertexColor");
    gl.enableVertexAttribArray(shader.vertexColorAttribute);
	
	shader.vertexNormalAttribute = gl.getAttribLocation(shader, "aVertexNormal");
	gl.enableVertexAttribArray(shader.vertexNormalAttribute);
	
	shader.vertexTextureAttribute = gl.getAttribLocation(shader, "aVertexTexture");
	gl.enableVertexAttribArray(shader.vertexTextureAttribute);
	
	shader.materialShininessUniform = gl.getUniformLocation(shader, "uMaterialShininess");
	shader.pointLightingSpecularColorUniform = gl.getUniformLocation(shader, "uPointLightingSpecularColor");

    shader.pMatrixUniform = gl.getUniformLocation(shader, "uPMatrix");
    shader.mvMatrixUniform = gl.getUniformLocation(shader, "uMVMatrix");
	shader.normalMatrixUniform = gl.getUniformLocation(shader, "uNormalMatrix");
	shader.lightMatrixUniform = gl.getUniformLocation(shader, "uLightMatrix");
	
	
	shader.samplerUniform = gl.getUniformLocation(shader, "uSampler");
	
	shader.ambientColorUniform = gl.getUniformLocation(shader, "uAmbientColor");
    shader.lightingDirectionUniform = gl.getUniformLocation(shader, "uLightingDirection");
    shader.directionalColorUniform = gl.getUniformLocation(shader, "uDirectionalColor");
	
	shader.pointLightingLocationUniform = gl.getUniformLocation(shader, "uPointLightingLocation");
}