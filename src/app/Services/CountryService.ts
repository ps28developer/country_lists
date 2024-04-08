import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface list {
  [k: string]: boolean | number | string;
}

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) { }

  baseUrl = 'https://restcountries.com/v3.1/';
  userRole: BehaviorSubject<string> = new BehaviorSubject('');

  fetchCountry() {
    let allQue = [
      'name',
      'capital',
      'currencies',
      'region',
      'population',
      'cca3',
      'flag',
    ];
    return this.http.get<list[]>(this.baseUrl + 'all', {
      params: { fields: allQue },
    });
  }

  get role() {
    return this.userRole.value;
  }

  detailCountry(name: string) {
    let flag = name.toLowerCase();
    return this.http.get(this.baseUrl + 'alpha/' + flag);
  }

}
