import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public funcionario = [
    {
        "id": "3",
        "nome": "ramon domingos duarte ",
        "username": "ramondomingos",
        "senha": "e10adc3949ba59abbe56e057f20f883e",
        "nivel": "2",
        "ativo": "1"
    },
    {
        "id": "4",
        "nome": "jefer araujo ",
        "username": "jeffer",
        "senha": "e10adc3949ba59abbe56e057f20f883e",
        "nivel": "2",
        "ativo": "1"
    }
];
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
    console.log(form.controls['nome']);
  }
}
}