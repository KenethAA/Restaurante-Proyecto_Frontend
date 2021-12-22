import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuardian } from './api/services/login-guardian.service';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { TransportistasComponent } from './pages/transportistas/transportistas.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/login'},
  {path:'login',component:LoginComponent},
  {
    path: '',
    component:MenuComponent,
    canActivate:[LoginGuardian],
    children:[
      {path: 'welcome',component:WelcomeComponent},
      {path: 'vehiculos',component:VehiculosComponent},
      {path: 'transportistas',component:TransportistasComponent},
    ]
  },
  {
    path:"**",component:ErrorComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
