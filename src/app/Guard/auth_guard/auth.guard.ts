import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CountryService } from 'src/app/Services/CountryService';
import { firstValueFrom } from 'rxjs';

export const authGuard: CanActivateFn = async (route, state) => {
  const router: Router = inject(Router);
  const countryService = inject(CountryService);
  // let role = localStorage.getItem("user_role");
  let role = await firstValueFrom(countryService.userRole);
  if (role) {
    return true;
  } else {
    router.navigate(['/main']);
    return false;
  }
};
