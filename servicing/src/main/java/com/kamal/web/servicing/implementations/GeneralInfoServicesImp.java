package com.kamal.web.servicing.implementations;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.kamal.web.dto.BasicInfo;
import com.kamal.web.dto.http.client.GeneralInfoServices;


public class GeneralInfoServicesImp implements GeneralInfoServices {
	
	private static final Log LOG = LogFactory.getLog(GeneralInfoServices.class);

	public BasicInfo getTime() 
	{
		long time=new Date().getTime();
		LOG.debug("Inicio Servicio 'getTime()'");
		SimpleDateFormat formato=new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		BasicInfo respuesta=new BasicInfo();
		respuesta.setFecha("Fecha y hora actual: "+formato.format(new Date()));
		LOG.debug("Fin Servicio 'getTime()'. tiempo: "+(new Date().getTime()-time)+". Respuesta: "+respuesta);
		return respuesta;
	}

} 