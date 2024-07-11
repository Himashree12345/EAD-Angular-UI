import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  let route = inject(Router);
  let auth = inject(AuthService);

  if(auth.isLoggedIn()){
    return true;
  }else{
    route.navigate(['/Login']);
    return false;
  }
};
