import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-passingdata-pc',
  templateUrl: './passingdata-pc.component.html',
  styleUrls: ['./passingdata-pc.component.css']
})
// export class PassingdataPCComponent implements OnChanges {
//   ngOnChanges(changes: SimpleChanges): void {

//     for(let property in changes){
//       if(property == 'count'){
//         console.log('Previous', changes[property].previousValue)
//         console.log('Current:', changes[property].currentValue)
//         console.log('firstChange:', changes[property].firstChange)
//       }
//     }
//   }
 
//   @Input('mycount')  count: number | undefined;

// }
export class PassingdataPCComponent  {
 
  private _count: number | undefined;
  @Input()
  public get count(): number | undefined {
    return this._count;
  }
  public set count(value: number | undefined) {
    this._count = value;
    console.log(this._count)
  }

}
