import { AdminLayoutComponent } from "./components/admin-layout/admin-layout.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BloodFormComponent } from "./components/blood-form/blood-form.component";
import { ChartComponent } from "./components/chart/chart.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },
 
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "blood",
        component: BloodFormComponent,
      },
      {
        path: "chart",
        component: ChartComponent,
      },
     
     
    ],
  },

  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
