import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  changeToLogin(){
    this.showPanel.emit('login');
  }

  registerUser(){
    console.log(this.form);
  }

}