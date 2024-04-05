import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFormComponent } from './edit-form/edit-form.component';

const routes: Routes = [
  {
    path:"/edit",
    component: EditFormComponent,
    title:"Edit Form"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
