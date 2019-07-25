import { Component, OnInit } from '@angular/core';
import { Episode, EpisodeDetailBaseComponent, Show, KodiHostStructure, KodiAppService } from '@wako-app/mobile-sdk';
import { TestHostService } from '../services/kodi.host.service';
import { AlertController } from '@ionic/angular';

@Component({
  templateUrl: './episode-button.component.html',
  styleUrls: ['./episode-button.component.scss']
})
export class EpisodeButtonComponent extends EpisodeDetailBaseComponent implements OnInit {
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
    // const observe = KodiAppService.checkAndConnectToCurrentHost()
    // const success = await observe.toPromise()
    // if(!success) {
    //   KodiAppService.currentHost = oldHost;
    //   this.host = this.hosts.find((h) => h.host === oldHost.host);
    //   const alert = await this.alertController.create({
    //     header: 'Connection Failed',
    //     message: 'Unable to connect to Kodi Host',
    //   });
    //   await alert.present()
    // } else {
    //   await this.kodi.setCurrentHost(this.host);
    //   KodiAppService.connect();
    // }
  }

  setShowEpisode(show: Show, episode: Episode): any {}
}
