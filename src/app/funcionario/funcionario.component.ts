import { Component, OnInit } from '@angular/core';
import { FormsModule , NgForm} from '@angular/forms';
import { esmalteriaSettings  } from '../config';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
  private headers = {
    headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    "Accept":"application/json",
    "Content-Type":"application/json",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods":"GET, POST",
    "Access-Control-Allow-Headers": "Content-Type, Accept"

    })
  } 
  constructor(private  config : esmalteriaSettings, private http: HttpClient) { }
  public funcionario;
  ngOnInit() {
    this.http.get(this.config.URL_BASE+'funcionario/', this.headers)
    .subscribe( data=>{  this.funcionario = data;console.log(this.funcionario);
     
    },
    error => {
      console.log(error)
    });
  }

  
public novo = {
  nome :"", username: "", senha : "", nivel: ""   
}
  
desativar(id){
  console.log("desativar"+id);
}
resetsenha(id){
  console.log("reset"+id);
}
addfuncionario(form: NgForm){

  if(form.controls['nome'].value.length > 3 && form.controls['senha'].value.length > 0 && form.controls['nivel'].value.length > 0){
    console.log(form.value);
  } 
}
}