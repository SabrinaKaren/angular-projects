import { User } from './../../models/user.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() showPanel: EventEmitter<string> = new EventEmitter<string>();

  form: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'name': new FormControl(null),
    'userName': new FormControl(null),
    'password': new FormControl(null)
  });

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  changeToLogin(){
    this.showPanel.emit('login');
  }

  registerUser(){
    
    let user: User = new User(
      this.form.value.email,
      this.form.value.name,
      this.form.value.userName,
      this.form.value.password
    );

    this.authService.registerUser(user);

  }

}