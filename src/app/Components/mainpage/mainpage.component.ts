import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/Services/CountryService';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {
  constructor(private coutryService: CountryService,private router:Router) {}

  ngOnInit(): void {}
  

  changeRole(e: any) {
    let value = e.target.value;
    this.coutryService.userRole.next(value);
    // localStorage.setItem("user_role",value);
    this.router.navigate(['/list']);
  }
}
