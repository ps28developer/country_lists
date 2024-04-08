import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CountryService } from 'src/app/Services/CountryService';
interface list {
  [k: string]: boolean | number | string | any;
}
export const resolveGuard: ResolveFn<list[]> = (route, state) => {
  return inject(CountryService).fetchCountry();
};
