import { Component } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'movie.page.html',
  styleUrls: ['movie.page.scss']
})
export class MoviePage {
  constructor(public appService: AppService) {
  }

}
