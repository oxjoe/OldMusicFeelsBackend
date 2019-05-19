import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordFormComponent } from './chord-form.component';

describe('ChordFormComponent', () => {
  let component: ChordFormComponent;
  let fixture: ComponentFixture<ChordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
