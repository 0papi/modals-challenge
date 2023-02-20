import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWrapperComponentComponent } from './modal-wrapper-component.component';

describe('ModalWrapperComponentComponent', () => {
  let component: ModalWrapperComponentComponent;
  let fixture: ComponentFixture<ModalWrapperComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalWrapperComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalWrapperComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
