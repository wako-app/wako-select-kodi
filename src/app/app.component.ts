import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  ready = false;

  constructor(
    private platform: Platform,
    private appService: AppService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.appService.loadPlugins().subscribe(() => {
        this.ready = true;
      });
    });
  }
}
