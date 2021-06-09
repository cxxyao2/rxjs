import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsCacheComponent } from './rxjs-cache.component';

describe('RxjsCacheComponent', () => {
  let component: RxjsCacheComponent;
  let fixture: ComponentFixture<RxjsCacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsCacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
