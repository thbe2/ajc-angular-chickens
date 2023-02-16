import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ChickenService } from '../chicken.service';

import { ChickenDetailComponent } from './chicken-detail.component';

describe('ChickenDetailComponent', () => {
  let component: ChickenDetailComponent;
  let fixture: ComponentFixture<ChickenDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChickenDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChickenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
