import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfaComponent } from './ifa.component';

describe('IfaComponent', () => {
  let component: IfaComponent;
  let fixture: ComponentFixture<IfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
