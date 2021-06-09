import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-cold-hot',
  templateUrl: './rxjs-cold-hot.component.html'
})
export class RxjsColdHotComponent implements OnInit {
  constructor() {}

  // cold observable
  // 不管有多少subscribe, 每次从第一个数据开始发送
  ngOnInit(): void {
    let obs$ = from([1, 2, 3, 4, 5]);
    obs$.subscribe((data) => {
      console.log('1st subscriber' + data);
    });
    setTimeout(() => {
      obs$.subscribe((data) => {
        console.log('2nd subscriber' + data);
      });
    }, 1000);
  }
}
