package com.kamal.web.dto.http.client;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.kamal.web.dto.WebGLdto;

@Path("/WebGLServices")
public interface WebGLServices {
	
	@POST
	@Path("/getShaders")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public WebGLdto getShaders();

}
