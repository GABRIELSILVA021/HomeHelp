import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratarFuncionarioComponent } from './contratar-funcionario.component';

describe('ContratarFuncionarioComponent', () => {
  let component: ContratarFuncionarioComponent;
  let fixture: ComponentFixture<ContratarFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratarFuncionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratarFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
