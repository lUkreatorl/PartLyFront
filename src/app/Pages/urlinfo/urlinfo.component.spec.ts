import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlinfoComponent } from './urlinfo.component';

describe('UrlinfoComponent', () => {
  let component: UrlinfoComponent;
  let fixture: ComponentFixture<UrlinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
