import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

// Servicio
import { AuthService } from './core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor (
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    // Método por defecto
    // En base a la ruta va a devolver un Observable o un Promise o algo que sea booleano(Si puedo o no acceder)
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // false - no permitirle acceder alguna ruta
    // true - permitirle el acceso a alguna ruta
      return this.authService.hasUser().pipe(
        // Si el usuario no está saldrá false, y no podrá acceder al admin, y si está podrá entrar
        map(user => user === null ? false : true),
        tap(hasUser => {
          if (!hasUser) {
            this.router.navigate(['/auth/login']);
          }
        })
      );
  }
  
}
