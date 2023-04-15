import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoHorizontalComponent } from './grafico-horizontal.component';

describe('GraficoHorizontalComponent', () => {
  let component: GraficoHorizontalComponent;
  let fixture: ComponentFixture<GraficoHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoHorizontalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
