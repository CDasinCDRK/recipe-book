import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyA2qVuP4jrB7W59N3XgNqpqn1ij3xGv1UI",
      authDomain: "ng-recipe-book-228bf.firebaseapp.com"
    });
  }
  
  onNavigate(feature: string){
    this.loadedFeature = feature; 
  }
}
