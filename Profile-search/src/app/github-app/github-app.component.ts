import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {
  public githubUserQuery!: string;
  public githubProfile:any;
  public githubRepos!: any[];

  constructor() { }

  public searchUser(){

  }

  ngOnInit(): void {
  }

}
