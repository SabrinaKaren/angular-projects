import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() showPanel: EventEmitter<string> = new EventEmitter<string>();
  form: FormGroup = new FormGroup({
    'email': new FormControl(null, [ Validators.required, Validators.minLength(5), Validators.maxLength(100) ]),
    'password': new FormControl(null, [ Validators.required, Validators.minLength(6), Validators.maxLength(20) ])
  });

  constructor(private authService: AuthService, private notifier: NotifierService) { }

  ngOnInit(): void {
  }

  changeToRegister(){
    this.showPanel.emit('register');
  }

  login(){

    if (this.form.status === 'INVALID'){
      this.form.get('email').markAsTouched();
      this.form.get('password').markAsTouched();
    } else {
      this.authService
        .auth(this.form.value.email, this.form.value.password)
        .then((msg: any) => {
          if (msg !== undefined){
            this.notifier.notify('error', msg.message);
          }
        })
    }

  }

}