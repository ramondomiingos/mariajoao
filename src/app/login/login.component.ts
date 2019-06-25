import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { FormsModule , NgForm} from '@angular/forms';
import { Router } from '@angular/router';
//import { HttpClient, HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user = new Usuario();
  constructor(private router:Router) { }

  ngOnInit() {
  }
  logar(form: NgForm) {

 if(form.controls['email'].value.length > 3 && form.controls['senha'].value.length > 0 ){
  localStorage.setItem("user-s", form.controls['email'].value);
  this.router.navigate(['dashboard'])
    }

  }

}
