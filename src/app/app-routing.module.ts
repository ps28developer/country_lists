import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountrylistComponent } from './Components/countrylist/countrylist.component';
import { MainpageComponent } from './Components/mainpage/mainpage.component';
import { authGuard } from './Guard/auth_guard/auth.guard';
import { CountrydetailComponent } from './Components/countrydetail/countrydetail.component';
import { CountryService } from './Services/CountryService';
import { resolveGuard } from './Guard/resolve_guard/resolve.guard';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path:"main",component:MainpageComponent},
  {
    path:"list",component:CountrylistComponent, resolve:{data:resolveGuard}
  },
  {path:'detail/:id',component:CountrydetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
