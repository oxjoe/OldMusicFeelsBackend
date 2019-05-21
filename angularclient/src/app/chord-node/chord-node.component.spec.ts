import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordNodeComponent } from './chord-node.component';

describe('ChordNodeComponent', () => {
  let component: ChordNodeComponent;
  let fixture: ComponentFixture<ChordNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
