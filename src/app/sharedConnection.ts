import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedConnection {
    BaseUrl = 'http://localhost:5000';
   
    
    constructor(private httpClient : HttpClient){}

    getCategory(params) {
        try{ 
            return this.httpClient.post(this.BaseUrl+"/getCategory",{pages : params});
        }catch(error) {
           //return new Error("Network error, Please try after some time !");
        }    
    }

    getProduct(params) {
        try{ 
            return this.httpClient.post(this.BaseUrl+"/getProducts",{pages : params});
        }catch(error) {
           //return new Error("Network error, Please try after some time !");
        }    
    }

    addCategory(params) {
        try{ 
            return this.httpClient.post(this.BaseUrl+"/addCategory",{id : params.id,name : params.name});
        }catch(error) {
           //return new Error("Network error, Please try after some time !");
        }    
    }

    removeCategory(id) {
        try{ 
            return this.httpClient.post(this.BaseUrl+"/removeCategory",{id : id});
        }catch(error) {
           //return new Error("Network error, Please try after some time !");
        }    
    }

}