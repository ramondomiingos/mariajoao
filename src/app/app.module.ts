import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenubarComponent } from './menubar/menubar.component';
import { AgendaComponent } from './agenda/agenda.component';
import { UserbarComponent } from './userbar/userbar.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { esmalteriaSettings } from './config';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenubarComponent,
    AgendaComponent,
    UserbarComponent,
    FuncionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DlDateTimeDateModule,  
    DlDateTimePickerModule,
    HttpClientModule
  ],
  providers: [esmalteriaSettings],
  bootstrap: [AppComponent]
})
export class AppModule { }
