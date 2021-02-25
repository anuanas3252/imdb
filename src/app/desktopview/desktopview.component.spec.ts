import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopviewComponent } from './desktopview.component';

describe('DesktopviewComponent', () => {
  let component: DesktopviewComponent;
  let fixture: ComponentFixture<DesktopviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
