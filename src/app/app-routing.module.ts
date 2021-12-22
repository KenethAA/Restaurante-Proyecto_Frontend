import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuardian } from './services/login-guardian.service';
import { ErrorComponent } from './pages/error/error.component';

//Importacion de componentes
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ColaboradoresComponent } from './pages/colaboradores/colaboradores.component';
import { DonacionesComponent } from './pages/donaciones/donaciones.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { FacturaComponent } from './pages/factura/factura.component';
import { FranquiciasComponent } from './pages/franquicias/franquicias.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { MenuresComponent } from './pages/menures/menures.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { ReservacionesComponent } from './pages/reservaciones/reservaciones.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
 // { path: 'menu', component: MenuComponent}
//  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
  { 
    path: '',
    component: MenuComponent,
    canActivate:[LoginGuardian],
    children:[
      {path:'welcome', component:WelcomeComponent},
      {path:'colaboradores',component:ColaboradoresComponent},
      {path:'donaciones',component:DonacionesComponent},
      {path:'empleados',component:EmpleadosComponent},
      {path:'eventos',component:EventosComponent},
      {path:'factura',component:FacturaComponent},
      {path:'franquicias',component:FranquiciasComponent},
      {path:'inventario',component:InventarioComponent},
      {path:'menures',component:MenuresComponent},
      {path:'proveedores',component:ProveedoresComponent},
      {path:'reservaciones',component:ReservacionesComponent}
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

