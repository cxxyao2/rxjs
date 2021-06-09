import { Component, OnInit } from '@angular/core';
import { ConnectableObservable, from, interval, of } from 'rxjs';
import { publish, refCount, share, shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-hot-observable',
  templateUrl: './hot-observable.component.html',
  styles: [
    `
      div.child {
        color: coral;
      }
      th:nth-child(3) {
        color: blue;
      }
      td:nth-child(3) {
        color: green;
      }
    `,
  ],
})
export class HotObservableComponent implements OnInit {
  constructor() {}

  // ngOnInit(): void {
  //   console.log('hot observable');
  //   const obs$ = interval(1000).pipe(
  //     publish(),
  //     refCount()
  //   ) as ConnectableObservable<any>;
  //   // obs$.connect();
  //   setTimeout(() => {
  //     obs$.subscribe((data) => {
  //       console.log('lst hot subscriber:' + data);
  //     });
  //     setTimeout(() => {
  //       obs$.subscribe((data) => {
  //         console.log('2st hot  subscriber:' + data);
  //       });
  //     }, 2100);
  //   }, 2100);
  // }

  ngOnInit(): void {
    console.log('hot observable');
    const obs$ = interval(1000).pipe(
      shareReplay(1)
    ) as ConnectableObservable<any>;
    // obs$.connect();
    setTimeout(() => {
      obs$.subscribe((data) => {
        console.log('lst hot subscriber:' + data);
      });
      setTimeout(() => {
        obs$.subscribe((data) => {
          console.log('2st hot  subscriber:' + data);
        });
      }, 2100);
    }, 2100);
  }
}
