import axios from "axios";
import init from "./init";

export class Http {
  constructor( init ) {    
    this.defaultInit()    
    let service = axios.create({
      headers: init.customHeaders,
      params: init.customParams,
      baseURL: init.baseURL,  
      withCredentials: init.withCredentials,
    });    
    service.interceptors.response.use(init.handleSuccess, init.handleError);
    this.service = service;    
  }
  
  defaultInit () {
    !init.customHeaders ? init.customHeaders = {} : ''
    !init.customParams ? init.customParams = {} : ''
    !init.baseURL ? init.baseURL = "http://localhost" : ''
    !init.withCredentials ? init.withCredentials = false : init.withCredentials = true
    !init.handleSuccess ? init.handleSuccess = this.defaultHandleSuccess : ''
    !init.handleError ? init.handleError = this.defaultHandleError : ''
  }
  
  defaultHandleSuccess(response) { return response; }
  
  defaultHandleError(error) { return error; }

  get(path) {
    return this.service.request({
      method: "GET",
      url: path,
      responseType: "json"
    });
  }

  patch(path, payload) {
    return this.service.request({
      method: "PATCH",
      url: path,
      responseType: "json",
      data: payload
    });
  }

  post(path, payload = false) {
    return this.service.request({
      method: "POST",
      url: path,
      responseType: "json",
      data: payload
    });
  }

  delete(path, payload = false) {
    return this.service.request({
      method: "DELETE",
      url: path,
      responseType: "json",
      data: payload
    });
  }
}

export default new Http( init );
