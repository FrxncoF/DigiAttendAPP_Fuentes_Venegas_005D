import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  usuario={
    username:'',
    password:''
  }
  onSubmit(){
    console.log('Submit');
    console.log(this.usuario)
  }
}
