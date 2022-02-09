import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../app/modules/auth/components/login/login.component'

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "home",
    loadChildren: () =>
      import("./modules/home/home.module").then(
        (mod) => mod.HomeModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
