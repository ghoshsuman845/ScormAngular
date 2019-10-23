import { Component } from '@angular/core';
import {ScormService} from 'src/app/services/scorm.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scormCourseAngular';
 
  public score = 0;
  public readonly maxScore = 100;
  public readonly minScore = 0;
  public readonly apiVersion: string = 'not found';

  constructor(private scormService: ScormService) {
    this.apiVersion = scormService.apiVersion;
    this.score = scormService.score;
  }

  public changeScore(score: number) {
    if (score >= this.minScore && score <= this.maxScore) {
      this.score = score;
      this.scormService.score = this.score;
    } else {
      this.score = score < this.minScore ? this.minScore : this.maxScore;
    }
  }

  public submitScore() {
    this.scormService.commit(); // Finally saves data to LMS
    this.scormService.terminate();
    window.close();
  }
}
