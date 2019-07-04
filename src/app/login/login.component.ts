import { esmalteriaSettings } from './../config';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { FormsModule , NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user = new Usuario();
  constructor(private router:Router, private  config : esmalteriaSettings, private http: HttpClient) { }

  ngOnInit() {
  }
  logar(form: NgForm) {
    
  
 if(form.controls['username'].value.length > 3 && form.controls['senha'].value.length > 0 ){
  this.http.post(this.config.URL_BASE+'login/', form.value)
  .subscribe( data=>{ console.log(data);
    localStorage.setItem("user-s", JSON.stringify(data));
  this.router.navigate(['dashboard'])
  },
  error => {
    console.log(error);
  });
    }

  }

}
