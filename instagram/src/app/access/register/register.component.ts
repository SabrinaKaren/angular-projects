import { User } from './../../models/user.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() showPanel: EventEmitter<string> = new EventEmitter<string>();

  form: FormGroup = new FormGroup({
    'email': new FormControl(null, [ Validators.required, Validators.minLength(5), Validators.maxLength(100) ]),
    'name': new FormControl(null, [ Validators.required, Validators.minLength(10), Validators.maxLength(100) ]),
    'userName': new FormControl(null, [ Validators.required, Validators.minLength(6), Validators.maxLength(60) ]),
    'password': new FormControl(null, [ Validators.required, Validators.minLength(6), Validators.maxLength(20) ])
  });

  constructor(private authService: AuthService, private notifier: NotifierService) { }

  ngOnInit(): void {
  }

  changeToLogin(){
    this.showPanel.emit('login');
  }

  registerUser(){

    if (this.form.status === 'INVALID'){
      this.form.get('email').markAsTouched();
      this.form.get('name').markAsTouched();
      this.form.get('userName').markAsTouched();
      this.form.get('password').markAsTouched();
    } else {

      let user: User = new User(
        this.form.value.email,
        this.form.value.name,
        this.form.value.userName,
        this.form.value.password
      );
  
      this.authService.registerUser(user)
          .then((msg: any) => {
            if (msg === undefined){
              this.notifier.notify('success', 'Usuário cadastrado com sucesso!');
              this.changeToLogin();
            } else {
              this.notifier.notify('error', msg.message);
            }
          });

    }

  }

}