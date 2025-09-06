import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowMoreComponent } from './know-more.component';

describe('KnowMoreComponent', () => {
  let component: KnowMoreComponent;
  let fixture: ComponentFixture<KnowMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowMoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
