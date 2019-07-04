import { esmalteriaSettings } from './../config';
import { Component, OnInit } from '@angular/core';
import { FormsModule , NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private  config : esmalteriaSettings, private http: HttpClient) { }
  public mensagem = false;
  public clientes;
  ngOnInit() {
 
    this.http.get(this.config.URL_BASE+'cliente/')
    .subscribe( data=>{ this.clientes = data;
    },
    error => {
      console.log(error);
    });
  }

  addcliente(form: NgForm) {
    //form.controls['action'].value = "INSERT";
    form.value.action = 'INSERT';
    console.log(form.value);
    this.http.post(this.config.URL_BASE+'cliente/', form.value)
    .subscribe( data=>{ this.ngOnInit();
      this.mensagem = true;
      this.ngOnInit();

       
    },
    error => {
      console.log(error);
    });
  }
}
