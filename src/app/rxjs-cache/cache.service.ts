import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user';
import { map, catchError, shareReplay, share } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

const CACHE_SIZE = 1; // replay 一次，减少一次http

@Injectable()
export class CacheService {
  private cacheUser$?: Observable<User[]>;

  constructor(private http: HttpClient) {}
  get users() {
    if (!this.cacheUser$) {
      this.cacheUser$ = this.requestUsers().pipe(shareReplay(CACHE_SIZE));
    }
    return this.cacheUser$;
  }

  private requestUsers() {
    // get the latest 30 github users: start from id = 2
    return this.http
      .get<Array<User>>('https://api.github.com/users?since=1')
      .pipe(
        map((response) => response),
        catchError((error) => {
          console.log('something went wrong' + error);
          return of([]);
        })
      );
  }
}
