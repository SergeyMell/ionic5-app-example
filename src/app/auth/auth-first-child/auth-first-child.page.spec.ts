import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthFirstChildPage } from './auth-first-child.page';

describe('AuthFirstChildPage', () => {
  let component: AuthFirstChildPage;
  let fixture: ComponentFixture<AuthFirstChildPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthFirstChildPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthFirstChildPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
