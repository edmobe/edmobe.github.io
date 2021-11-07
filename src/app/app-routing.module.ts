import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModelComponent } from './model/model.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "model",
    component: ModelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
