import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChordNodeComponent } from './add-chord-node.component';

describe('AddChordNodeComponent', () => {
  let component: AddChordNodeComponent;
  let fixture: ComponentFixture<AddChordNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChordNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChordNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
