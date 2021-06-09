import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { fromEvent, Subscription, interval } from 'rxjs';
import { map, scan, buffer, filter, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-button-click',
  template: `
    <div>
      <input id="myBtn" type="text" placeholder="enter your name" />
      <button #myBtn (click)="click1()">click</button>
      <button (click)="click2()">button 2</button>
      <button (click)="bufferClick()">double click</button>
    </div>
    <div><app-ex></app-ex></div>
  `,
})
export class ButtonClickComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('myBtn') myBtn!: ElementRef; // 直接找到子组件对应的DOM
  sub!: Subscription;

  constructor() {}
  ngOnInit() {
    console.log('onInit button', this.myBtn); // 测试button 是undefined.
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit button', this.myBtn); // 这时才有button
  }

  click1() {
    console.log('click 1');
    const source = interval(1000);
    // emit the first value, then ignore for 5 seconds, repeat...
    // output: 0...5...10
    const example = source.pipe(throttleTime(5000));
    const subscribe = example.subscribe((val) => console.log(val));
  }

  click2() {
    // this.myBtn.nativeElement.click();
    const clickStream$ = fromEvent(this.myBtn.nativeElement, 'click');
    const counterStream$ = clickStream$.pipe(
      map((data) => {
        return 1;
      }),
      scan((acc, curr) => acc + curr, 0)
    );

    this.sub = counterStream$.subscribe((data: any) => {
      console.log('this is the click counter:' + data);
    });
  }

  bufferClick() {
    // 统计双击或者多击次数
    // buffer: collection output values until provided observable emits, emit as array
    const clickStream$ = fromEvent(this.myBtn.nativeElement, 'click');
    const doubleClickStream$ = clickStream$.pipe(
      buffer(clickStream$.pipe(throttleTime(250))),
      map((click) => {
        return click.length;
      }),
      filter((num) => num >= 2)
    );

    doubleClickStream$.subscribe((data) => {
      console.log('the number of double click is:' + data);
    });
  }

  ngOnDestroy() {
    console.log('should unsubscribe');
    this.sub.unsubscribe();
  }
}
