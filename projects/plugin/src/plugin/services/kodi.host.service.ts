import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { KodiHostStructure } from '@wako-app/mobile-sdk';
import { logData } from './tools';

@Injectable()
export class TestHostService {
  constructor(private storage: Storage) {
    this.test();
  }

  async test() {
    const hosts = await this.getHosts();

    logData('Hosts');
    logData(hosts);

    const currentHost = await this.getCurrentHost();

    logData('current host');
    logData(currentHost);
  }

  getHosts(): Promise<KodiHostStructure[]> {
    return this.storage.get('kodi_hosts').then(hosts => {
      return hosts || [];
    });
  }

  getCurrentHost(): Promise<KodiHostStructure> {
    return this.storage.get('kodi_current_host').then(host => {
      if (host && (!host.name || host.name === '')) {
        host.name = 'Kodi Host ' + host.host;
      }
      return host;
    });
  }

  setCurrentHost(host: KodiHostStructure): Promise<KodiHostStructure> {
    return this.storage.set('kodi_current_host', host);
  }
}
