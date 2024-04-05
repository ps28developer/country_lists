import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/Services/country.service';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.scss']
})
export class CountrylistComponent implements OnInit {
  constructor(private countryService:CountryService){}


  ngOnInit(): void {
    this.getCountries();
  }


  getCountries(){
    return this.countryService.fetchCountry().subscribe(res=>{
      console.log("Res",res)
    })
  }
}
