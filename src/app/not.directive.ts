import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNot]'
})
export class NotDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

  @Input() set appNot(condition: boolean){
    if(!condition){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else{ 
      this.viewContainerRef.clear
    }
  }

}
