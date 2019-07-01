import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userbar',
  templateUrl: './userbar.component.html',
  styleUrls: ['./userbar.component.css']
})
export class UserbarComponent implements OnInit {

  constructor(private router: Router) { }

  public usuario ;
  ngOnInit() {

  this.usuario = localStorage.getItem('user-s');
  if(this.usuario ==null){ this.router.navigate(['login'])}
  }
  logout(){
    localStorage.removeItem('user-s');
    this.router.navigate(['login']);
  }
 

}
