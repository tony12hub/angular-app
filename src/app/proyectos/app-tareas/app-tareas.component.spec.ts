import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTareasComponent } from './app-tareas.component';

describe('AppTareasComponent', () => {
  let component: AppTareasComponent;
  let fixture: ComponentFixture<AppTareasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppTareasComponent]
    });
    fixture = TestBed.createComponent(AppTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
