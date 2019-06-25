import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }
  public usuario ;
  ngOnInit() {

  this.usuario = localStorage.getItem('user-s');
  console.log(this.usuario);
  if(this.usuario ==null){ this.router.navigate(['login'])}
  }
  logout(){
    localStorage.removeItem('user-s');
    this.router.navigate(['login']);
  }

}
