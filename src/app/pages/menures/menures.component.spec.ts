import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuresComponent } from './menures.component';

describe('MenuresComponent', () => {
  let component: MenuresComponent;
  let fixture: ComponentFixture<MenuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
