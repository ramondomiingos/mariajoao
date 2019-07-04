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

  constructor(private  config : esmalteriaSettings, private http: HttpClient) { }
  public funcionario;
  ngOnInit() {
    this.http.get(this.config.URL_BASE+'funcionario/')
    .subscribe( data=>{  this.funcionario = data;
     
    },
    error => {
      console.log(error)
    });
  }

  
public novo = {
  nome :"", username: "", senha : "", nivel: ""   };
  
 //{'content-type': 'application/json', 'Accept':'application/json'};
 public mensagem = false ;
 public texto = "" ;
desativar(id){

  
var params = {"id" :id, "ativo": false, "action": "put"};

  this.http.post(this.config.URL_BASE+'funcionario/', params)
  .subscribe( data=>{  this.ngOnInit();
  },
  error => {
  });
  this.ngOnInit();
}
resetsenha(id){
  var params = {"id" :id, "senha": "123456", "action": "put" }
  this.http.post(this.config.URL_BASE+'funcionario/', params)
  .subscribe( data=>{ 
  },
  error => {
  });
}
addfuncionario(form: NgForm){

  if(form.controls['nome'].value.length> 3 && form.controls['senha'].value.length > 0 && form.controls['nivel'].value.length > 0){
 console.log(form.value);
    this.http.post(this.config.URL_BASE+'funcionario/', form.value)
  .subscribe( data=>{ this.ngOnInit();
     this.mensagem = true;this.texto = "Usuário adicionado! "
  },
  error => {
    console.log(error);
  });
  } 
}
}