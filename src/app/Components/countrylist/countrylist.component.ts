import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from 'src/app/Services/CountryService';

interface list {
  [k: string]: boolean | number | string | any;
}

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.scss'],
})
export class CountrylistComponent implements OnInit {
  constructor(public countryService: CountryService, private router: Router,private route:ActivatedRoute) {}

  countryList: list[] = [];

  ngOnInit(): void {
    this.countryList =this.route.snapshot.data['data'];
  }

  imgFun(list: any) {
    let flag = list.flag.toLowerCase()
    return 'https://flagcdn.com/' + flag + '.svg';
  }

  currencyArr(list: any) {
    let result: any = [];
    return Object.keys(list.currencies).map(
      (res: any, index: number): void | any => {
        result.push(list.currencies[res].name);
        if (Object.keys(list.currencies).length - 1 == index) {
          return result.join(',');
        }
      }
    );
  }

}
