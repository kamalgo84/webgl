package com.kamal.web.dto;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="BasicInfo")
public class BasicInfo implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -1658674005382802813L;
	String fecha;

	public String getFecha() {
		return fecha;
	}

	public void setFecha(String fecha) {
		this.fecha = fecha;
	}

	@Override
	public String toString() {
		return "BasicInfo [fecha=" + fecha + "]";
	}
	
	

}
