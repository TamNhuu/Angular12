import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListstudentComponent } from './liststudent/liststudent.component';

import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { TestcustompipeComponent } from './testcustompipe/testcustompipe.component';
import { TempconverterPipe } from './tempconverter.pipe';
import { PassingdataPCComponent } from './passingdata-pc/passingdata-pc.component';
import { PassingdataCpComponent } from './passingdata-cp/passingdata-cp.component';

@NgModule({
  declarations: [
    AppComponent,
    ListstudentComponent,
    CustomerComponent,
    TestcustompipeComponent,
    TempconverterPipe,
    PassingdataPCComponent,
    PassingdataCpComponent,
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
