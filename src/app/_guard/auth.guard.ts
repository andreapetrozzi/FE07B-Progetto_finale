import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService} from '../_services/auth.service';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})


export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    if (localStorage.getItem('utente')) {
      return true;
    }
    return this.router.createUrlTree(['/login']);
  }
}
