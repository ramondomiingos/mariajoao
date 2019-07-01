import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
public dia= Date.now();
  constructor() { }

  ngOnInit() {
  }
  consultadata(){
    console.log(this.dia);
  }
}
