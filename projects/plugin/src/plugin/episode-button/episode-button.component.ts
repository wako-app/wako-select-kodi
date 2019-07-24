import { Component } from '@angular/core';
import { Episode, EpisodeDetailBaseComponent, Show, KodiHostStructure } from '@wako-app/mobile-sdk';
import { TestHostService } from '../services/kodi.host.service';

@Component({
  templateUrl: './episode-button.component.html',
  styleUrls: ['./episode-button.component.scss']
})
export class EpisodeButtonComponent extends EpisodeDetailBaseComponent {
  hosts: KodiHostStructure[];
  host: KodiHostStructure;

  constructor(protected kodi: TestHostService) {
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

  setShowEpisode(show: Show, episode: Episode): any {}
}
