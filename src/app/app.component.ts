import { Component, ViewChild } from '@angular/core';
import { PassingdataCpComponent } from './passingdata-cp/passingdata-cp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'demoapp';
  // Counter= 7;

  // increment(){
  //   this.Counter++;
  // }
  // decrement(){
  //   this.Counter--;
  // }
  
  // countP: any;
  // countChangedHandler(count: number){
  //   this.countP = count;
  //   console.log(count);
  // }
  @ViewChild(PassingdataCpComponent) child?: PassingdataCpComponent;

    countp= this.child?.count;
  increment() {
    this.child?.increment();
  }
  decrement() {
    this.child?.decrement();
  }
}


