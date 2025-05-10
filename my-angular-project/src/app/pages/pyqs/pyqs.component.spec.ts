import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyqsComponent } from './pyqs.component';

describe('PyqsComponent', () => {
  let component: PyqsComponent;
  let fixture: ComponentFixture<PyqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PyqsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PyqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
