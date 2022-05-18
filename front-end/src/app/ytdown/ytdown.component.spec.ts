import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtdownComponent } from './ytdown.component';

describe('YtdownComponent', () => {
  let component: YtdownComponent;
  let fixture: ComponentFixture<YtdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YtdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YtdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
