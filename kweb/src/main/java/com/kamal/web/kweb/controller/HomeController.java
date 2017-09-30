package com.kamal.web.kweb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kamal.web.dto.BasicInfo;
import com.kamal.web.dto.WebGLdto;
import com.kamal.web.dto.http.client.GeneralInfoServices;
import com.kamal.web.dto.http.client.WebGLServices;
import com.kamal.web.kweb.beans.JSONResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;


@Controller
public class HomeController {
	
	
	@Autowired
	GeneralInfoServices generalInfoServices;
	
	@Autowired
	WebGLServices webGLServices;
	
	private static final Log LOG = LogFactory.getLog(HomeController.class);
	
	@RequestMapping(value = {"/home","/"},  method= { RequestMethod.GET, RequestMethod.POST })
	public String home() 
	{
		try
		{
			LOG.debug("Realizando llamada a servicio httpInvoker 'generalInfoServices.getTime()' con endpoint '"+generalInfoServices+"'");
			BasicInfo respuesta=generalInfoServices.getTime();
			LOG.debug("Recibida respuesta servicio httpInvoker 'generalInfoServices.getTime()': "+respuesta);
		}
		catch(Exception e)
		{
			LOG.debug("Se ha producido un error en la llamada httpInvoker a 'generalInfoServices.getTime()'. Causa: "+e.getMessage());
			return "home";
		}
		return "home";
	}
	
	@RequestMapping(value = "/webgl",  method= { RequestMethod.GET, RequestMethod.POST })
	public String webgl() 
	{
		
		return "webgl";
	}
	
	@RequestMapping(value = "/obtenerShaders",  method= {RequestMethod.POST })
	public @ResponseBody JSONResponse obtenerShaders() 
	{
		try
		{
			LOG.debug("Realizando llamada a servicio httpInvoker 'webGLServices.getShaders()' con endpoint '"+webGLServices+"'");
			WebGLdto respuesta=webGLServices.getShaders();
			LOG.debug("Recibida respuesta servicio httpInvoker 'webGLServices.getShaders()': "+respuesta);
			return new JSONResponse(true,"OK",respuesta);
			
		}catch(Exception e)
		{
			LOG.debug("Se ha producido un error en la llamada httpInvoker a 'webGLServices.getShaders()'. Causa: "+e.getMessage());
			return new JSONResponse(false,"ERROR: "+e.getMessage(),null);
		}
	}

}