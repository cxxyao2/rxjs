//  显示github 的30位用户数据，并且每10s调用一次api
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { catchError, map, share, switchMap } from 'rxjs/operators';
import { User } from '../rxjs-cache/user';
import { shareReplay } from 'rxjs/operators';

const CACHE_SIZE = 1;
const REFRESH_INTERVAL = 10000;
const API_ENDPOINT = 'https://api.github.com/users?since=';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private cacheUsers$?: Observable<User[]>;
  private userStartId = 0;

  constructor(private http: HttpClient) {}

  get users() {
    if (!this.cacheUsers$) {
      const timer$ = timer(0, REFRESH_INTERVAL); // 0 emit value; 再间隔.REFRESH_INTERVAL..发数据
      this.cacheUsers$ = timer$.pipe(
        switchMap(() => this.requestUsers()),
        shareReplay(CACHE_SIZE)
      );
    }
    return this.cacheUsers$;
  }

  private requestUsers() {
    this.userStartId = this.userStartId + 30;
    return this.http.get<User[]>(API_ENDPOINT + this.userStartId).pipe(
      map((response) => response),
      catchError((error) => {
        console.log('something went wrong' + error);
        return of([]);
      })
    );
  }
}
