import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosCovidComponent } from './dados-covid.component';

describe('DadosCovidComponent', () => {
  let component: DadosCovidComponent;
  let fixture: ComponentFixture<DadosCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
