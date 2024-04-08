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
export class CountrylistComponent implements OnInit,AfterViewInit {
  constructor(
    public countryService: CountryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  countryList: list[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource(this.countryList);
  displayedColumns: string[] = [
    'flag',
    'name',
    'capital',
    'region',
    'population',
    'currency',
    'action',
  ];

  ngOnInit(): void {
    let data = this.route.snapshot.data['data'];
    this.dataSource = new MatTableDataSource(data);
    this.countryList = data;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }



  imgFun(list: any) {
    let flag = list.flag.toLowerCase();
    return 'https://flagcdn.com/' + flag + '.svg';
  }

  changePage(obj:any){
    this.paginator.pageIndex = obj.pageIndex;
    this.paginator.pageSize = obj.pageSize;
  }

  checkValid(element:any){
    this.countryService.userRole.subscribe(res=>{
      if(res == 'admin'){
        this.router.navigate(["detail",element.flag])
      } else {this.router.navigate(["/unAuth"])};
    })
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
