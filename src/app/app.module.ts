import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListstudentComponent } from './liststudent/liststudent.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { HighlightDirective } from './highlight.directive';
import { NotDirective } from './not.directive';
import { TestpipeComponent } from './testpipe/testpipe.component';
import { ChildComponent } from './child/child.component';
import { TemplateformComponent } from './templateform/templateform.component';

@NgModule({
  declarations: [
    AppComponent,
    ListstudentComponent,
    CustomerComponent,
    HighlightDirective,
    NotDirective,
    TestpipeComponent,
    ChildComponent,
    TemplateformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
