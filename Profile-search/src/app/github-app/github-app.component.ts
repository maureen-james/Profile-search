import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {
  public githubUserQuery!: string;
  public githubProfile:any;
  public githubRepos!: any[];
  public errorMessage!: string;
  

  constructor(private githubService:GithubServiceService) { }

  public searchUser(){
    this.githubService.getProfile(this.githubUserQuery).subscribe(next(data) =>{
      this.githubProfile=data,
    }, error(error) => {
      this.errorMessage = error

    });
     

  }

  ngOnInit(): void {
  }

}
