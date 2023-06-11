import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarRegistroPage } from './editar-registro.page';

describe('EditarRegistroPage', () => {
  let component: EditarRegistroPage;
  let fixture: ComponentFixture<EditarRegistroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
