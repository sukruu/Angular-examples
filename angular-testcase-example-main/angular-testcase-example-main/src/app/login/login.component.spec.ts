import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });


  let form
  let scope

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check Login Credential', () => {
    component['checkLogin']();
    const checkLog = {
      email: 'ashish@gmail.com',
      passWord: 'A@shish02'
    };
    console.log('component data', component.data);
    expect(component.data).toEqual(checkLog);
  })

  it('check validation', () => {
    component['checkLogin']();
    let result = component['checkValidation'](component.data.email, component.data.passWord);
    console.log('result result', result);
    expect(result).toEqual(true);
  });

});
