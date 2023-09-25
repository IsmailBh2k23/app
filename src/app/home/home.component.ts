import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name = "";
  theme="Default";
imageURL="https://www.ecoles.com.tn/sites/default/files/styles/large/public/universite/logo/logo_ISET-SFAX.jpg?itok=4AEBQPxl"; 
alternative="logo";
todos = [{title: 'Learn angular', done: false},{title: 'Create project angular', done: false}]; 

 
change(){ 
  this.todos.map(value => { 
   value.done = true; 
  }); 
}
}
