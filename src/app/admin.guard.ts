import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    // Método por defecto
    // En base a la ruta va a devolver un Observable o un Promise o algo que sea booleano(Si puedo o no acceder)
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // false - no permitirle acceder alguna ruta
    // true - permitirle el acceso a alguna ruta
      return false;
  }
  
}
