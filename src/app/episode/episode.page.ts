import { Component } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'episode.page.html',
  styleUrls: ['episode.page.scss']
})
export class EpisodePage {
  constructor(public appService: AppService) {
  }

}
