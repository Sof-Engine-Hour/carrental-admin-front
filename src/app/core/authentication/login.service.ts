import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';

import { Menu } from '@core';
import { Token, User } from './interface';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  protected readonly http = inject(HttpClient);

  login2(username: string, password: string, rememberMe = false) {
      const body = new URLSearchParams() ;
      body.set('username', username);
      body.set("password" , password) ;
      body.set("grant_type" , environment.grantType.login) ;
      body.set("client_id" , environment.clientId) ;

      // Set the headers
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      });

      return this.http.post<Token>(
          `${environment.autherzationLoginBaseUrl}/protocol/openid-connect/token`,
          body.toString() ,
          {headers}
      );
      
  }

  refreshV2(params: Record<string, any>) {
    const body = new URLSearchParams() ;
      body.set("grant_type" , environment.grantType.refresh) ;
      body.set("client_id" , environment.clientId) ;
      body.set("refresh_token" , params.refresh_token) ;

      // Set the headers
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      });

      return this.http.post<Token>(
          `${environment.autherzationLoginBaseUrl}/protocol/openid-connect/token`,
          body.toString() ,
          {headers}
    );
  }



  login(username: string, password: string, rememberMe = false) {
  return this.http.post<Token>('/auth/login', { username, password, rememberMe });
  }

  


  refresh(params: Record<string, any>) {
    return this.http.post<Token>('/auth/refresh', params);
  }

  logout() {
    return this.http.post<any>('/auth/logout', {});
  }

  me() {
    return this.http.get<User>('/me');
  }

  menu() {
    return this.http.get<{ menu: Menu[] }>('http://localhost:4200/data/menu.json').pipe(map(res => res.menu));
  }
}
