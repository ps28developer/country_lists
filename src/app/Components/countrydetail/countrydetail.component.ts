import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from 'src/app/Services/CountryService';

@Component({
  selector: 'app-countrydetail',
  templateUrl: './countrydetail.component.html',
  styleUrls: ['./countrydetail.component.scss'],
})
export class CountrydetailComponent implements OnInit {
  countryInfo:any;
  Object=Object;
  allLang:any=[];
  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe((res: any) => res.id && this.countryDetail(res.id));
  }

  ngOnInit(): void {}

  countryDetail(name: string) {
    let result = name.toLowerCase()
    this.countryService.detailCountry(result).subscribe((res: any) => {
      this.countryInfo = res[0]
      this.getAllLang();
    });
  }

  getAllLang(){
    Object.keys(this.countryInfo.languages).forEach((res,index)=>{
      this.allLang.push(this.countryInfo.languages[res]);
      if (Object.keys(this.countryInfo.currencies).length - 1 == index) {
        return this.allLang.join(',');
      }
    })
  }

}
