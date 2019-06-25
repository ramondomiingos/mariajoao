import { AgendaComponent } from './agenda/agenda.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
                        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
                        { path: 'dashboard', component: DashboardComponent},
                        { path: 'login', component: LoginComponent},
                        { path: "agenda", component:AgendaComponent}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
