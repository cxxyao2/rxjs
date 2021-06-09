import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { merge, Observable, Subject } from 'rxjs';
import { User } from '../rxjs-cache/user';
import { mapTo, mergeMap, skip, take } from 'rxjs/operators';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  users$!: Observable<User[]>;
  updateClick$ = new Subject<void>();
  showNotification$?: Observable<boolean>;

  constructor(private notService: NotificationService) {}

  ngOnInit(): void {
    const initialUsers$ = this.getUserOnce();
    const updateUsers$ = this.updateClick$.pipe(
      mergeMap(() => this.getUserOnce())
    );
    this.users$ = merge(initialUsers$, updateUsers$);

    const initNotification$ = this.getNotifications();
    const show$ = initNotification$.pipe(mapTo(true));
    const hide$ = this.updateClick$.pipe(mapTo(false));
    this.showNotification$ = merge(show$, hide$); // false,true, 依次执行; updateClick$.next()再给Subject赋值，再可以继续执行
    //this.showNotification$ = show$;
  }

  getUserOnce() {
    return this.notService.users.pipe(take(1));
  }

  getNotifications() {
    return this.notService.users.pipe(skip(1));
  }
}
