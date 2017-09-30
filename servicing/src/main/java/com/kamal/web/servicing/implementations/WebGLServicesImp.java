package com.kamal.web.servicing.implementations;

import java.util.Date;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.kamal.web.dto.WebGLdto;
import com.kamal.web.dto.http.client.WebGLServices;
import com.kamal.web.servicing.beans.Shaders;

public class WebGLServicesImp implements WebGLServices {
	
	private static final Log LOG = LogFactory.getLog(WebGLServicesImp.class);

	//@Override
	public WebGLdto getShaders() 
	{
		long time=new Date().getTime();
		LOG.debug("Inicio servicio 'getShaders()'");
		WebGLdto respuesta=new WebGLdto();
		respuesta.setVertexshader(Shaders.VERTEX_SHADER);
		respuesta.setFragmentshader(Shaders.FRAGMENT_SHADER);
		respuesta.setBasicvertexshader(Shaders.BASIC_VERTEX_SHADER);
		respuesta.setBasicfragmentxshader(Shaders.BASIC_FRAGMENT_SHADER);
		LOG.debug("Fin Servicio 'getShaders()'. tiempo: "+(new Date().getTime()-time)+". Respuesta: "+respuesta);
		return respuesta;
	}

}
