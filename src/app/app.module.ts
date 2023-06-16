import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListstudentComponent } from './liststudent/liststudent.component';

import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { HighlightDirective } from './highlight.directive';
import { NotDirective } from './not.directive';
import { TestpipeComponent } from './testpipe/testpipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ListstudentComponent,
    CustomerComponent,
    HighlightDirective,
    NotDirective,
    TestpipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
