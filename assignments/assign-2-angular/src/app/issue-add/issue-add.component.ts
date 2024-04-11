import { Component, OnInit } from '@angular/core';
import { ISSUES } from '../db_data';
import { Issue } from '../model/issue';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-issue-add',
  templateUrl: './issue-add.component.html',
  styleUrl: './issue-add.component.css'
})
export class IssueAddComponent implements OnInit{
  issues : Issue[] = ISSUES;
  newIssue : Issue = <Issue>{}

  constructor(private route : ActivatedRoute ,private router : Router) {

  }

  form = new FormGroup({})
  options : FormlyFormOptions = {}
  fields : FormlyFieldConfig[] = [
    {
      key: 'title',
      type: 'input',
      props : {
        required : true,
        label : "Title"
      }
    },
    {
      key : 'description',
      type : 'textarea',
      props : {
        required : true, 
        label : "Description"
      }
    },
    {
      key : 'priority',
      type : 'radio',
      props : {
        type:'radio',
        label : 'Priority',
        required : true,
        options: [
          {value:'High' , label:'High'} , 
          {value:'Low', label:'Low'}
        ]
      }
    },
    {
      key : "type",
      type : "select",
      props : {
        type : 'select',
        label : 'Type',
        required : true,
        options: 
        [
          {value: 'Feature' , label : 'Feature'} , 
          {value: 'Bug', label : 'Bug'} , 
          {value : 'Documentation', label : 'Documentation'}
        ]
      }
    }
  ]

  submit(issue : Issue) : void {
     this.issues.push(issue);
     this.router.navigate(['']);
  }

  onBack() : void {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.issues;
  }
}
