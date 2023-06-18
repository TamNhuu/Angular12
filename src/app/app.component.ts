import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  countryList = [
    { id: 1, name: 'Viet Nam' },
    { id: 2, name: 'Lao' },
    { id: 3, name: 'Campuchia' }

  ]

  title = 'demoapp';
  public count = 5;

  contactForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      pincode: new FormControl()
    })
  })

  public onSubmit() {
    console.log(this.skillsForm.value)
  }
  public skillsForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([
        { skill: 'PHP', exp: ' 2 years' },
        { skill: 'Java', exp: ' 1 year' },
        { skill: 'Python', exp: ' 3 months' }
      ])
    })
  }

  get skills(): FormArray {
    return this.skillsForm.get("skills") as FormArray
  }

  newskill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
  }

  addskills() {
    this.skills.push(this.newskill())
  }

  removeskill(i: number) {
    this.skills.removeAt(i);
  }
}

export class country {
  public id: string;
  public name: string;

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
  }
}

