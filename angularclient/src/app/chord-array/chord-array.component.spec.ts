import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordArrayComponent } from './chord-array.component';

describe('ChordArrayComponent', () => {
  let component: ChordArrayComponent;
  let fixture: ComponentFixture<ChordArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
