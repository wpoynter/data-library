import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { SweepDetailComponent } from './sweeps/sweep.component';
import { VariableFreqComponent } from './variables/variable-freq/variable-freq.component';
import { DatasetTitlePipe } from './shared/pipes/dataset-title.pipe';
import { DisplayCodePipe } from './shared/pipes/display-code.pipe';

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
