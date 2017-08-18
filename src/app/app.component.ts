import { Component, OnInit } from '@angular/core';

import { ConfigService } from './shared/config/data-library-config.service'
import { Study } from './studies/shared/study.model';
import { Sweep } from './sweeps/shared/sweep.model';
import { StudyService } from './studies/shared/study.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConfigService, StudyService]
})

export class AppComponent implements OnInit {
  title = 'Data Library';
  studies: Study[];
  selectedSweep: Sweep;

  constructor(
    private configService: ConfigService,
    private studyService: StudyService
  ) {}

  getStudy(): void {
    this.studyService.getStudies().then(studies => this.studies = studies);
  }

  ngOnInit(): void {
    this.configService.getConfig().then(config => this.title = config.title);
    this.getStudy();
  }

  onSelect(sweep: Sweep): void {
    this.selectedSweep = sweep;
  }
}
