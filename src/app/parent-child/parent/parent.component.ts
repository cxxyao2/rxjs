// tslint:disable: no-conflicting-lifecycle
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

// changeDetectionStrategy: OnPush
// 本身@Input的引用变化，
// 组件本身及子组件的DOM事假,如clic, mouse down, submit
// Observable 订阅事件,同时设置了Async pipe.
// 

@Component({
  selector: 'app-parent',
  template: `<p>
      <app-child [data]="data"><h3>child title</h3></app-child>
    </p>
    <p><button (click)="changeChild()">change child name</button></p>`,
  styles: [
    ' * {text-align:center;} p {width:300px;height:300px;color:blue;border:2px solid purple;}',
  ],
})
export class ParentComponent
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
  data: any = {
    name: 'Jane',
    address: 'Toronto',
    contact: {
      email: 'Toronto@gmail.ca',
      phone: '0112121212',
    },
  };
  childName = 'my good child';
  constructor() {
    console.log(` parent construction `);
  }

  changeChild() {
    this.data = { name: ' excellent boy' };
  }

  // only called for/if there is an @input variable set by parent.
  ngOnChanges() {
    console.log(`  Parent  OnChanges `);
  }

  ngOnInit() {}
  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngDoCheck() {
    console.log(`  Parent  DoCheck`);
  }

  ngAfterContentInit() {
    console.log(`  Parent  AfterContentInit`);
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() {
    console.log(`  Parent  AfterContentChecked`);
  }

  ngAfterViewInit() {
    console.log(`  Parent  AfterViewInit`);
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() {
    console.log(`  Parent  AfterViewChecked`);
  }

  ngOnDestroy() {
    console.log(`  Parent  OnDestroy`);
  }
}
