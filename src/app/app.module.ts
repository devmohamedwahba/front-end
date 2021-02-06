import { TokenInterceptor } from "./interceptor/token-interceptor.ts ";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AdminLayoutComponent } from "./components/admin-layout/admin-layout.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { BloodFormComponent } from './components/blood-form/blood-form.component';

import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './components/chart/chart.component';

import {  ThemeService } from 'ng2-charts';
import { RecaptchaModule } from "ng-recaptcha";










@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    AdminLayoutComponent,
    SideBarComponent,
    BloodFormComponent,
    ChartComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    RecaptchaModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    ThemeService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
