import { Component } from '@angular/core';

@Component({
  selector: 'app-testpipe',
  templateUrl: './testpipe.component.html',
  styleUrls: ['./testpipe.component.css']
})
export class TestpipeComponent {

    dateValue = '2023-06-16';
    textValue = 'Hello WOrLd';
    numberValue = 5.68756764538814;
    percentValue = 0.2653;
}
