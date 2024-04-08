import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
export class CountrylistComponent implements OnInit, AfterViewInit {
  constructor(
    public countryService: CountryService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    if (this.countryService.role === 'admin') {
      this.displayedColumns.push('action')
    }
  }

  countryList: list[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource(this.countryList);
  displayedColumns: string[] = [
    'flag',
    'name',
    'capital',
    'region',
    'population',
    'currency'
  ];

  ngOnInit(): void {
    let data = this.route.snapshot.data['data'];
    this.dataSource = new MatTableDataSource(data);
    this.countryList = data;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getCountryCodeFromFlagEmoji(emoji: string) {
    // Convert the flag emoji to Unicode code points
    const codePoints = [...emoji].map(char => char.codePointAt(0)! - 127397);

    // Convert Unicode code points back to country code
    const countryCode = codePoints.map(code => String.fromCharCode(code)).join('');

    return countryCode.toLowerCase(); // Ensure the country code is returned in lowercase
  }

  getFlag(emoji: string) {
    const flag = this.getCountryCodeFromFlagEmoji(emoji);
    return 'https://flagcdn.com/' + flag + '.svg';
  }

  changePage(obj: any) {
    this.paginator.pageIndex = obj.pageIndex;
    this.paginator.pageSize = obj.pageSize;
  }

  getCurrencyString(currency: any) {
    const result = []
    for (const key in currency) {
      result.push(currency[key].name)
    }
    return result.join(", ")
  }
}
