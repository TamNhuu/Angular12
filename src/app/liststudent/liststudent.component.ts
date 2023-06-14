import { Component } from '@angular/core';

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent {
  public student: Student = {
    name: 'Nickki',
    age: 22,
    mark: 10,
    img: '../assets/img/nickki.jpg'
  };

  public getMark(value: any){
    this.student.mark = value;
  }
}

export interface Student{
  name: string;
  age: number;
  mark: number;
  img: string;
}


