import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraCabeceraComponent } from './barra-cabecera.component';

describe('BarraCabeceraComponent', () => {
  let component: BarraCabeceraComponent;
  let fixture: ComponentFixture<BarraCabeceraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraCabeceraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraCabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
