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

    getProduct(page,category_id) {
        try{ 
            return this.httpClient.post(this.BaseUrl+"/getProducts",{pages : page,category_id:category_id});
        }catch(error) {
           //return new Error("Network error, Please try after some time !");
        }    
    }

    addCategory(params) {
        try{ 
            if(params.type=="Category"){
                return this.httpClient.post(this.BaseUrl+"/addCategory",{id : params.id,name : params.name});
            }else if(params.type=="Product"){
                return this.httpClient.post(this.BaseUrl+"/addProduct",{id : params.id,name : params.name,category_id : params.category_id});
            }
            
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

    removeProduct(id) {
        try{ 
            return this.httpClient.post(this.BaseUrl+"/removeProducts",{id : id});
        }catch(error) {
           //return new Error("Network error, Please try after some time !");
        }    
    }

}