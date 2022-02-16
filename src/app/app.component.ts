import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  titulo = 'Listado de personas';

  constructor (
    private loginService : LoginService
  ) {};

  ngOnInit () {
    initializeApp({

      apiKey: "AIzaSyCmjiDengViUkbt3UPY9RnUGg5iKiIra0w",
    
      authDomain: "listado-personas-3420e.firebaseapp.com",
    
      databaseURL: "https://listado-personas-3420e-default-rtdb.firebaseio.com",
    
      projectId: "listado-personas-3420e",
    
      storageBucket: "listado-personas-3420e.appspot.com",
    
      messagingSenderId: "1027406006432",
    
      appId: "1:1027406006432:web:b3c0f9a45338f6f2db21c5",
    
      measurementId: "G-L40V8VYQ6G"
    
    });

  }

  isLogged () : boolean {
    return this.loginService.isLogged()
  }

  salir () {
    this.loginService.logout()
  }
  
}
