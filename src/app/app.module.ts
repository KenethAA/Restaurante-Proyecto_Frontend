import { forwardRef, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ApiModule } from './api/api.module';
import { environment } from 'src/environments/environment';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { LoginComponent } from './pages/login/login.component';
import { ApiInterceptor } from './api.interceptor';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { ErrorComponent } from './pages/error/error.component';
import { LoginGuardian } from './api/services/login-guardian.service';
import { TransportistasComponent } from './pages/transportistas/transportistas.component';
registerLocaleData(en);

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => ApiInterceptor),
  multi: true
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MenuComponent,
    VehiculosComponent,
    ErrorComponent,
    LoginComponent,
    TransportistasComponent
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
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzMessageModule,
    NzResultModule,
    NzCheckboxModule,
    NzPopconfirmModule,
    NzDrawerModule,

    ApiModule.forRoot({ rootUrl: environment.API }),
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    ApiInterceptor,
    API_INTERCEPTOR_PROVIDER,
    LoginGuardian
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
