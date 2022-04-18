import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { count } from 'console';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor(private httpClient:HttpClient) { }
// profile
public getProfile(searchQuery: any){
  let dataURL = `https://api.github.com/user/${searchQuery}?client_id=${CLIENT_ID}&client_secret${CLIENT_SECRET}`;
  return this.httpClient.get<any>(dataURL).pipe(
    retry( count:1),
    catchError(this.handleErrors)
  );
}
// repos
public getRepos(searchQuery: any){
  let dataURL = `https://api.github.com/user/${searchQuery}/repos?client_id=${CLIENT_ID}&client_secret${CLIENT_SECRET}`;
  return this.httpClient.get<any[]>(dataURL).pipe(
    retry( count:1),
    catchError(this.handleErrors)
  );
}







public handleErrors(error:HttpErrorResponse){
  let errorMessage:string;
  if (error.error instanceof ErrorEvent){
    errorMessage = `MESSAGE : ${error.error.message}`;


  }
  else{
    errorMessage = `STATUS: ${error.status} MESSAGE: ${error.message}`
  }
  return throwError(errorMessage);
  
}


}
