import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostExampleComponent } from './host-example.component';

describe('HostExampleComponent', () => {
  let component: HostExampleComponent;
  let fixture: ComponentFixture<HostExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
