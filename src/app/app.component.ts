import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Account } from './account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  accounts: Account[];
  searchedResults: Account[];
  searchInProgess: boolean;
  errorMsg: boolean;

  constructor(private appService: AppService) {
    this.searchInProgess = false;
    this.errorMsg = false;
  }

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts() {
    this.accounts = this.appService.getAccounts();
    this.searchResults(null);

    // this.appService.getAccounts()
    //   .subscribe((data:  Array<Account>) => {
    //     this.accounts  =  data;
    //     this.searchResults(null);
    //   });
  }

  searchResults(event): void {
    this.searchInProgess = true;
    this.errorMsg = false;

    setTimeout(() => {
      this.delayedSearch(event);
    }, 1200);

  }

  delayedSearch(event) {
    this.searchedResults = [];

    if (event) {
      this.searchedResults = this.accounts.filter((account) => {
        return account.name.includes(event) || account.id.includes(event);
      });
      if (!this.searchedResults.length) {
        this.errorMsg = true;
      }
    } else {
      this.searchedResults = this.accounts;
    }

    this.searchInProgess = false;
  }
}
