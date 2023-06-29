import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { GanttModule } from 'ngx-gantt';
import { GojsAngularModule } from 'gojs-angular';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    //GanttModule,
    GojsAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
