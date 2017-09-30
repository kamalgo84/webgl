function ejes_vec(cam_rot)
{
	    var DEG2RAD = Math.PI / 180;
	    var sx, sy, sz, cx, cy, cz, theta;

	    theta = cam_rot[0];
	    sx = Math.sin(theta);
	    cx = Math.cos(theta);

	    theta = cam_rot[1];
	    sy = Math.sin(theta);
	    cy =  Math.cos(theta);

	    theta = cam_rot[2];
	    sz = Math.sin(theta);
	    cz = Math.cos(theta);

	    // determinar left axis
	    vec_x[0] = cy*cz;
	    vec_x[1] = sx*sy*cz + cx*sz;
	    vec_x[2] = -cx*sy*cz + sx*sz;

	    // determinar up axis
	    vec_y[0] = -cy*sz;
	    vec_y[1] = -sx*sy*sz + cx*cz;
	    vec_y[2] = cx*sy*sz + sx*cz;

	    // determinar forward axis
	    vec_z[0] = sy;
	    vec_z[1] = -sx*cy;
	    vec_z[2] = cx*cy;
}

function toRadians(angulo)
{
	 var rad =angulo * (Math.PI / 180 );
	 
	 return rad;
}

function floatToRGB(floatColor)
{
	var out=parseInt((parseFloat("255")/parseFloat("1.0")) * parseFloat(floatColor));
	return out;
}

function RGBToFloat(RGBColor)
{
	var out=parseFloat((parseFloat("1.0")/parseFloat("255")) * parseFloat(RGBColor));
	return out;
}

function formatRGBText(R,G,B)
{
	var Text=new Array();
	Text.push(RGBToFloat(R));
	Text.push(RGBToFloat(G));
	Text.push(RGBToFloat(B));
	
	return Text;

}
var K_JSON_stringify =function (obj) {

	var t = typeof (obj);
	if (t != "object" || obj === null) {

		// tipo de dato simple
		if (t == "string") obj = '"'+obj+'"';
		return String(obj);

	}
	else {

		// array de objects
		var n, v, json = [], arr = (obj && obj.constructor == Array);

		for (n in obj) {
			v = obj[n]; t = typeof(v);

			if (t == "string") v = '"'+v+'"';
			else if (t == "object" && v !== null) v = JSON.stringify(v);

			json.push((arr ? "" : '"' + n + '":') + String(v));
		}

		return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
	}
};