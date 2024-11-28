import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCommandesComponent } from './user-commandes.component';

describe('UserCommandesComponent', () => {
  let component: UserCommandesComponent;
  let fixture: ComponentFixture<UserCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCommandesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
