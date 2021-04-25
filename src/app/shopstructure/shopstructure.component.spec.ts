import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopstructureComponent } from './shopstructure.component';

describe('ShopstructureComponent', () => {
  let component: ShopstructureComponent;
  let fixture: ComponentFixture<ShopstructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopstructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
