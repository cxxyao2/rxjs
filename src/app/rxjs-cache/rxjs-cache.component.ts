import { Component, OnInit } from '@angular/core';
import { CacheService } from './cache.service';
import { User } from './user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-cache',
  templateUrl: './rxjs-cache.component.html',
  styleUrls: ['./rxjs-cache.component.css'],
  providers: [CacheService],
})
export class RxjsCacheComponent implements OnInit {
  users$!: Observable<User[]>;

  constructor(private cacheService: CacheService) {}

  ngOnInit(): void {
    this.users$ = this.cacheService.users;
  }
}
