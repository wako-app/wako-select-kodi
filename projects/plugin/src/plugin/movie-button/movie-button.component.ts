import { Component } from '@angular/core';
import { MovieDetailBaseComponent, KodiHostStructure } from '@wako-app/mobile-sdk';
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
    await this.kodi.setCurrentHost(this.host);
  }

  setMovie(): any {}
}
