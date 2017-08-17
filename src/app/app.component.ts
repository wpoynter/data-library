import { Component, OnInit } from '@angular/core';

import { Study, Sweep } from './study';
import { StudyService } from './study.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudyService]
})

export class AppComponent implements OnInit {
  title = 'Data Library';
  studies: Study[];
  selectedSweep: Sweep;

  constructor(private studyService: StudyService) {}

  getStudy(): void {
    console.log(this.studyService.getStudies());
    this.studyService.getStudies().then(studies => this.studies = studies);
  }

  ngOnInit(): void {
    this.getStudy();
  }

  onSelect(sweep: Sweep): void {
    this.selectedSweep = sweep;
  }
}
