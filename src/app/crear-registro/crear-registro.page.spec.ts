import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearRegistroPage } from './crear-registro.page';

describe('CrearRegistroPage', () => {
  let component: CrearRegistroPage;
  let fixture: ComponentFixture<CrearRegistroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
