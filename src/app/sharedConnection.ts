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




}