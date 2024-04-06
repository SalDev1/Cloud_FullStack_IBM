import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueAddComponent } from './issue-add/issue-add.component';
import { IssueTableComponent } from './issue-table/issue-table.component';

const routes: Routes = [
  {
    path:'',
    component:IssueTableComponent,
    title:"Welcome"
  },
  {
    path:'add-issue',
    component:IssueAddComponent,
    title:"Add Issue"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
