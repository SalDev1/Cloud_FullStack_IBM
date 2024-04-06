import { Component, Input, OnInit } from '@angular/core';
import { ISSUES } from '../db_data';
import { Issue } from '../model/issue';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-issue-table',
  templateUrl: './issue-table.component.html',
  styleUrl: './issue-table.component.css'
})

export class IssueTableComponent implements OnInit {
  issues : Issue[] = ISSUES;

  constructor(private route : ActivatedRoute, private router : Router) {

  }
  
  onAddIssue() : void {
    this.router.navigate(['add-issue'])
  }

  onDeleteIssue(title : string) : void {
    this.issues = this.issues.filter((issue) => issue.title !== title)
  }

  ngOnInit() {
     this.issues;
  }
}
