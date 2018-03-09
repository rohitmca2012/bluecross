import { Component, OnInit } from '@angular/core';
import { NetworkService } from './network-service';
import {IPosts} from "../posts/post";
import { Routes } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NetworkService]
})
export class AppComponent implements OnInit{
  title = 'app';
  private passwordButtonText="Show";
  _postsArray: IPosts[];
  method='email';
 
  constructor(private apiSerivce: NetworkService,
  private router: Router,) {
  }

  getPosts(): void {
      this.apiSerivce.getPosts()
          .subscribe(
              resultArray => this._postsArray = resultArray,
              error => console.log("Error :: " + error)
          )
  }

  ngOnInit(): void {
      this.getPosts();
  }
  showPassword(input: any): any {
   input.type = input.type === 'password' ?  'text' : 'password';
   this.passwordButtonText = input.type === 'password' ?  'Hide' : 'Show';
  }
  changeMethod(method:any){
    if(method==='email'){
      this.method = 'phone';
    }
    else{
      this.method = 'email';
    }
  }
}
