import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  ngOnInit(){
    this.el.nativeElement.style.background = 'yellow'
  }
}
