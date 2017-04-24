import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyMapComponent } from './components/mymap.component';
import { AnalyseListComponent } from './components/analyse-list.component';

import { DataAnalyse } from './services/data-analyse.service';

@NgModule({
  declarations: [
    AppComponent,
    MyMapComponent,
    AnalyseListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataAnalyse],
  bootstrap: [AppComponent]
})
export class AppModule { }
