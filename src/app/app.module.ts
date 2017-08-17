import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { SweepDetailComponent } from './sweep-detail.component';
import { VariableFreqComponent } from './variable-freq.component';
import { DatasetTitlePipe } from './dataset-title.pipe';
import { DisplayCodePipe } from './display-code.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SweepDetailComponent,
    VariableFreqComponent,
    DatasetTitlePipe,
    DisplayCodePipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
