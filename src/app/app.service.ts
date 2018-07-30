import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from './../../node_modules/rxjs';
import { ACCOUNTS } from './accounts-mocks';
import { Account } from './account';

export const ACCOUNT_API = 'http://localhost:8080/api/accounts';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  accounts: Account[] = ACCOUNTS;

  constructor(private http: HttpClient) { }

  getAccounts(): Account[] {
    return this.accounts;
    // return this.http.get(ACCOUNT_API);
  }
}
