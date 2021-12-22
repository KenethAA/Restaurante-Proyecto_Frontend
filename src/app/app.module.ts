import { NgModule, Provider, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';

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


import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDrawerModule } from 'ng-zorro-antd/drawer'
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WelcomeComponent,
    ColaboradoresComponent,
    DonacionesComponent,
    EmpleadosComponent,
    EventosComponent,
    FacturaComponent,
    FranquiciasComponent,
    InventarioComponent,
    MenuresComponent,
    ProveedoresComponent,
    ReservacionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,

    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzCheckboxModule,
    NzMessageModule,
    NzIconModule,
    NzDrawerModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzResultModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
