import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthSecondChildPage } from './auth-second-child.page';

describe('AuthSecondChildPage', () => {
  let component: AuthSecondChildPage;
  let fixture: ComponentFixture<AuthSecondChildPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSecondChildPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthSecondChildPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
