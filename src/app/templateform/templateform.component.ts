import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent {

  student = {
    studentCode: 'CCN-1',
    studentName: 'COCONUT',
    studentAddress: 'Cu Chi'
  }
  public onSubmit(addStudentForm: NgForm){
      console.log(this.student)
  }
}
