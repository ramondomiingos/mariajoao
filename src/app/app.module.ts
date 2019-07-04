import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { HttpClientModule } from '@angular/common/http';
import {NgxMaskModule} from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenubarComponent } from './menubar/menubar.component';
import { AgendaComponent } from './agenda/agenda.component';
import { UserbarComponent } from './userbar/userbar.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { esmalteriaSettings } from './config';
import { ClienteComponent } from './cliente/cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenubarComponent,
    AgendaComponent,
    UserbarComponent,
    FuncionarioComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DlDateTimeDateModule,  
    DlDateTimePickerModule,
    HttpClientModule,
    NgxMaskModule.forRoot()
  ],
  providers: [esmalteriaSettings],
  bootstrap: [AppComponent]
})
export class AppModule { }
