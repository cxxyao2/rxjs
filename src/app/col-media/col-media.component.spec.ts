import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColMediaComponent } from './col-media.component';

describe('ColMediaComponent', () => {
  let component: ColMediaComponent;
  let fixture: ComponentFixture<ColMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
