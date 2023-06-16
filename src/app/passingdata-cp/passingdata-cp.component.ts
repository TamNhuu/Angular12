import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-passingdata-cp',
  templateUrl: './passingdata-cp.component.html',
  styleUrls: ['./passingdata-cp.component.css']
})
// export class PassingdataCpComponent {
  
//   count =5;

//   @Output() countChanged: EventEmitter<number> =  new EventEmitter()

//   increment(){
//     this.count++;
//     this.countChanged.emit(this.count);
//   }
//   decrement(){
//     this.count--;
//     this.countChanged.emit(this.count);
//   }
// }
export class PassingdataCpComponent { 
  public count =0;

  increment(){
    this.count++;
  }
  decrement(){
    this.count--;
  }
}
