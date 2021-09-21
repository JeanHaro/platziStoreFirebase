import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor (private auth: AngularFireAuth) { }

  createUser (email: string, password: string) {
    // Crear usuario con email and password
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  login (email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  // Cerrar sesión
  logout() {
    return this.auth.signOut();
  }

  // Tiene usuario
  hasUser() {
    return this.auth.authState;
  }
}
