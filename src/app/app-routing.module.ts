import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParoleComponent} from "./component/parole/parole.component"
import {MenuComponent} from "./component/menu/menu.component";

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'parole', component: ParoleComponent },
  { path: '**', redirectTo: '/menu' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
