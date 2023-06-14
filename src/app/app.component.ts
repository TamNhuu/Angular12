import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public student: Student = {
    name: 'Nickki',
    age: 22,
    mark: 10,
    img: '..\assets\img\nickki.jpg'
  }
  title = 'demoapp';
}

export interface Student{
  name: string;
  age: number;
  mark: number;
  img: string;
}
