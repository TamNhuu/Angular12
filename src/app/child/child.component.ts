import { Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, DoCheck{
  public increment() {
    this.countChild++;
  }

  @Input() countChild: any;

  constructor() {
    console.log('Constructor: Child-Component')
  }
  ngDoCheck(): void {
    console.log('DoCheck: ' + this.countChild)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Onchanges:' + JSON.stringify(changes))
  }
  ngOnInit(): void {
    console.log('OnInit: ChildComponent')
  }
}
