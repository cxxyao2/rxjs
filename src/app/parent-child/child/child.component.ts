// tslint:disable: no-conflicting-lifecycle
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-child',
  template: `<div>
      <ng-content></ng-content>
      <p>Now you see hero {{ data.name }}</p>
    </div>
    <hr />
    <div>
      <p><button (click)="changeCounter()">add 1</button></p>
      counter is {{ counter }}
    </div>
    <div>count is {{ count$ | async }}</div> `,
  styles: ['div {color:#bbb;margin:10px 0;padding:10px;}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() data: any;
  counter: number = 1;
  count$?: Observable<number>;

  constructor(private cd: ChangeDetectorRef) {
    console.log(`  Child   construction`);
  }

  // only called for/if there is an @input variable set by parent.
  ngOnChanges() {
    console.log(`  Child  OnChanges  new data ${this.data.name}`);
  }

  ngOnInit() {
    // this.count$ = interval(1000).pipe(map((count: number) => ++count));
    setInterval(() => {
      this.counter = this.counter + 5;
      // this.cd.detectChanges();
      this.cd.markForCheck();
    }, 3000);
  }

  changeCounter() {
    ++this.counter;
  }
  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngDoCheck() {
    console.log(`  Child  DoCheck`);
  }

  ngAfterContentInit() {
    console.log(`  Child  AfterContentInit`);
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() {
    console.log(`  Child  AfterContentChecked`);
  }

  ngAfterViewInit() {
    console.log(`  Child  AfterViewInit`);
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() {
    console.log(`  Child  AfterViewChecked`);
  }

  ngOnDestroy() {
    console.log(`  Child  OnDestroy`);
  }
}
