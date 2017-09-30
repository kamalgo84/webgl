// var darkTexture;
var whiteTexture;
var redTexture;
var blueTexture;
var greenTexture;
var stoneTexture;
var i=0;
function initTexture() {
   	
	whiteTexture = gl.createTexture();
    whiteTexture.image = new Image();
    whiteTexture.image.onload = function() {
        handleLoadedTextureBasic(whiteTexture);
    }
    whiteTexture.image.src = "estaticos/img/app_basic/white.png";
	
	redTexture = gl.createTexture();
    redTexture.image = new Image();
    redTexture.image.onload = function() {
        handleLoadedTextureBasic(redTexture);
    }
    redTexture.image.src = "estaticos/img/app_basic/red.png";
	
	blueTexture = gl.createTexture();
    blueTexture.image = new Image();
    blueTexture.image.onload = function() {
        handleLoadedTextureBasic(blueTexture);
    }
    blueTexture.image.src = "estaticos/img/app_basic/blue.jpg";
	
	greenTexture = gl.createTexture();
    greenTexture.image = new Image();
    greenTexture.image.onload = function() {
        handleLoadedTextureBasic(greenTexture);
    }
    greenTexture.image.src = "estaticos/img/app_basic/green.png";
}

function handleLoadedTexture(textures) {

	// gl.bindTexture(gl.TEXTURE_2D, texture);
    // gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
    // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    // gl.bindTexture(gl.TEXTURE_2D, null);
	
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

    gl.bindTexture(gl.TEXTURE_2D, textures[0]);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textures[0].image);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);

    gl.bindTexture(gl.TEXTURE_2D, textures[1]);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textures[1].image);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

    gl.bindTexture(gl.TEXTURE_2D, textures[2]);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textures[2].image);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
    gl.generateMipmap(gl.TEXTURE_2D);

    gl.bindTexture(gl.TEXTURE_2D, null);
	
	
   
  }
  
  function handleLoadedTextureBasic(textures) {

	// gl.bindTexture(gl.TEXTURE_2D, texture);
    // gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
    // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    // gl.bindTexture(gl.TEXTURE_2D, null);

	
   
  }