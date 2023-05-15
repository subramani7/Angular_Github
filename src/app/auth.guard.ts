import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service :AuthService, private route:Router){

  }
  canActivate()
    {
      if(sessionStorage.getItem("success")){
        return true;
      }
     else{
      alert('Permission denied without Login...');
      this.route.navigate(['login']);
      return false;

     }
  }

}
