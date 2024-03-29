import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(
      (res) => {
        localStorage.setItem('token', 'true');
        this.router.navigateByUrl('/home');
      },
      (err) => {
        alert('Bir Şeyler Yanlış Gitti ' + err.message);
        this.router.navigateByUrl('/login');
      }
    );
  }

  signup(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(
      (res) => {
        alert('Kayıt Başarılı');
        this.router.navigateByUrl('/login');
      },
      (err) => {
        alert('Bir Şeyler Yanlış Gitti ' + err.message);
        this.router.navigateByUrl('/signup');
      }
    );
  }

  logout() {
    this.fireAuth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigateByUrl('/login');
      },
      (err) => {
        alert('Bir Şeyler Yanlış Gitti ' + err.message);
        this.router.navigateByUrl('/logout');
      }
    );
  }
}
