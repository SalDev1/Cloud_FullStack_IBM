import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssueTableComponent } from './issue-table/issue-table.component';
import { IssueAddComponent } from './issue-add/issue-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyBootstrapInputModule } from '@ngx-formly/bootstrap/input';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  declarations: [
    AppComponent,
    IssueTableComponent,
    IssueAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyBootstrapInputModule,

    FormlyModule.forRoot({  // Global Validations.
      validationMessages:[
        {name:'required',message:'Field is mandatory'}
      ]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
