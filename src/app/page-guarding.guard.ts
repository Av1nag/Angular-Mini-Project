import { CanActivateFn } from '@angular/router';

export const pageGuardingGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('isLoggedIn')==='yes'){
    return true;
  }

  return false;
};
