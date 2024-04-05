import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:HttpClient) { }

  baseUrl="https://restcountries.com/v3.1/"

  fetchCountry(){
    let allQue = ['name','capital','currencies','region','population'];
    return this.http.get(this.baseUrl + "all",{params:{fields:allQue}});
  }
}
