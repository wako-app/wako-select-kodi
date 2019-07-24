import { Component } from '@angular/core';
import { MovieDetailBaseComponent, KodiHostStructure, KodiAppService } from '@wako-app/mobile-sdk';
import { TestHostService } from '../services/kodi.host.service';
import { AlertController } from '@ionic/angular';

@Component({
  templateUrl: './movie-button.component.html',
  styleUrls: ['./movie-button.component.scss']
})
export class MovieButtonComponent extends MovieDetailBaseComponent {
  hosts: KodiHostStructure[];
  host: KodiHostStructure;

  constructor(protected alertController: AlertController, protected kodi: TestHostService) {
    super();
  }

  async ngOnInit() {
    this.hosts = await this.kodi.getHosts();
    const currHost = await this.kodi.getCurrentHost();

    this.host = this.hosts.find((h) => h.host === currHost.host);
  }

  async onChange() {
    const oldHost = KodiAppService.currentHost

    KodiAppService.currentHost = this.host;
    const observe = KodiAppService.checkAndConnectToCurrentHost()
    const success = await observe.toPromise()
    if(!success) {
      KodiAppService.currentHost = oldHost;
      this.host = this.hosts.find((h) => h.host === oldHost.host);
      const alert = await this.alertController.create({
        header: 'Connection Failed',
        message: 'Unable to connect to Kodi Host',
      });
      await alert.present()
    } else {
      await this.kodi.setCurrentHost(this.host);
      KodiAppService.connect();
    }
  }

  setMovie(): any {}
}
