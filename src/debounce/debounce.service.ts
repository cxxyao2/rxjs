import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../app/rxjs-cache/user';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DebounceService {
  url = 'https://api.github.com/search/users?q=';
  constructor(private http: HttpClient) {}

  searchUser(val: any) {
    return this.http.get<User[]>(this.url + val).pipe(
      map((response: any) => response),
      catchError((error) => {
        console.log('something went wrong,' + error);
        return of([]);
      })
    );
  }
}
