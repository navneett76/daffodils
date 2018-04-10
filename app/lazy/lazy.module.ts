import  { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { Http } from '@angular/http'

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { loginComponent } from '../_login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AlertComponent } from '../_directives/index';
import { AuthGuard } from '../_guards/index';
import { JwtInterceptor } from '../_helpers/index';
import { AlertService, AuthenticationService, UserService } from '../_services/index';

// import { routing } from './lazy.routing';

const routes: Routes = [
  { path: '', component: loginComponent },
  { path: 'register', component: RegisterComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, CommonModule, HttpClientModule],
  declarations: [loginComponent, RegisterComponent],
  providers: [AuthGuard, AlertService, UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        }, AuthenticationService]
})
export class LazyModule {}



// export const routing: ModuleWithProviders = RouterModule.forChild(routes);