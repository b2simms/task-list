import { Injectable } from '@angular/core';
import Auth0Lock from 'auth0-lock';
import { tokenNotExpired } from 'angular2-jwt';

const AUTH0_CLIENT_ID = 'Rp3KNHLW5pyInaCQLNr4KdjNjcIPbmL1';
const AUTH0_DOMAIN = 'managebrent.auth0.com';

// this is the key to the JWT in the browser localStorage
const ID_TOKEN = 'token';

@Injectable()
export class AuthService {
  lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN, {});

  constructor() {
    // listening to 'authenticated' events
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem(ID_TOKEN, authResult.idToken);
    });
  }

  signIn() { this.lock.show(); }

  signOut() { localStorage.removeItem(ID_TOKEN); }

  authenticated() { 
    console.log(tokenNotExpired(ID_TOKEN, localStorage.getItem(ID_TOKEN)));
    return tokenNotExpired(ID_TOKEN, localStorage.getItem(ID_TOKEN)); 
  }
}