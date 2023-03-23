import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from "./shared/components/admin-layout/admin-layout.component";
import {DashboardPageComponent} from "./dashboard-page/dashboard-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {CreatePageComponent} from "./create-page/create-page.component";
import {EditPageComponent} from "./edit-page/edit-page.component";

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'dashboard', component: DashboardPageComponent},
      {path: 'create', component: CreatePageComponent},
      {path: 'product/:id/edit', component: EditPageComponent},
      {path: '**', redirectTo: ''},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
