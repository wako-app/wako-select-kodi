import { Injectable } from '@angular/core';
import { KodiAppService, PluginLoaderService } from '@wako-app/mobile-sdk';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(protected pluginLoader: PluginLoaderService) {

    KodiAppService.setHosts([{
      name: 'MyHost 1',
      host: '127.0.0.1',
      port: 8080
    }, {
      name: 'MyHost 2',
      host: '127.0.0.2',
      port: 8080
    }]);
  }

  openUrl() {
    KodiAppService.checkAndConnectToCurrentHost().pipe(
      switchMap(() => {
        return KodiAppService.openUrl('https://ia801302.us.archive.org/1/items/TheWater_201510/TheWater.mp4');
      })
    )
      .subscribe();
  }

  loadPlugins() {
    return this.pluginLoader.install('/assets/plugins/manifest.json', 'en');
  }
}
