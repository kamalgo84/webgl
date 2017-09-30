package com.kamal.web.dto.http.client;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.kamal.web.dto.BasicInfo;

@Path("/GeneralInfoServices")
public interface GeneralInfoServices 
{
	@POST
	@Path("/getTime")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public BasicInfo getTime();

}
