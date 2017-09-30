package com.kamal.web.dto;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="WebGLdto")
public class WebGLdto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2252516307918629467L;
	
	private String vertexshader;
	private String fragmentshader;
	private String basicvertexshader;
	private String basicfragmentxshader;
	
	public String getVertexshader() {
		return vertexshader;
	}
	public void setVertexshader(String vertexshader) {
		this.vertexshader = vertexshader;
	}
	public String getFragmentshader() {
		return fragmentshader;
	}
	public void setFragmentshader(String fragmentshader) {
		this.fragmentshader = fragmentshader;
	}
	public String getBasicvertexshader() {
		return basicvertexshader;
	}
	public void setBasicvertexshader(String basicvertexshader) {
		this.basicvertexshader = basicvertexshader;
	}
	public String getBasicfragmentxshader() {
		return basicfragmentxshader;
	}
	public void setBasicfragmentxshader(String basicfragmentxshader) {
		this.basicfragmentxshader = basicfragmentxshader;
	}
	
	@Override
	public String toString() {
		return "WebGLdto [vertexshader=" + vertexshader + ", fragmentshader="
				+ fragmentshader + ", basicvertexshader=" + basicvertexshader
				+ ", basicfragmentxshader=" + basicfragmentxshader + "]";
	}
	
	

}
