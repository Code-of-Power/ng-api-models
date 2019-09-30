import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgApiModelsComponent } from './ng-api-models.component';

describe('NgApiModelsComponent', () => {
  let component: NgApiModelsComponent;
  let fixture: ComponentFixture<NgApiModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgApiModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgApiModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
