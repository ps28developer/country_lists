import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService, list } from 'src/app/Services/CountryService';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-countrydetail',
  templateUrl: './countrydetail.component.html',
  styleUrls: ['./countrydetail.component.scss'],
})
export class CountrydetailComponent implements OnInit, AfterViewInit {
  countryInfo:any;
  Object=Object;
  allLang:any=[];
  displayedColumns: string[] = ['common', 'official', 'independent', 'status','unMember','capital','region','language','area','flag','population'];
  dataSource = new MatTableDataSource<list>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe((res: any) => res.id && this.countryDetail(res.id));
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  countryDetail(name: string) {
    let result = name.toLowerCase()
    this.countryService.detailCountry(result).subscribe((res: any) => {
      this.countryInfo=res[0]
      this.dataSource = res
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
