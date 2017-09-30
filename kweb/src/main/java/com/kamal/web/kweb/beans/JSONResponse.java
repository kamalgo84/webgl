package com.kamal.web.kweb.beans;

import java.io.Serializable;

public class JSONResponse implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6641710657508185640L;
	
	/**
	 * Indica si ha tenido éxito o no la ejecución de un proceso.
	 */
	private boolean success;
	/**
	 * Objeto con los errores
	 */
	
	private String errorInfo;
	/**
	 * Objeto con la respuesta
	 */
	private Object data;
	
	
	public JSONResponse(boolean success, String errorInfo, Object data) {
		super();
		this.success = success;
		this.errorInfo = errorInfo;
		this.data = data;
	}


	public boolean isSuccess() {
		return success;
	}


	public void setSuccess(boolean success) {
		this.success = success;
	}


	public String getErrorInfo() {
		return errorInfo;
	}


	public void setErrorInfo(String errorInfo) {
		this.errorInfo = errorInfo;
	}


	public Object getData() {
		return data;
	}


	public void setData(Object data) {
		this.data = data;
	}


	@Override
	public String toString() {
		return "JSONResponse [success=" + success + ", errorInfo=" + errorInfo
				+ ", data=" + data + "]";
	}
	
	

}
